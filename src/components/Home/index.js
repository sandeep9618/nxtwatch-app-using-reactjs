import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiOutlineClose} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import Cookies from 'js-cookie'
import Header from '../Header'
import HomeVideoItem from '../HomeVideoItem'
import FailureDetails from '../FailureDetails'

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
  InputContainerTwo,
  FailureDetailsContainer,
  FailureImg,
  NoSearchResultsHeading,
  NoSearchResultsDescription,
  RetryButton,
} from './styledComponents'
import {NxtWatchLogo} from '../Header/styledComponents'
import NavBar from '../NavBar'
import NxtWatchContext from '../NxtWatchContext'

class Home extends Component {
  state = {
    videosArray: [],
    fetchingState: 'loading',
    isShowPrimeDetails: true,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosDetails()
  }

  getVideosDetails = async () => {
    this.setState({fetchingState: 'loading'})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
    } else {
      this.setState({fetchingState: 'failure'})
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

  renderNoSearchResultsFound = isDarkThemeActivated => (
    <FailureDetailsContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoSearchResultsHeading isDarkThemeActivated={isDarkThemeActivated}>
        NO Search results found
      </NoSearchResultsHeading>
      <NoSearchResultsDescription isDarkThemeActivated={isDarkThemeActivated}>
        Try different key words or remove search filter
      </NoSearchResultsDescription>
      <RetryButton type="button" onClick={this.getVideosDetails}>
        Retry
      </RetryButton>
    </FailureDetailsContainer>
  )

  renderVideos = isDarkThemeActivated => {
    const {videosArray} = this.state
    if (videosArray.length === 0) {
      return this.renderNoSearchResultsFound(isDarkThemeActivated)
    }
    return (
      <VideosContainer>
        {videosArray.map(eachItem => (
          <HomeVideoItem eachItem={eachItem} key={eachItem.id} />
        ))}
      </VideosContainer>
    )
  }

  renderFailureDetails = () => (
    <FailureDetails onReRender={this.getVideosDetails} />
  )

  renderVideosStateWise = isDarkThemeActivated => {
    const {fetchingState} = this.state
    if (fetchingState === 'loading') {
      return this.renderLoadingItem(isDarkThemeActivated)
    }
    if (fetchingState === 'success') {
      return this.renderVideos(isDarkThemeActivated)
    }
    return this.renderFailureDetails(isDarkThemeActivated)
  }

  onClickToClosePrimeDetails = () => {
    this.setState({isShowPrimeDetails: false})
  }

  onChangeSearchResults = async event => {
    await this.setState({searchInput: event.target.value})
    if (event.target.key === 'Enter') {
      this.setState({fetchingState: 'loading'})
      this.getVideosDetails()
    }
  }

  onClickToGetSearchResults = () => {
    this.setState({fetchingState: 'loading'})
    this.getVideosDetails()
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
              <HomeContainer isDarkThemeActivated={isDarkThemeActivated}>
                <NavBar />

                <InputContainerTwo>
                  <SearchInput
                    type="text"
                    placeholder="Search"
                    onChange={this.onChangeSearchResults}
                    isDarkThemeActivated={isDarkThemeActivated}
                  />
                  <SearchButton
                    type="button"
                    isDarkThemeActivated={isDarkThemeActivated}
                    onClick={this.onClickToGetSearchResults}
                  >
                    <BiSearch size={15} />
                  </SearchButton>
                </InputContainerTwo>
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
                      onChange={this.onChangeSearchResults}
                      isDarkThemeActivated={isDarkThemeActivated}
                    />
                    <SearchButton
                      type="button"
                      isDarkThemeActivated={isDarkThemeActivated}
                      onClick={this.onClickToGetSearchResults}
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
