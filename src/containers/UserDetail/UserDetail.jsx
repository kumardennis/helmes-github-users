import UserInfo from 'components/UserInfo/UserInfo'
import UserOrgs from 'components/UserOrgs/UserOrgs'
import UserRepos from 'components/UserRepos/UserRepos'
import { PropTypes } from 'prop-types'
import React from 'react'
import './styles.scss'

const UserDetail = ({ userInfo, userRepos, userOrgs }) => (
  <>
    <UserInfo
      avatarUrl={userInfo.avatar_url}
      name={userInfo.name}
      type={userInfo.type}
      url={userInfo.html_url}
    />
    <div className="user-repos-orgs-container">
      <UserRepos userRepos={userRepos} />

      <UserOrgs userOrgs={userOrgs} />
    </div>
  </>
)

UserDetail.propTypes = {
  userInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  userRepos: PropTypes.objectOf(PropTypes.string).isRequired,
  userOrgs: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default UserDetail
