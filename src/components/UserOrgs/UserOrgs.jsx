import React from 'react'
import { PropTypes } from 'prop-types'
import './styles.scss'

const UserOrgs = ({ userOrgs }) => (
  <div className="user-orgs">
    <h3>Organizations</h3>
    <div>
      {userOrgs.length > 0
        ? userOrgs.map((org, key) => (
            <div>
              <img src={org.avatarUrl} alt={org.name} />{' '}
              <a href={org.url}>{org.name}</a>
            </div>
          ))
        : 'No orgs to display'}
    </div>
  </div>
)

UserOrgs.propTypes = {
  userOrgs: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default UserOrgs
