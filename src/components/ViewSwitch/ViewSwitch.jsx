import React, { useEffect } from 'react'
import AppsRoundedIcon from '@material-ui/icons/AppsRounded'
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded'
import { view } from '@risingstack/react-easy-state'
import appStore from 'store'
import './styles.scss'

const ViewSwitch = () => {
  const handleSwitchView = (event) => {
    appStore.currentView = event.currentTarget.id === 'switch-grid-view' ? 0 : 1
  }

  useEffect(() => {
    appStore.currentView = 0
  }, [])

  return (
    <div className="view-switch">
      <div
        onClick={handleSwitchView}
        id="switch-grid-view"
        className={appStore.currentView === 0 ? 'selected-view' : ''}
      >
        <AppsRoundedIcon />
      </div>
      <div
        onClick={handleSwitchView}
        id="switch-list-view"
        className={appStore.currentView === 1 ? 'selected-view' : ''}
      >
        <ViewListRoundedIcon />
      </div>
    </div>
  )
}

export default view(ViewSwitch)
