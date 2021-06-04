import React from 'react'
import './styles.scss'

const UserInfo = ({ avatarUrl, name, type, url }) => {
  return (
    <div className="user-info">
      <img className="user-image" src={avatarUrl} alt={name} />
      <div className="user-name-type">
        <a target="_blank" href={url}>
          {name}
        </a>
        <span>{type}</span>
      </div>
    </div>
  )
}

export default UserInfo
