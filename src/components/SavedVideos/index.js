import {Component} from 'react'

import Header from '../Header'
import NavBar from '../NavBar'
import NxtWatchContext from '../NxtWatchContext'
import TrendingVideoItem from '../TrendingVideoItem'

import {
  SavedVideosBgContainer,
  SavedVideosContainer,
  NoVideosImg,
  NovideosContainer,
  NoSavedHeading,
  NoSavedDescription,
  SavedVideoItemsContainer,
} from './styledComponents'

class SavedVideos extends Component {
  renderNoVideos = isDarkThemeActivated => (
    <NovideosContainer>
      <NoVideosImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoSavedHeading isDarkThemeActivated={isDarkThemeActivated}>
        No saved videos found
      </NoSavedHeading>
      <NoSavedDescription>
        You can save your videos while watching them
      </NoSavedDescription>
    </NovideosContainer>
  )

  renderSavedVideosDetails = obj => {
    const {savedVideos} = obj
    return (
      <SavedVideoItemsContainer>
        {savedVideos.map(eachVideo => (
          <TrendingVideoItem eachVideo={eachVideo} key={eachVideo.id} />
        ))}
      </SavedVideoItemsContainer>
    )
  }

  renderSavedVideos = obj => {
    const {savedVideos, isDarkThemeActivated} = obj
    if (savedVideos.length === 0) {
      return this.renderNoVideos(isDarkThemeActivated)
    }
    return this.renderSavedVideosDetails(obj)
  }

  render() {
    const activeRouteNavoptionId = 'SAVED VIDEOS'
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            savedVideos,
            onChangeActiveNavOption,
            isDarkThemeActivated,
          } = value
          return (
            <SavedVideosBgContainer
              data-testid="savedVideos"
              isDarkThemeActivated={isDarkThemeActivated}
            >
              <Header />
              <SavedVideosContainer>
                <NavBar
                  activeRouteNavoptionId={activeRouteNavoptionId}
                  onChangeActiveNavOption={onChangeActiveNavOption}
                />
                {this.renderSavedVideos({savedVideos, isDarkThemeActivated})}
              </SavedVideosContainer>
            </SavedVideosBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
