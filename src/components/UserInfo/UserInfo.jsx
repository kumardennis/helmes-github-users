import React from 'react'
import { PropTypes } from 'prop-types'
import './styles.scss'

const UserInfo = ({ avatarUrl, name, type, url }) => (
  <div className="user-info">
    <img className="user-image" src={avatarUrl} alt={name} />
    <div className="user-name-type">
      <a target="_blank" rel="noreferrer" href={url}>
        {name}
      </a>
      <span>{type}</span>
    </div>
  </div>
)

UserInfo.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default UserInfo
