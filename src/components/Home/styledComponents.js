import styled from 'styled-components'

export const VideosAndBannerContainer = styled.div`
  @media screen and (max-width: 576px) {
    width: 99.9%;
    height: 90vh;
    padding: 0px;
  }
  margin: 0px;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90vh;
  overflow-y: auto;
  background-color: ${props =>
    props.isDarkThemeActivated === true ? '#000000' : ' #f1f5f9'};
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 1000px;
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
    props.isDarkThemeActivated === true ? '#000000' : ' #f1f5f9'};
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
    props.isDarkThemeActivated === true ? '#000000' : ' #f1f5f9'};
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
  margin-left: 0px;
  overflow-y: auto;
  height: 100%;
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
  margin-top: 20px;
  margin-bottom: 0px;
  width: 400px;
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
