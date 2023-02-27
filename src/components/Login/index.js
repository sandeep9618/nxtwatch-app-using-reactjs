import {Component} from 'react'

import {
  MediumDevicesContainer,
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
} from './styledComponents'

class Login extends Component {
  state = {
    userNameInput: '',
    userPassInput: '',
    showPassword: false,
    isHavingErroOnLoginReq: false,
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
      this.setState({isHavingErroOnLoginReq: false})
    } else {
      const jsonData = await response.json()
      const errorMsg = jsonData.error_msg
      this.setState({isHavingErroOnLoginReq: true, errorMsg})
    }
  }

  render() {
    const {
      userNameInput,
      userPassInput,
      showPassword,
      isHavingErroOnLoginReq,
      errorMsg,
    } = this.state
    return (
      <MediumDevicesContainer>
        <LoginContainer onSubmit={this.onClickToLogin}>
          <WebSiteLogoContainer>
            <WebSiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </WebSiteLogoContainer>

          <Label htmlFor="username">USERNAME</Label>
          <Input
            id="username"
            type="text"
            placeholder="Username"
            value={userNameInput}
            onChange={this.onChangeUserName}
          />

          <Label htmlFor="password">PASSWORD</Label>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={userPassInput}
            onChange={this.onChangePassword}
          />
          <ShowPasswordContainer>
            <CheckBox
              type="checkbox"
              id="showPassword"
              onChange={this.onChangeShowPasswordStatus}
            />
            <ShowPasswordLabel htmlFor="showPassword">
              Show Password
            </ShowPasswordLabel>
          </ShowPasswordContainer>
          <LoginButton type="submit">Login</LoginButton>
          {isHavingErroOnLoginReq && <ErrorLoginMsg>{errorMsg}</ErrorLoginMsg>}
        </LoginContainer>
      </MediumDevicesContainer>
    )
  }
}

export default Login
