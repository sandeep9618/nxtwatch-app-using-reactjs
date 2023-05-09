import styled from 'styled-components'

export const VideosAndBannerContainer = styled.div`
  @media screen and (max-width: 576px) {
    width: 99.9%;
    height: 81vh;
    padding: 0px;
  }
  margin: 0px;
  display: flex;
  flex-direction: column;
  width: 82%;
  height: 90vh;
  overflow-y: auto;
  background-color: ${props =>
    props.isDarkThemeActivated === true ? '#181818' : '#f9f9f9'};
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 220px;
  padding: 3%;
  display: ${props => (props.isShowPrimeDetails === true ? 'flex' : 'none')};
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    width: 99.7%;
    height: 200px;
    margin-right: 0px;
  }
`
export const HomeBgContainer = styled.div`
  width: 100%;
  margin: 0px;
  background-color: ${props =>
    props.isDarkThemeActivated === true ? '#181818' : ' #f9f9f9'};
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
  width: 100px;
`
export const HomeContainer = styled.div`
  display: flex;
  min-height: 60vh;
  width: 100%;
  margin: 0px;
  flex-direction: row;
  background-color: ${props =>
    props.isDarkThemeActivated === true ? '#000000' : ' #f9f9f9'};
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`
export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const VideosContainer = styled.ul`
  @media screen and (max-width: 576px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    padding: 0%;
  }
  padding: 2%;
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 0px;
  overflow-y: auto;
  height: 100%;
  ::-webkit-scrollbar {
    width: 0;
  }
`
export const BannerDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  padding-bottom: 20px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`
export const InputContainer = styled.div`
  @media (max-width: 576px) {
    margin-right: 0px;
    padding-right: 0px;
    width: 80%;
    display: none;
  }
  display: flex;
  margin: 12px;
  margin-top: 20px;
  margin-bottom: 0px;
  width: 400px;
  margin-bottom: 12px;
`

export const InputContainerTwo = styled.div`
  @media (max-width: 576px) {
    margin-right: 0px;
    padding-right: 0px;
    width: 80%;
    display: flex;
  }
  display: none;
  margin: 12px;
  margin-top: 15px;
  margin-bottom: 0px;
  width: 400px;
  padding-bottom: 15px;
`

export const SearchInput = styled.input`
  padding: 8px;
  outline: none;
  border: 2px solid
    ${props => (props.isDarkThemeActivated === true ? '#383838' : '#d7dfe9')};
  width: 100%;
  padding-left: 12px;
  background-color: ${props =>
    props.isDarkThemeActivated === true ? '#000000' : '#ffffff'};
  color: ${props =>
    props.isDarkThemeActivated === true ? '#ffffff' : '#000000'};
  @media screen and (max-width: 576px) {
    width: 80%;
  }
`
export const SearchButton = styled.button`
  border: 2px solid #d7dfe9;
  width: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props =>
    props.isDarkThemeActivated === true ? '#606060' : '#ebebeb'};
  border: 2px solid
    ${props => (props.isDarkThemeActivated === true ? '#383838' : '#d7dfe9')};
  border-left: 0px;
  @media screen and (max-width: 576px) {
    width: 40;
    margin-right: 0px;
  }
`
export const FailureDetailsContainer = styled.div`
  display: flex;
  height: 70vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FailureImg = styled.img`
  height: 40vh;
  @media screen and (max-width: 576px) {
    height: 20vh;
  }
`

export const FailureHeading = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#e2e8f0' : '#1e293b'};
`
export const FailureDescription = styled.p`
  font-size: 15px;
  text-align: center;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#e2e8f0' : '#1e293b'};
`
export const RetryButton = styled.button`
  color: white;
  background-color: blue;
  border: 0px;
  padding: 8px;
  width: 100px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 20px;
`
export const NoSearchResultsHeading = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#e2e8f0' : '#1e293b'};
`
export const NoSearchResultsDescription = styled.p`
  font-size: 15px;
  text-align: center;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#e2e8f0' : '#1e293b'};
`
