import React from 'react'
import Header from 'components/Header/Header'
import SearchContainer from 'containers/SearchContainer/SearchContainer'
import ReactNotification from 'react-notifications-component'
import { view } from '@risingstack/react-easy-state'
import Footer from 'components/Footer/Footer'

const LandingPage = () => (
  <div className="page-container">
    <ReactNotification />
    <Header />
    <main>
      <SearchContainer />
    </main>

    <Footer />
  </div>
)

export default view(LandingPage)
