import {FiSun, FiLogOut} from 'react-icons/fi'
import {HiMoon, HiMenu} from 'react-icons/hi'
import Popup from 'reactjs-popup'

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
} from './styledComponents'

import NxtWatchContext from '../NxtWatchContext'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkThemeActivated, onClickToChangeTheme} = value
      const nxtWatchLogoImgUrl = isDarkThemeActivated
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const changeTheme = () => {
        onClickToChangeTheme()
      }

      return (
        <HeaderBgContainer isDarkThemeActivated={isDarkThemeActivated}>
          <NxtWatchButton type="button">
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
              <HiMenu
                size={24}
                color={isDarkThemeActivated ? '#ffffff' : '#000000'}
              />
            </SettingsButton>
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
                <LogoutPopUpContainer>
                  <LogOutText>Are you sure, you want to logout?</LogOutText>
                  <CancelButton onClick={() => close()}>Cancel</CancelButton>
                  <ConfirmButton onClick={() => close()}>Confirm</ConfirmButton>
                </LogoutPopUpContainer>
              )}
            </Popup>
          </LogoutAndThemeContainer>
        </HeaderBgContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Header
