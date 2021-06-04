import UserInfo from 'components/UserInfo/UserInfo'
import UserOrgs from 'components/UserOrgs/UserOrgs'
import UserRepos from 'components/UserRepos/UserRepos'
import React from 'react'
import './styles.scss'

const UserDetail = ({ userInfo, userRepos, userOrgs }) => {
  return (
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
}

export default UserDetail
