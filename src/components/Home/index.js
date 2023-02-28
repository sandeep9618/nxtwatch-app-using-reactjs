import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiOutlineClose} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import Cookies from 'js-cookie'
import Header from '../Header'
import HomeVideoItem from '../HomeVideoItem'

import {
  HomeBgContainer,
  BannerContainer,
  BannerText,
  GetItNowButton,
  HomeContainer,
  LoaderContainer,
  VideosAndBannerContainer,
  VideosContainer,
  BannerDetails,
  CloseButton,
  InputContainer,
  SearchInput,
  SearchButton,
} from './styledComponents'
import {NxtWatchLogo} from '../Header/styledComponents'
import NavBar from '../NavBar'
import NxtWatchContext from '../NxtWatchContext'

class Home extends Component {
  state = {videosArray: [], fetchingState: 'loading', isShowPrimeDetails: true}

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
      this.setState({videosArray: updateData, fetchingState: 'success'})
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

  renderVideos = () => {
    const {videosArray} = this.state
    return (
      <VideosContainer>
        {videosArray.map(eachItem => (
          <HomeVideoItem eachItem={eachItem} key={eachItem.id} />
        ))}
      </VideosContainer>
    )
  }

  renderVideosStateWise = isDarkThemeActivated => {
    const {fetchingState} = this.state
    if (fetchingState === 'loading') {
      return this.renderLoadingItem(isDarkThemeActivated)
    }
    if (fetchingState === 'success') {
      return this.renderVideos()
    }
    return null
  }

  onClickToClosePrimeDetails = () => {
    this.setState({isShowPrimeDetails: false})
  }

  render() {
    const {isShowPrimeDetails} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkThemeActivated} = value
          return (
            <HomeBgContainer data-testid="home">
              <Header />
              <HomeContainer>
                <NavBar />
                <VideosAndBannerContainer
                  isDarkThemeActivated={isDarkThemeActivated}
                >
                  <BannerContainer
                    data-testid="banner"
                    isShowPrimeDetails={isShowPrimeDetails}
                  >
                    <BannerDetails>
                      <NxtWatchLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <GetItNowButton>GET IT NOW</GetItNowButton>
                    </BannerDetails>
                    <CloseButton
                      type="button"
                      data-testid="close"
                      onClick={this.onClickToClosePrimeDetails}
                    >
                      <AiOutlineClose size={15} />
                    </CloseButton>
                  </BannerContainer>
                  <InputContainer>
                    <SearchInput
                      type="text"
                      placeholder="Search"
                      isDarkThemeActivated={isDarkThemeActivated}
                    />
                    <SearchButton
                      type="button"
                      isDarkThemeActivated={isDarkThemeActivated}
                    >
                      <BiSearch size={15} />
                    </SearchButton>
                  </InputContainer>
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
