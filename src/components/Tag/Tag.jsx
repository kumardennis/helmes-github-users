import React from 'react'
import { PropTypes } from 'prop-types'
import './styles.scss'

const Tag = ({ label, onClick }) => (
  <div onClick={onClick} className="tag">
    {label}
  </div>
)

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Tag
