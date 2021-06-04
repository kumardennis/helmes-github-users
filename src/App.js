import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from 'pages/LandingPage/LandingPage'
import UserPage from 'pages/UserPage/UserPage'
import { view } from '@risingstack/react-easy-state'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/:id">
              <UserPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default view(App)
