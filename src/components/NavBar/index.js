import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {
  NavBarBgContainer,
  NavOptions,
  NavOption,
  NavOptionText,
  NavButton,
  ContactUsContainer,
  ContactUsHeading,
} from './styledComponents'

import './index.css'

const navOptions = [
  {displayText: 'Home', icon: <AiFillHome size={20} />, id: 'HOME'},
  {displayText: 'Trending', icon: <HiFire size={20} />, id: 'TRENDING'},
  {displayText: 'Gaming', icon: <SiYoutubegaming size={20} />, id: 'GAMING'},
  {
    displayText: 'Saved Videos',
    icon: <BiListPlus size={20} />,
    id: 'SAVED VIDEOS',
  },
]

const NavItem = props => {
  const {eachOption, onChangeActiveRoute, activeNavOption} = props
  const {id, displayText, icon} = eachOption
  const onChangeActiveItem = () => {
    onChangeActiveRoute(id)
  }

  const activeItemClassName =
    activeNavOption === id ? 'active-button' : 'inactive-button'

  return (
    <NavOption>
      <NavButton
        className={activeItemClassName}
        type="button"
        onClick={onChangeActiveItem}
      >
        {icon}
        <NavOptionText>{displayText}</NavOptionText>
      </NavButton>
    </NavOption>
  )
}

class NavBar extends Component {
  state = {activeNavOption: navOptions[0].id}

  onChangeActiveRoute = id => {
    this.setState({activeNavOption: id})
  }

  render() {
    const {activeNavOption} = this.state
    return (
      <NavBarBgContainer>
        <NavOptions>
          {navOptions.map(eachOption => (
            <NavItem
              eachOption={eachOption}
              key={eachOption.id}
              onChangeActiveRoute={this.onChangeActiveRoute}
              activeNavOption={activeNavOption}
            />
          ))}
        </NavOptions>
        <ContactUsContainer>
          <ContactUsHeading>CONTACT US</ContactUsHeading>
        </ContactUsContainer>
      </NavBarBgContainer>
    )
  }
}
export default NavBar
