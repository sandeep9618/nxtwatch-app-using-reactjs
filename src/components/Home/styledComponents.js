import styled from 'styled-components'

export const VideosAndBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 1000px;
  height: 200px;
  padding: 3%;
`
export const HomeBgContainer = styled.div`
  height: 100vh;
`
export const BannerText = styled.p`
  font-size: 17x;
  font-weight: 600;
`
export const GetItNowButton = styled.button`
  background-color: transparent;
  border: 2px solid blue;
  color: blue;
  padding: 8px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
`
export const HomeContainer = styled.div`
  display: flex;
  min-height: 80vh;
  width: 100%;
`
export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
