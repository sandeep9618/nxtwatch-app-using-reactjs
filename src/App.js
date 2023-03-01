import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import './App.css'

import Login from './components/Login'
import Home from './components/Home'
import NxtWatchContext from './components/NxtWatchContext'
import VideoItemDetails from './components/VideoItemDetails'

class App extends Component {
  state = {isDarkThemeActivated: false}

  onClickToChangeTheme = () => {
    const {isDarkThemeActivated} = this.state
    this.setState({isDarkThemeActivated: !isDarkThemeActivated})
  }

  render() {
    const {isDarkThemeActivated} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkThemeActivated,
          onClickToChangeTheme: this.onClickToChangeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/videos/:id" component={VideoItemDetails} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
