import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import './styles.scss'

const UserRepos = ({ userRepos }) => {
  return (
    <div className="user-repos">
      <h3>Repositories</h3>
      <div>
        {userRepos.length > 0
          ? userRepos.map((repo, key) => (
              <div>
                <ArrowRightIcon /> <a href={repo.url}>{repo.name}</a>
              </div>
            ))
          : 'No repos to display'}
      </div>
    </div>
  )
}

export default UserRepos
