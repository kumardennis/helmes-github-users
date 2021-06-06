import ListItem from 'components/ListItem/ListItem'
import React from 'react'
import { Animated } from 'react-animated-css'
import appStore from 'store'
import { view } from '@risingstack/react-easy-state'
import uuid from 'react-uuid'
import './styles.scss'

const List = () => (
  <>
    <div className="list">
      {appStore.listOfUsers !== undefined &&
        appStore.listOfUsers.map((user, key) => (
          <Animated
            key={uuid()}
            animationIn="bounceInUp"
            animationInDelay={key * 100}
          >
            <ListItem
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

export default view(List)
