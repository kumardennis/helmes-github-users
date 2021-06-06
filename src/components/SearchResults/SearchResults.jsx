import Grid from 'components/Grid/Grid'
import List from 'components/List/List'
import React from 'react'
import ViewSwitch from 'components/ViewSwitch/ViewSwitch'
import { view } from '@risingstack/react-easy-state'
import appStore from 'store'
import NoData from 'components/NoData/NoData'
import AuthModal from 'components/AuthModal/AuthModal'
import './styles.scss'

const SearchResults = () => (
  <>
    <div className="icons">
      <AuthModal />
      <ViewSwitch />
    </div>
    {appStore.listOfUsers.length > 0 ? (
      appStore.currentView === 0 ? (
        <Grid />
      ) : (
        <List />
      )
    ) : (
      <NoData />
    )}
  </>
)

export default view(SearchResults)
