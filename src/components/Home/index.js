import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'

import {
  HomeBgContainer,
  BannerContainer,
  BannerText,
  GetItNowButton,
  HomeContainer,
  LoaderContainer,
  VideosAndBannerContainer,
} from './styledComponents'
import {NxtWatchLogo} from '../Header/styledComponents'
import NavBar from '../NavBar'
import NxtWatchContext from '../NxtWatchContext'

class Home extends Component {
  state = {videosArray: [], fetchingState: 'loading'}

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const url = 'https://apis.ccbp.in/videos/all?search='
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {Authorization: `bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const jsonData = await response.json()
      const data = jsonData.videos
      const updateData = data.map(i => ({
        id: i.id,
        channel: i.channel,
        publishedAt: i.published_at,
        thumbnailUrl: i.thumbnail_url,
        title: i.title,
        viewCount: i.view_count,
      }))
      this.setState({videosArray: updateData, fetchingState: 'loading'})
    }
  }

  renderLoadingItem = isDarkThemeActivated => (
    <LoaderContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkThemeActivated ? '#ffffff' : 'blue'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  renderVideosStateWise = isDarkThemeActivated => {
    const {fetchingState} = this.state
    if (fetchingState === 'loading') {
      return this.renderLoadingItem(isDarkThemeActivated)
    }
    return null
  }

  render() {
    const {videosArray} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkThemeActivated} = value
          return (
            <HomeBgContainer data-testid="home">
              <Header />
              <HomeContainer>
                <NavBar />
                <VideosAndBannerContainer>
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
                  {this.renderVideosStateWise(isDarkThemeActivated)}
                </VideosAndBannerContainer>
              </HomeContainer>
            </HomeBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
