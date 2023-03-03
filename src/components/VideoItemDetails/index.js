import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import NavBar from '../NavBar'
import FailureDetails from '../FailureDetails'

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
  DescriptionOfTheVideoTwo,
  DisLikeContainer,
  DisLikePara,
  SavedPara,
  FailureDetailsContainer,
} from './styledComponents'

import './index.css'

import NxtWatchContext from '../NxtWatchContext'

class VideoItemDetails extends Component {
  state = {
    fetchingStatus: 'loading',
    videoDetails: {},
    likedStatus: '',
    isSaved: false,
  }

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

  renderFailureDetails = () => (
    <FailureDetailsContainer>
      <FailureDetails onReRender={this.getVideoItemDetails} />
    </FailureDetailsContainer>
  )

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

  onClickToSaveTheVideoItem = onClickToSaveTheVideo => {
    const {isSaved, videoDetails} = this.state
    onClickToSaveTheVideo({videoDetailsObj: videoDetails, isSaved})
  }

  renderVideoItemDetails = obj => {
    const {videoDetails, likedStatus, isSaved} = this.state
    const {isDarkThemeActivated, onClickToSaveTheVideo} = obj
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

    const onClickToSaveTheVideoItem = async () => {
      await this.setState(prevState => ({
        isSaved: !prevState.isSaved,
      }))
      this.onClickToSaveTheVideoItem(onClickToSaveTheVideo)
    }

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
            <Views isDarkThemeActivated={isDarkThemeActivated}>
              {viewCount} views
            </Views>
            <BsDot
              color={isDarkThemeActivated === true ? '#94a3b8' : '#000000'}
              size={20}
            />
            <Time isDarkThemeActivated={isDarkThemeActivated}>{time}</Time>
          </ViewsAndTimeContainer>

          <LikeAndSaveContainer>
            <LikeContainer
              type="button"
              onClick={this.onClickToLike}
              likedStatus={likedStatus}
            >
              <BiLike size={20} />
              <LikePara likedStatus={likedStatus}>Like</LikePara>
            </LikeContainer>

            <DisLikeContainer
              type="button"
              onClick={this.onClickToDisLike}
              likedStatus={likedStatus}
            >
              <BiDislike size={20} />
              <DisLikePara likedStatus={likedStatus}>Dislike</DisLikePara>
            </DisLikeContainer>
            <SaveContainer
              type="button"
              onClick={onClickToSaveTheVideoItem}
              isSaved={isSaved}
            >
              <BiListPlus size={20} />
              <SavedPara
                isDarkThemeActivated={isDarkThemeActivated}
                isSaved={isSaved}
              >
                {isSaved ? 'Saved' : 'Save'}
              </SavedPara>
            </SaveContainer>
          </LikeAndSaveContainer>
        </ViewsAndLikesContainer>
        <HrLine />

        <ChannelLogoAndSubscribersContainer>
          <ChannelLogo src={profileImageUrl} alt="channel logo" />
          <ChannelAndDescriptionContainer>
            <ChannelName isDarkThemeActivated={isDarkThemeActivated}>
              {name}
            </ChannelName>
            <SubScribersCount isDarkThemeActivated={isDarkThemeActivated}>
              {subscriberCount} subscribers
            </SubScribersCount>
            <DescriptionOfTheVideo isDarkThemeActivated={isDarkThemeActivated}>
              {description}
            </DescriptionOfTheVideo>
          </ChannelAndDescriptionContainer>
        </ChannelLogoAndSubscribersContainer>
        <DescriptionOfTheVideoTwo isDarkThemeActivated={isDarkThemeActivated}>
          {description}
        </DescriptionOfTheVideoTwo>
      </VideoPlayerContainer>
    )
  }

  renderStateWiseDetails = obj => {
    const {isDarkThemeActivated, onClickToSaveTheVideo} = obj
    const {fetchingStatus} = this.state
    if (fetchingStatus === 'loading') {
      return this.renderLoadingDetails(isDarkThemeActivated)
    }
    if (fetchingStatus === 'success') {
      return this.renderVideoItemDetails({
        isDarkThemeActivated,
        onClickToSaveTheVideo,
      })
    }
    return this.renderFailureDetails(isDarkThemeActivated)
  }

  onClickToLike = () => {
    this.setState({likedStatus: 'liked'})
  }

  onClickToDisLike = () => {
    this.setState({likedStatus: 'disliked'})
  }

  render() {
    const activeRouteNavoptionId = 'HOME'
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            isDarkThemeActivated,
            onClickToSaveTheVideo,
            onChangeActiveNavOption,
          } = value
          return (
            <VideoItemDetailsBgContainer
              isDarkThemeActivated={isDarkThemeActivated}
              data-testid="videoItemDetails"
            >
              <Header />
              <VideoItemDetailsContainer>
                <NavBar
                  activeRouteNavoptionId={activeRouteNavoptionId}
                  onChangeActiveNavOption={onChangeActiveNavOption}
                />
                {this.renderStateWiseDetails({
                  isDarkThemeActivated,
                  onClickToSaveTheVideo,
                })}
              </VideoItemDetailsContainer>
            </VideoItemDetailsBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
