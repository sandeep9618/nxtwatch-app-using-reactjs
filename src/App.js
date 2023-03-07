import {Component} from 'react'
import {Switch, withRouter, Redirect, Route} from 'react-router-dom'

import './App.css'

import Login from './components/Login'
import Home from './components/Home'
import NxtWatchContext from './components/NxtWatchContext'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import SavedVideos from './components/SavedVideos'
import ProtectRoute from './components/ProtectRoute'

class App extends Component {
  state = {
    isDarkThemeActivated: false,
    savedVideos: [],
    activeNavOption: 'HOME',
  }

  onChangeActiveNavOption = id => {
    this.setState({activeNavOption: id})
  }

  onClickToSaveTheVideo = obj => {
    const {isSaved, videoDetailsObj} = obj
    const {id} = videoDetailsObj
    const {savedVideos} = this.state
    const isAlreadySaved = savedVideos.some(i => i.id === id)
    if (isSaved === true) {
      if (isAlreadySaved === false) {
        this.setState(prevState => ({
          savedVideos: [...prevState.savedVideos, videoDetailsObj],
        }))
      }
    }
    if (isSaved === false) {
      if (savedVideos.length >= 1) {
        const newData = savedVideos.filter(i => i.id !== id)
        this.setState({savedVideos: newData})
      } else {
        this.setState({savedVideos})
      }
    }
  }

  onClickToChangeTheme = () => {
    const {isDarkThemeActivated} = this.state
    this.setState({isDarkThemeActivated: !isDarkThemeActivated})
  }

  render() {
    const {isDarkThemeActivated, activeNavOption, savedVideos} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDarkThemeActivated,
          onClickToChangeTheme: this.onClickToChangeTheme,
          onClickToSaveTheVideo: this.onClickToSaveTheVideo,
          activeNavOption,
          onChangeActiveNavOption: this.onChangeActiveNavOption,
          savedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectRoute exact path="/" component={Home} />
          <ProtectRoute exact path="/videos/:id" component={VideoItemDetails} />
          <ProtectRoute exact path="/trending" component={Trending} />
          <ProtectRoute exact path="/gaming" component={Gaming} />
          <ProtectRoute exact path="/not-found" component={NotFound} />
          <ProtectRoute exact path="/saved-videos" component={SavedVideos} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default withRouter(App)
