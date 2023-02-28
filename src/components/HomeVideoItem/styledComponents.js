import styled from 'styled-components'

export const HomeVideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 12px;
  width: 230px;
  cursor: pointer;
`
export const ThumbnailImg = styled.img`
  height: 125px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 0px;
`
export const SubscribeLogoAndDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`
export const ChannelLogo = styled.img`
  height: 30px;
  margin-top: 0px;
`
export const TitleOfTheVideo = styled.p`
  font-size: 12px;
  margin-top: 0px;
  font-weight: 600;
  margin-left: 10px;
  margin-bottom: 6px;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#f8fafc' : '#000000'};
`
export const ChannelName = styled.p`
  font-size: 14px;
  margin-top: 0px;
  font-weight: 600;
  margin-left: 10px;
  margin-bottom: 0px;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#94a3b8' : '#000000'};
`
export const DescriptionViewsAndTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ViewsAndTimeContainer = styled.div`
  display: flex;
  margin-top: 0px;
`
export const Views = styled.p`
  color: #424242;
  font-size: 11px;
  font-weight: 500;
  margin-top: 5px;
  margin-left: 10px;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#94a3b8' : '#000000'};
`

export const TimeDistance = styled.li`
  color: #424242;
  font-size: 11px;
  font-weight: 500;
  margin-top: 5px;
  list-style-type: disc;
  margin-left: 19px;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#94a3b8' : '#000000'};
`
