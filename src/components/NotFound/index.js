import Header from '../Header'
import NavBar from '../NavBar'

import {
  NotFoundBgContainer,
  NotFoundContainer,
  NotFoundImg,
  NotFoundContent,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'
import NxtWatchContext from '../NxtWatchContext'

const PageNotFound = () => {
  const activeRouteNavoptionId = 'NONE'
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkThemeActivated, onChangeActiveNavOption} = value
        const imgUrl =
          isDarkThemeActivated === true
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        return (
          <NotFoundBgContainer isDarkThemeActivated={isDarkThemeActivated}>
            <Header />
            <NotFoundContainer>
              <NavBar
                activeRouteNavoptionId={activeRouteNavoptionId}
                onChangeActiveNavOption={onChangeActiveNavOption}
              />
              <NotFoundContent>
                <NotFoundImg src={imgUrl} alt="not found" />
                <NotFoundHeading isDarkThemeActivated={isDarkThemeActivated}>
                  Page Not Found
                </NotFoundHeading>
                <NotFoundDescription>
                  we are sorry, the page you requested could not be found.
                </NotFoundDescription>
              </NotFoundContent>
            </NotFoundContainer>
          </NotFoundBgContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default PageNotFound
