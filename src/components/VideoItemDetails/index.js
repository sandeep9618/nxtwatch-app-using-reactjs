import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import NavBar from '../NavBar'

import {
  VideoItemDetailsBgContainer,
  VideoItemDetailsContainer,
  VideoItemDetailsLoaderContainer,
  VideoPlayerContainer,
  TitleOfTheVideo,
  ViewsAndLikesContainer,
  Views,
  ViewsAndTimeContainer,
  Time,
  LikeAndSaveContainer,
  LikeContainer,
  LikePara,
  SaveContainer,
  ChannelLogoAndSubscribersContainer,
  ChannelLogo,
  HrLine,
  ChannelAndDescriptionContainer,
  ChannelName,
  SubScribersCount,
  DescriptionOfTheVideo,
  ReactVideoPlayerContainer,
} from './styledComponents'

import './index.css'

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

  renderVideoItemDetails = isDarkThemeActivated => {
    const {videoDetails} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      description,
      channel,
    } = videoDetails
    const {profileImageUrl, name, subscriberCount} = channel
    const time = formatDistanceToNow(new Date(publishedAt))

    return (
      <VideoPlayerContainer isDarkThemeActivated={isDarkThemeActivated}>
        <ReactVideoPlayerContainer>
          <ReactPlayer url={videoUrl} controls className="react-player" />
        </ReactVideoPlayerContainer>
        <TitleOfTheVideo isDarkThemeActivated={isDarkThemeActivated}>
          {title}
        </TitleOfTheVideo>
        <ViewsAndLikesContainer>
          <ViewsAndTimeContainer>
            <Views>{viewCount} views</Views>
            <BsDot size={20} />
            <Time>{time}</Time>
          </ViewsAndTimeContainer>

          <LikeAndSaveContainer>
            <LikeContainer>
              <BiLike size={20} />
              <LikePara>Like</LikePara>
            </LikeContainer>

            <LikeContainer>
              <BiDislike size={20} />
              <LikePara>Dislike</LikePara>
            </LikeContainer>
            <SaveContainer>
              <BiListPlus size={20} />
              <LikePara>Save</LikePara>
            </SaveContainer>
          </LikeAndSaveContainer>
        </ViewsAndLikesContainer>
        <HrLine />

        <ChannelLogoAndSubscribersContainer>
          <ChannelLogo src={profileImageUrl} alt="channel logo" />
          <ChannelAndDescriptionContainer>
            <ChannelName>{name}</ChannelName>
            <SubScribersCount>{subscriberCount} subscribers</SubScribersCount>
            <DescriptionOfTheVideo>{description}</DescriptionOfTheVideo>
          </ChannelAndDescriptionContainer>
        </ChannelLogoAndSubscribersContainer>
      </VideoPlayerContainer>
    )
  }

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
            <VideoItemDetailsBgContainer
              isDarkThemeActivated={isDarkThemeActivated}
              data-testid="videoItemDetails"
            >
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
