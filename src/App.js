import {Component} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'

import './App.css'

import Login from './components/Login'
import Home from './components/Home'
import NxtWatchContext from './components/NxtWatchContext'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'

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
    if (isSaved === true) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, videoDetailsObj],
      }))
    } else {
      const {id} = videoDetailsObj
      const {savedVideos} = this.state
      const newData = savedVideos.filter(i => i.id !== id)
      this.setState({savedVideos: newData})
    }
  }

  onClickToChangeTheme = () => {
    const {isDarkThemeActivated} = this.state
    this.setState({isDarkThemeActivated: !isDarkThemeActivated})
  }

  render() {
    const {isDarkThemeActivated, activeNavOption} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDarkThemeActivated,
          onClickToChangeTheme: this.onClickToChangeTheme,
          onClickToSaveTheVideo: this.onClickToSaveTheVideo,
          activeNavOption,
          onChangeActiveNavOption: this.onChangeActiveNavOption,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/videos/:id" component={VideoItemDetails} />
          <Route exact path="/trending" component={Trending} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default withRouter(App)
