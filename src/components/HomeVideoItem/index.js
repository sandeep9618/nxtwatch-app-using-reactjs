import {formatDistanceToNow} from 'date-fns'
import {
  HomeVideoItemContainer,
  ThumbnailImg,
  SubscribeLogoAndDescriptionContainer,
  ChannelLogo,
  TitleOfTheVideo,
  ChannelName,
  DescriptionViewsAndTimeContainer,
  ViewsAndTimeContainer,
  Views,
  Dot,
  TimeDistance,
} from './styledComponents'

import NxtWatchContext from '../NxtWatchContext'

const HomeVideoItem = props => {
  const {eachItem} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = eachItem
  const profileImageUrl = channel.profile_image_url
  const {name} = channel
  const time = formatDistanceToNow(new Date(publishedAt))
  console.log(time)
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkThemeActivated} = value
        return (
          <HomeVideoItemContainer>
            <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
            <SubscribeLogoAndDescriptionContainer>
              <ChannelLogo src={profileImageUrl} alt="channel logo" />
              <DescriptionViewsAndTimeContainer>
                <TitleOfTheVideo isDarkThemeActivated={isDarkThemeActivated}>
                  {title}
                </TitleOfTheVideo>
                <ChannelName isDarkThemeActivated={isDarkThemeActivated}>
                  {name}
                </ChannelName>
                <ViewsAndTimeContainer>
                  <Views isDarkThemeActivated={isDarkThemeActivated}>
                    {viewCount} Views
                  </Views>
                  <TimeDistance isDarkThemeActivated={isDarkThemeActivated}>
                    {time}
                  </TimeDistance>
                </ViewsAndTimeContainer>
              </DescriptionViewsAndTimeContainer>
            </SubscribeLogoAndDescriptionContainer>
          </HomeVideoItemContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default HomeVideoItem
