import styled from 'styled-components'

export const TrendingBgContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props =>
    props.isDarkThemeActivated === true ? ' #0f0f0f' : '#f9f9f9 '};
`

export const TrendingContainer = styled.div`
  height: 90vh;
  width: 80%;
  display: flex;
`

export const LoaderContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`
