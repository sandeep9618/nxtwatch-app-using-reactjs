import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import NavBar from '../NavBar'

import {
  TrendingBgContainer,
  TrendingContainer,
  LoaderContainer,
} from './styledComponents'

import NxtWatchContext from '../NxtWatchContext'

class Trending extends Component {
  state = {fetchingStatus: 'loading', trendingVideos: []}

  componentDidMount() {
    this.getTrendingVideoItemDetails()
  }

  getTrendingVideoItemDetails = async () => {
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
    }
  }

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
    return <h1>Trending videos</h1>
  }

  renderStateWise = isDarkThemeActivated => {
    const {fetchingStatus} = this.state
    if (fetchingStatus === 'loading') {
      return this.renderLoading(isDarkThemeActivated)
    }
    return this.renderVideos(isDarkThemeActivated)
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
