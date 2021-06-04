import React from 'react'
import './styles.scss'
import { Animated } from 'react-animated-css'

// This is component being used only once, hence it is made static.
const Header = ({ animateHeader }) => {
  return (
    <header className="header">
      <div className="header-overlay">
        {animateHeader ? (
          <Animated animationIn="bounceInLeft" isVisible={true}>
            <h1>HELMES</h1>
            <h2>Github-users search platform</h2>
          </Animated>
        ) : (
          <>
            <h1>HELMES</h1>
            <h2>Github-users search platform</h2>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
