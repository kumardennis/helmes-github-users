import React from 'react'
import './styles.scss'

const Tag = ({ label, onClick }) => {
  return (
    <div onClick={onClick} className="tag">
      {label}
    </div>
  )
}

export default Tag
