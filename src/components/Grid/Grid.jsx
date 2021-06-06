import GridItem from 'components/GridItem/GridItem'
import React from 'react'
import { Animated } from 'react-animated-css'
import { view } from '@risingstack/react-easy-state'
import appStore from 'store'
import uuid from 'react-uuid'
import './styles.scss'

const Grid = () => (
  <>
    <div className="grid">
      {appStore.listOfUsers !== undefined &&
        appStore.listOfUsers.map((user, key) => (
          <Animated
            key={uuid()}
            animationIn="bounceInUp"
            animationInDelay={key * 100}
          >
            <GridItem
              key={uuid()}
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

export default view(Grid)
