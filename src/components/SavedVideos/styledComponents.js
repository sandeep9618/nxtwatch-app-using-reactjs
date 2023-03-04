import styled from 'styled-components'

export const SavedVideosBgContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props =>
    props.isDarkThemeActivated === true ? ' #0f0f0f' : '#f9f9f9 '};
`
export const SavedVideosContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
`
export const NoVideosImg = styled.img`
  height: 50vh;
  @media screen and (max-width: 576px) {
    height: 30vh;
  }
`
export const NovideosContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NoSavedHeading = styled.h1`
  font-size: 25px;
  margin-top: 30px;
  color: ${props =>
    props.isDarkThemeActivated === true ? '#f9f9f9 ' : ' #0f0f0f'};
`

export const NoSavedDescription = styled.p`
  font-size: 16px;
  color: #64748b;
  font-weight: 600;
  margin-top: 0px;
`
export const SavedVideoItemsContainer = styled.ul`
  padding-left: 0px;
  width: 99%;
  height: 85vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
