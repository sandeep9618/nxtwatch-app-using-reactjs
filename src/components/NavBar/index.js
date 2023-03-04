import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import NxtWatchContext from '../NxtWatchContext'
import {
  NavBarBgContainer,
  NavOptions,
  NavOption,
  NavOptionText,
  NavButton,
  ContactUsContainer,
  ContactUsHeading,
  ContactUsDescription,
  SocialMediaIconsContainer,
  SocialMediaIcon,
  IconContainer,
} from './styledComponents'

import './index.css'

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
          <IconContainer
            isActiveOption={isActiveOption}
            isDarkThemeActivated={isDarkThemeActivated}
          >
            {icon}
          </IconContainer>
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

class NavBar extends Component {
  componentDidMount() {
    this.setActiveNavOptionAccordingToRoute()
  }

  // when you refresh the browser or search particular path the active nav option automatically active according to the browser path
  // according to the active path in the browser, to convert the active nav option item =>>>>>>>>>>>>>>>>>>>>>>

  setActiveNavOptionAccordingToRoute = () => {
    const {activeRouteNavoptionId, onChangeActiveNavOption} = this.props
    this.onChangeActiveRoute({
      id: activeRouteNavoptionId,
      onChangeActiveNavOption,
    })
  }

  onChangeActiveRoute = idAndOnChangeNavOptionFunction => {
    const {id, onChangeActiveNavOption} = idAndOnChangeNavOptionFunction
    onChangeActiveNavOption(id)
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            isDarkThemeActivated,
            activeNavOption,
            onChangeActiveNavOption,
          } = value
          return (
            <NavBarBgContainer isDarkThemeActivated={isDarkThemeActivated}>
              <NavOptions>
                {navOptions.map(eachOption => (
                  <NavItem
                    eachOption={eachOption}
                    key={eachOption.id}
                    isDarkThemeActivated={isDarkThemeActivated}
                    onChangeActiveRoute={this.onChangeActiveRoute}
                    activeNavOption={activeNavOption}
                    onChangeActiveNavOption={onChangeActiveNavOption}
                  />
                ))}
              </NavOptions>
              <ContactUsContainer>
                <ContactUsHeading isDarkThemeActivated={isDarkThemeActivated}>
                  CONTACT US
                </ContactUsHeading>
                <SocialMediaIconsContainer>
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaIconsContainer>
                <ContactUsDescription
                  isDarkThemeActivated={isDarkThemeActivated}
                >
                  Enjoy! Now to see your channels and recommendations!
                </ContactUsDescription>
              </ContactUsContainer>
            </NavBarBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default withRouter(NavBar)
