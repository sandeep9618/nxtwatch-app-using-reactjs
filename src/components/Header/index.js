import {BsSun} from 'react-icons/bs'
import {HiMoon} from 'react-icons/hi'
import Popup from 'reactjs-popup'

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
} from './styledComponents'

import NxtWatchContext from '../NxtWatchContext'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkThemeActivated} = value
      const nxtWatchLogoImgUrl = isDarkThemeActivated
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <HeaderBgContainer>
          <NxtWatchButton type="button">
            <NxtWatchLogo src={nxtWatchLogoImgUrl} alt="website logo" />
          </NxtWatchButton>
          <LogoutAndThemeContainer>
            <ThemeButton type="button">
              {isDarkThemeActivated ? (
                <BsSun size={30} />
              ) : (
                <HiMoon size={30} />
              )}
            </ThemeButton>
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={<LogOutButton type="button">Logout</LogOutButton>}
              className="popup-content"
            >
              {close => (
                <LogoutPopUpContainer>
                  <LogOutText>Are you sure, you want to logout?</LogOutText>
                  <CancelButton>Cancel</CancelButton>
                  <ConfirmButton>Confirm</ConfirmButton>
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
