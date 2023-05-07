import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import NxtWatchContext from '../NxtWatchContext'
import './index.css'
import {
  LoginBgContainer,
  LoginContainer,
  WebSiteLogo,
  WebSiteLogoContainer,
  Label,
  Input,
  ShowPasswordContainer,
  CheckBox,
  ShowPasswordLabel,
  LoginButton,
  ErrorLoginMsg,
  LoginCredintials,
} from './styledComponents'

class Login extends Component {
  state = {
    userNameInput: '',
    userPassInput: '',
    showPassword: false,
    isHavingErrorInLoginDetails: false,
    errorMsg: '',
  }

  onChangeUserName = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({userPassInput: event.target.value})
  }

  onChangeShowPasswordStatus = event => {
    this.setState({showPassword: event.target.checked})
  }

  onClickToLogin = async event => {
    event.preventDefault()
    const {userNameInput, userPassInput} = this.state
    const url = 'https://apis.ccbp.in/login'
    const loginDetails = {
      username: userNameInput,
      password: userPassInput,
    }
    const options = {method: 'POST', body: JSON.stringify(loginDetails)}
    const response = await fetch(url, options)
    if (response.ok === true) {
      const jsonData = await response.json()
      const jwtToken = jsonData.jwt_token

      Cookies.set('jwt_token', jwtToken, {expires: 30})

      const {history} = this.props
      history.replace('/')

      this.setState({isHavingErrorInLoginDetails: false})
    } else {
      const jsonData = await response.json()
      const errorMsg = jsonData.error_msg
      this.setState({isHavingErrorInLoginDetails: true, errorMsg})
    }
  }

  render() {
    const {
      userNameInput,
      userPassInput,
      showPassword,
      isHavingErrorInLoginDetails,
      errorMsg,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkThemeActivated} = value
          const NxtWatchLogoImgUrl = isDarkThemeActivated
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginBgContainer isDarkThemeActivated={isDarkThemeActivated}>
              <LoginContainer
                onSubmit={this.onClickToLogin}
                isDarkThemeActivated={isDarkThemeActivated}
              >
                <WebSiteLogoContainer>
                  <WebSiteLogo src={NxtWatchLogoImgUrl} alt="website logo" />
                </WebSiteLogoContainer>

                <Label
                  htmlFor="username"
                  isDarkThemeActivated={isDarkThemeActivated}
                >
                  USERNAME
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={userNameInput}
                  onChange={this.onChangeUserName}
                  isDarkThemeActivated={isDarkThemeActivated}
                />

                <Label
                  htmlFor="password"
                  isDarkThemeActivated={isDarkThemeActivated}
                >
                  PASSWORD
                </Label>
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={userPassInput}
                  onChange={this.onChangePassword}
                  isDarkThemeActivated={isDarkThemeActivated}
                />
                <ShowPasswordContainer>
                  <CheckBox
                    type="checkbox"
                    id="showPassword"
                    onChange={this.onChangeShowPasswordStatus}
                  />
                  <ShowPasswordLabel
                    htmlFor="showPassword"
                    isDarkThemeActivated={isDarkThemeActivated}
                  >
                    Show Password
                  </ShowPasswordLabel>
                </ShowPasswordContainer>

                <Popup
                  modal
                  trigger={
                    <LoginCredintials>login-creden... </LoginCredintials>
                  }
                  className="popup-content"
                >
                  <div className="login-cred-popup">
                    <p className="credential">username: rahul</p>
                    <p className="credential">password: rahul@2021</p>
                  </div>
                </Popup>

                <LoginButton
                  type="submit"
                  isDarkThemeActivated={isDarkThemeActivated}
                >
                  Login
                </LoginButton>

                {isHavingErrorInLoginDetails && (
                  <ErrorLoginMsg>{errorMsg}</ErrorLoginMsg>
                )}
              </LoginContainer>
            </LoginBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
