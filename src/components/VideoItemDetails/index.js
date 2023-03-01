import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import NavBar from '../NavBar'

import {
  VideoItemDetailsBgContainer,
  VideoItemDetailsContainer,
  VideoItemDetailsLoaderContainer,
} from './styledComponents'

import NxtWatchContext from '../NxtWatchContext'

class VideoItemDetails extends Component {
  state = {fetchingStatus: 'loading', videoDetails: {}}

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({fetchingStatus: 'loading'})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {Authorization: `bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const jsonData = await response.json()
      const videoDetails = jsonData.video_details
      const data = {
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        description: videoDetails.description,
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
      }
      this.setState({fetchingStatus: 'success', videoDetails: data})
    } else {
      this.setState({fetchingStatus: 'failure'})
    }
  }

  renderLoadingDetails = isDarkThemeActivated => (
    <VideoItemDetailsLoaderContainer>
      <Loader
        type="ThreeDots"
        color={isDarkThemeActivated ? '#ffffff' : 'blue'}
        height="50"
        width="50"
      />
    </VideoItemDetailsLoaderContainer>
  )

  renderVideoItemDetails = isDarkThemeActivated => <div>video details</div>

  renderStateWiseDetails = isDarkThemeActivated => {
    const {fetchingStatus} = this.state
    if (fetchingStatus === 'loading') {
      return this.renderLoadingDetails(isDarkThemeActivated)
    }
    return this.renderVideoItemDetails(isDarkThemeActivated)
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkThemeActivated} = value
          return (
            <VideoItemDetailsBgContainer>
              <Header />
              <VideoItemDetailsContainer>
                <NavBar />
                {this.renderStateWiseDetails(isDarkThemeActivated)}
              </VideoItemDetailsContainer>
            </VideoItemDetailsBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
