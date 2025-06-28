import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="bgContainer">
    <div className="contentContainer">
      <div className="logoContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          className="image"
          alt="ipl logo"
        />
        <h1 className="heading">IPL Dashboard</h1>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team-matches/:id" component={TeamMatches} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
