import ListItem from 'components/ListItem/ListItem'
import React from 'react'
import { Animated } from 'react-animated-css'
import appStore from 'store'
import { view } from '@risingstack/react-easy-state'
import './styles.scss'

const List = () => {
  return (
    <>
      <div className="list">
        {appStore.listOfUsers !== undefined &&
          appStore.listOfUsers.map((user, key) => (
            <Animated
              key={key}
              animationIn="bounceInUp"
              animationInDelay={key * 100}
            >
              <ListItem
                key={key}
                avatarUrl={user.avatarUrl}
                name={user.name}
                repos={user.repos}
                type={user.type}
              />
            </Animated>
          ))}
      </div>
    </>
  )
}

export default view(List)
