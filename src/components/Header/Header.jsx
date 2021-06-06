import React from 'react'
import './styles.scss'
import { Animated } from 'react-animated-css'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

// This is component being used only once, hence it is made static.
const Header = ({ animateHeader }) => (
  <header className="header">
    <div className="header-overlay">
      {animateHeader ? (
        <Animated animationIn="bounceInLeft" isVisible>
          <h1>
            <Link style={{ color: 'white' }} to="/">
              HELMES
            </Link>
          </h1>
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

export default Header

Header.propTypes = {
  animateHeader: PropTypes.bool.isRequired,
}
