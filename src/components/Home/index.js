import {Component} from 'react'
import Header from '../Header'
import {
  HomeBgContainer,
  BannerContainer,
  BannerText,
  GetItNowButton,
  HomeContainer,
} from './styledComponents'
import {NxtWatchLogo} from '../Header/styledComponents'
import NavBar from '../NavBar'

class Home extends Component {
  render() {
    return (
      <HomeBgContainer data-testid="home">
        <Header />
        <HomeContainer>
          <NavBar />
          <BannerContainer>
            <NxtWatchLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <BannerText>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerText>
            <GetItNowButton>GET IT NOW</GetItNowButton>
          </BannerContainer>
        </HomeContainer>
      </HomeBgContainer>
    )
  }
}

export default Home
