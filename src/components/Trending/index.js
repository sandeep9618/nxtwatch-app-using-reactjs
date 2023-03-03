import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import NavBar from '../NavBar'
import TrendingVideoItem from '../TrendingVideoItem'

import {
  TrendingBgContainer,
  TrendingContainer,
  LoaderContainer,
  TrendingVideos,
  TrendingCard,
  TrendingVideosBgcontainer,
  IconContainer,
  TrendingHeading,
  FailureContainer,
} from './styledComponents'

import FailureDetails from '../FailureDetails'

import NxtWatchContext from '../NxtWatchContext'

class Trending extends Component {
  state = {fetchingStatus: 'loading', trendingVideos: []}

  componentDidMount() {
    this.getTrendingVideoItemDetails()
  }

  getTrendingVideoItemDetails = async () => {
    this.setState({fetchingStatus: 'loading'})
    const url = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {authorization: `bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const jsonData = await response.json()
      const {videos} = jsonData
      const upDateData = videos.map(i => ({
        id: i.id,
        channel: {
          name: i.channel.name,
          profileImageUrl: i.channel.profile_image_url,
        },
        title: i.title,
        publishedAt: i.published_at,
        thumbnailUrl: i.thumbnail_url,
        viewCount: i.view_count,
      }))
      this.setState({trendingVideos: upDateData, fetchingStatus: 'success'})
    } else {
      this.setState({fetchingStatus: 'failure'})
    }
  }

  renderFailureDetails = () => (
    <FailureContainer>
      <FailureDetails onReRender={this.getTrendingVideoItemDetails} />
    </FailureContainer>
  )

  renderLoading = isDarkThemeActivated => (
    <LoaderContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkThemeActivated ? '#ffffff' : 'blue'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  renderVideos = isDarkThemeActivated => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideosBgcontainer>
        <TrendingCard isDarkThemeActivated={isDarkThemeActivated}>
          <IconContainer isDarkThemeActivated={isDarkThemeActivated}>
            <HiFire size={25} color=" #ff0b37" />
          </IconContainer>
          <TrendingHeading isDarkThemeActivated={isDarkThemeActivated}>
            Trending
          </TrendingHeading>
        </TrendingCard>
        <TrendingVideos>
          {trendingVideos.map(eachVideo => (
            <TrendingVideoItem eachVideo={eachVideo} key={eachVideo.id} />
          ))}
        </TrendingVideos>
      </TrendingVideosBgcontainer>
    )
  }

  renderStateWise = isDarkThemeActivated => {
    const {fetchingStatus} = this.state
    if (fetchingStatus === 'loading') {
      return this.renderLoading(isDarkThemeActivated)
    }
    if (fetchingStatus === 'success') {
      return this.renderVideos(isDarkThemeActivated)
    }
    return this.renderFailureDetails()
  }

  render() {
    const activeRouteNavoptionId = 'TRENDING'
    return (
      <NxtWatchContext.Consumer data-testid="trending">
        {value => {
          const {onChangeActiveNavOption, isDarkThemeActivated} = value
          return (
            <TrendingBgContainer isDarkThemeActivated={isDarkThemeActivated}>
              <Header />
              <TrendingContainer>
                <NavBar
                  onChangeActiveNavOption={onChangeActiveNavOption}
                  activeRouteNavoptionId={activeRouteNavoptionId}
                />
                {this.renderStateWise(isDarkThemeActivated)}
              </TrendingContainer>
            </TrendingBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
