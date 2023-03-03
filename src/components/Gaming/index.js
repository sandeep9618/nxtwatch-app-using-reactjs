/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import NavBar from '../NavBar'
import FailureDetails from '../FailureDetails'

import {
  GamingBgContainer,
  GamingContainer,
  LoaderContainer,
  FailureContainer,
  GamingItems,
  Thumbnail,
  GamingListItem,
  Title,
  ViewCount,
  TrendingCard,
  IconContainer,
  TrendingHeading,
  GamingVideosBgContainer,
} from './styledComponents'

import NxtWatchContext from '../NxtWatchContext'

const GamingItem = props => {
  const {eachItem} = props
  const {thumbnailUrl, viewCount, title} = eachItem
  return (
    <GamingListItem>
      <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
      <Title>{title}</Title>
      <ViewCount>{viewCount} Watching Worldwide</ViewCount>
    </GamingListItem>
  )
}

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {fetchingStatus: apiStatusConstants.initial, gamingVideoItems: []}

  componentDidMount() {
    this.getGamingVideosDetails()
  }

  getGamingVideosDetails = async () => {
    this.setState({
      fetchingStatus: apiStatusConstants.inProgress,
    })
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {authorization: `bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const jsonData = await response.json()
      const {videos} = jsonData
      const data = videos.map(i => ({
        id: i.id,
        thumbnailUrl: i.thumbnail_url,
        title: i.title,
        viewCount: i.view_count,
      }))
      this.setState({
        fetchingStatus: apiStatusConstants.success,
        gamingVideoItems: data,
      })
    } else {
      this.setState({fetchingStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = isDarkThemeActivated => (
    <LoaderContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkThemeActivated ? '#ffffff' : 'blue'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  renderFailureDetails = () => (
    <FailureContainer>
      <FailureDetails onReRender={this.getGamingVideosDetails} />
    </FailureContainer>
  )

  renderSuccessDetails = isDarkThemeActivated => {
    const {gamingVideoItems} = this.state
    return (
      <GamingVideosBgContainer>
        <TrendingCard isDarkThemeActivated={isDarkThemeActivated}>
          <IconContainer isDarkThemeActivated={isDarkThemeActivated}>
            <SiYoutubegaming size={25} color=" #ff0b37" />
          </IconContainer>
          <TrendingHeading isDarkThemeActivated={isDarkThemeActivated}>
            Gaming
          </TrendingHeading>
        </TrendingCard>

        <GamingItems>
          {gamingVideoItems.map(eachItem => (
            <GamingItem key={eachItem.id} eachItem={eachItem} />
          ))}
        </GamingItems>
      </GamingVideosBgContainer>
    )
  }

  renderDetailsAccToStateWise = isDarkThemeActivated => {
    const {fetchingStatus} = this.state
    switch (fetchingStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader(isDarkThemeActivated)
      case apiStatusConstants.failure:
        return this.renderFailureDetails()
      case apiStatusConstants.success:
        return this.renderSuccessDetails(isDarkThemeActivated)
      default:
        return null
    }
  }

  render() {
    const activeRouteNavoptionId = 'GAMING'
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {onChangeActiveNavOption, isDarkThemeActivated} = value
          return (
            <GamingBgContainer isDarkThemeActivated={isDarkThemeActivated}>
              <Header />
              <GamingContainer>
                <NavBar
                  activeRouteNavoptionId={activeRouteNavoptionId}
                  onChangeActiveNavOption={onChangeActiveNavOption}
                />
                {this.renderDetailsAccToStateWise(isDarkThemeActivated)}
              </GamingContainer>
            </GamingBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Gaming
