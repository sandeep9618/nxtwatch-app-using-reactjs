import {FiSun, FiLogOut} from 'react-icons/fi'
import {HiMoon, HiMenu, HiFire} from 'react-icons/hi'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import './index.css'
import {
  HeaderBgContainer,
  NxtWatchLogo,
  NxtWatchButton,
  ProfileImg,
  LogoutAndThemeContainer,
  ThemeButton,
  LogOutButton,
  LogoutPopUpContainer,
  LogOutText,
  CancelButton,
  ConfirmButton,
  SettingsButton,
  ProfileImgButton,
  LogOutIconButton,
  PopUpContainer,
  OptionsPopupContainer,
  NavOptions,
  NavOption,
  NavOptionText,
  NavButton,
  CloseButton,
} from './styledComponents'

import NxtWatchContext from '../NxtWatchContext'

const NavItem = props => {
  const {
    eachOption,
    onChangeActiveRoute,
    activeNavOption,
    isDarkThemeActivated,
    onChangeActiveNavOption,
  } = props
  const {id, displayText, icon, path} = eachOption

  const onChangeActiveItem = () => {
    onChangeActiveRoute({id, onChangeActiveNavOption})
  }

  const isActiveOption = id === activeNavOption

  return (
    <Link to={path} className="link-item">
      <NavOption>
        <NavButton
          isActiveOption={isActiveOption}
          type="button"
          onClick={onChangeActiveItem}
          isDarkThemeActivated={isDarkThemeActivated}
        >
          {icon}
          <NavOptionText isDarkThemeActivated={isDarkThemeActivated}>
            {displayText}
          </NavOptionText>
        </NavButton>
      </NavOption>
    </Link>
  )
}

const navOptions = [
  {displayText: 'Home', icon: <AiFillHome size={20} />, id: 'HOME', path: '/'},
  {
    displayText: 'Trending',
    icon: <HiFire size={20} />,
    id: 'TRENDING',
    path: '/trending',
  },
  {
    displayText: 'Gaming',
    icon: <SiYoutubegaming size={20} />,
    id: 'GAMING',
    path: '/gaming',
  },
  {
    displayText: 'Saved Videos',
    icon: <BiListPlus size={20} />,
    id: 'SAVED VIDEOS',
    path: '/saved-videos',
  },
]

const Header = props => {
  const onChangeActiveRoute = idAndOnChangeNavOptionFunction => {
    const {id, onChangeActiveNavOption} = idAndOnChangeNavOptionFunction
    onChangeActiveNavOption(id)
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {
          isDarkThemeActivated,
          onClickToChangeTheme,
          activeNavOption,
          onChangeActiveNavOption,
        } = value
        const nxtWatchLogoImgUrl = isDarkThemeActivated
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const changeTheme = () => {
          onClickToChangeTheme()
        }

        const onLogout = () => {
          const {history} = props
          Cookies.remove('jwt_token')
          history.replace('/login')
        }

        const onChangeToHomeRoute = () => {
          const {history} = props
          history.push('/')
        }

        return (
          <HeaderBgContainer isDarkThemeActivated={isDarkThemeActivated}>
            <NxtWatchButton type="button" onClick={onChangeToHomeRoute}>
              <NxtWatchLogo src={nxtWatchLogoImgUrl} alt="website logo" />
            </NxtWatchButton>

            <LogoutAndThemeContainer>
              <ThemeButton
                type="button"
                onClick={changeTheme}
                data-testid="theme"
              >
                {isDarkThemeActivated ? (
                  <FiSun size={30} color="#ffffff" />
                ) : (
                  <HiMoon size={30} />
                )}
              </ThemeButton>
              <ProfileImgButton type="button">
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ProfileImgButton>
              <SettingsButton>
                <Popup
                  modal
                  trigger={
                    <HiMenu
                      size={24}
                      color={isDarkThemeActivated ? '#ffffff' : '#000000'}
                    />
                  }
                  className="popup-content"
                >
                  {close => (
                    <OptionsPopupContainer
                      isDarkThemeActivated={isDarkThemeActivated}
                    >
                      <CloseButton
                        onClick={() => close()}
                        isDarkThemeActivated={isDarkThemeActivated}
                      >
                        <AiOutlineClose size={21} />
                      </CloseButton>
                      <NavOptions>
                        {navOptions.map(eachOption => (
                          <NavItem
                            eachOption={eachOption}
                            key={eachOption.id}
                            isDarkThemeActivated={isDarkThemeActivated}
                            onChangeActiveRoute={onChangeActiveRoute}
                            activeNavOption={activeNavOption}
                            onChangeActiveNavOption={onChangeActiveNavOption}
                          />
                        ))}
                      </NavOptions>
                    </OptionsPopupContainer>
                  )}
                </Popup>
              </SettingsButton>
              <PopUpContainer>
                <Popup
                  modal
                  trigger={
                    <div className="logout-btn-container">
                      <LogOutButton
                        isDarkThemeActivated={isDarkThemeActivated}
                        type="button"
                      >
                        Logout
                      </LogOutButton>
                      <LogOutIconButton
                        type="button"
                        isDarkThemeActivated={isDarkThemeActivated}
                      >
                        <FiLogOut
                          isDarkThemeActivated={isDarkThemeActivated}
                          size={23}
                          className="log-out-icon"
                        />
                      </LogOutIconButton>
                    </div>
                  }
                  className="popup-content"
                >
                  {close => (
                    <LogoutPopUpContainer
                      isDarkThemeActivated={isDarkThemeActivated}
                    >
                      <LogOutText isDarkThemeActivated={isDarkThemeActivated}>
                        Are you sure, you want to logout?
                      </LogOutText>
                      <CancelButton
                        onClick={() => close()}
                        isDarkThemeActivated={isDarkThemeActivated}
                      >
                        Cancel
                      </CancelButton>
                      <ConfirmButton
                        onClick={onLogout}
                        isDarkThemeActivated={isDarkThemeActivated}
                      >
                        Confirm
                      </ConfirmButton>
                    </LogoutPopUpContainer>
                  )}
                </Popup>
              </PopUpContainer>
            </LogoutAndThemeContainer>
          </HeaderBgContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(Header)
