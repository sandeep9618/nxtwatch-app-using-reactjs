import styled from 'styled-components'

export const VideoItemDetailsBgContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props =>
    props.isDarkThemeActivated === true ? '#0f0f0f' : '#f9f9f9'};
`

export const VideoItemDetailsContainer = styled.div`
  height: 90vh;
  display: flex;
  width: 100%;
`
export const VideoItemDetailsLoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const VideoPlayerContainer = styled.div`
  width: 65%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  height: 90vh;
  overflow-y: auto;
`
export const ReactVideoPlayerContainer = styled.div`
  height: 75vh;
  width: 100%;
`

export const TitleOfTheVideo = styled.p`
  font-size: 14px;
  font-weight: 600;
`
export const ViewsAndLikesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 2%;
  align-items: center;
`
export const Views = styled.p`
  font-size: 12px;
  font-weight: 600;
`
export const ViewsAndTimeContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Time = styled.p`
  font-size: 12px;
  font-weight: 600;
`
export const LikeAndSaveContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LikeContainer = styled.button`
  display: flex;
  align-items: center;
  margin-left: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const LikePara = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin-left: 7px;
`
export const SaveContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const ChannelLogoAndSubscribersContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
export const ChannelLogo = styled.img`
  height: 35px;
`
export const HrLine = styled.hr`
  width: 100%;
  color: grey;
  margin-left: 0px;
`
export const ChannelAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`
export const ChannelName = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0px;
`

export const SubScribersCount = styled.p`
  font-size: 11px;
  font-weight: 500;
  margin-top: 7px;
`
export const DescriptionOfTheVideo = styled.p`
  font-size: 12px;
  font-weight: 600;
`
