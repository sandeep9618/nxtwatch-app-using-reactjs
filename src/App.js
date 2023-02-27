import {Switch, Route} from 'react-router-dom'

import './App.css'

import Login from './components/Login'
import Header from './components/Header'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Header} />
    </Switch>
  </>
)

export default App
