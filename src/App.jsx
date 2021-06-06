import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from 'pages/LandingPage/LandingPage'
import UserPage from 'pages/UserPage/UserPage'
import { view } from '@risingstack/react-easy-state'
import { useCookies } from 'react-cookie'
import appStore from 'store'

import './App.scss'

function App() {
  const [cookies] = useCookies(['tokenGH'])

  useEffect(() => {
    if (cookies.tokenGH !== undefined) appStore.githubToken = cookies.tokenGH
  }, [])

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
