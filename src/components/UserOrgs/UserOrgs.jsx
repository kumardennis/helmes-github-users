import React from 'react'
import './styles.scss'

const UserOrgs = ({ userOrgs }) => {
  console.log(userOrgs)
  return (
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
}

export default UserOrgs
