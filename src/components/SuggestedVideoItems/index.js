import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import {
  BgContainer,
  VideItemsContiner,
  VideoItem,
  Thumbnail,
  Details,
  Title,
  ChannelName,
  Views,
  Time,
} from './styledComponents'
import './index.css'

class SuggestedVideoItems extends Component {
  state = {videoItems: [], fetchingStatus: 'loading'}

  componentDidMount() {
    this.getVideoItems()
  }

  getVideoItems = async () => {
    const url = 'https://apis.ccbp.in/videos/all?search='
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {Authorization: `bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const items = await response.json()
      const {id} = this.props

      const {videos} = items
      let filteredItems = videos.filter(i => i.id !== id)
      filteredItems = filteredItems.slice(0, 20)
      filteredItems = filteredItems.map(i => ({
        id: i.id,
        title: i.title,
        thumbnailUrl: i.thumbnail_url,
        viewCount: i.view_count,
        publishedAt: i.published_at,
        channelName: i.channel.name,
      }))
      this.setState({videoItems: filteredItems, fetchingStatus: 'success'})
    }
  }

  loaderView = () => (
    <div>
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </div>
  )

  settingStateToTheInitial = () => {
    this.setState(
      {fetchingStatus: 'loading', videoItems: []},
      this.getVideoItems,
    )
  }

  suggestedVideoTriggered = async () => {
    const {triggerFunction} = this.props
    triggerFunction()
  }

  getVideoItem = obj => {
    const {id, title, publishedAt, channelName, viewCount, thumbnailUrl} = obj
    const timeDistance = formatDistanceToNow(new Date(publishedAt))
    const {isDarkThemeActivated} = this.props
    return (
      <Link
        to={`/videos/${id}`}
        className="link-item"
        onClick={this.suggestedVideoTriggered}
      >
        <VideoItem>
          <Thumbnail src={thumbnailUrl} alt="thumbnail" />
          <Details>
            <Title isDarkThemeActivated={isDarkThemeActivated}>{title}</Title>
            <ChannelName isDarkThemeActivated={isDarkThemeActivated}>
              {channelName}
            </ChannelName>
            <div className="views-and-time-container">
              <Views>{viewCount}</Views>
              <BsDot size={13} color="#778c89" />
              <Time>{timeDistance}</Time>
            </div>
          </Details>
        </VideoItem>
      </Link>
    )
  }

  successView = () => {
    const {videoItems} = this.state
    return (
      <VideItemsContiner>
        {videoItems.map(i => this.getVideoItem(i))}
      </VideItemsContiner>
    )
  }

  renderUI = () => {
    const {fetchingStatus} = this.state
    if (fetchingStatus === 'loading') {
      return this.loaderView()
    }
    return this.successView()
  }

  render() {
    return <BgContainer>{this.renderUI()}</BgContainer>
  }
}

export default SuggestedVideoItems
