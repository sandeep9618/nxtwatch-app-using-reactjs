import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  BgContainer,
  VideItemsContiner,
  VideoItem,
  Thumbnail,
  Details,
  Title,
  ChannelName,
} from './styledComponents'

class SuggestedVideoItems extends Component {
  state = {videoItems: {}, fetchingStatus: 'loading'}

  componentDidMount() {
    this.getVideoItems()
  }

  getVideoItems = async () => {
    const url = 'https://apis.ccbp.in/videos/all?search=&limit=10'
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

  getVideoItem = obj => {
    const {id, title, publishedAt, channelName, viewCount, thumbnailUrl} = obj
    return (
      <VideoItem>
        <Thumbnail src={thumbnailUrl} alt="thumbnail" />
        <Details>
          <Title>{title}</Title>
          <ChannelName>{channelName}</ChannelName>
        </Details>
      </VideoItem>
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
