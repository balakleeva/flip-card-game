import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { MainPage } from './pages/MainPage'
import { GamePage } from './pages/GamePage'
import { FinishPage } from './pages/FinishPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/main" component={MainPage} exact />
        <Route path="/game" component={GamePage} exact />
        <Route path="/finish" component={FinishPage} exact />

        <Redirect from="/" to="/main" />
      </Switch>
    </Router>
  )
}

export default App
