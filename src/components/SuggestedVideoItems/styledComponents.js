import styled from 'styled-components'

export const BgContainer = styled.div`
  width: 24%;
  height: 90vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`
export const VideItemsContiner = styled.ul`
  padding-left: 0px;
`
export const VideoItem = styled.li`
  list-style-type: none;
  margin-bottom: 15px;
  display: flex;
`
export const Thumbnail = styled.img`
  height: 90px;
  width: 180px;
  border-radius: 8px;
`
export const Details = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 0px;
  height: 100%;
`

export const Title = styled.p`
  font-size: 10px;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 5px;
`
export const ChannelName = styled.p`
  font-size: 10px;
  margin-top: 0px;
`
