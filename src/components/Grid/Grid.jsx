import GridItem from 'components/GridItem/GridItem'
import React from 'react'
import { Animated } from 'react-animated-css'
import { view } from '@risingstack/react-easy-state'
import appStore from 'store'
import './styles.scss'

const Grid = () => {
  return (
    <>
      <div className="grid">
        {appStore.listOfUsers !== undefined &&
          appStore.listOfUsers.map((user, key) => (
            <Animated
              key={key}
              animationIn="bounceInUp"
              animationInDelay={key * 100}
            >
              <GridItem
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

export default view(Grid)
