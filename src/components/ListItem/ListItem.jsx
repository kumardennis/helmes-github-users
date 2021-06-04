import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const ListItem = ({ avatarUrl, name, repos, type }) => {
  return (
    <div className="list-item">
      <div>
        <div className="avatar">
          <img alt={name} src={avatarUrl} />
        </div>
        <div className="name-type">
          <Link target="_blank" to={`/${name}`}>
            {name}
          </Link>
          <small>{type}</small>
        </div>
      </div>
      <div className="repo-list">
        <h3>Repositories</h3>
        <ul>
          {repos.length > 0
            ? repos.map((repo, key) => (
                <li>
                  <a target="_blank" href={repo.url}>
                    {repo.name}
                  </a>
                </li>
              ))
            : 'No repos to display'}
        </ul>
      </div>
    </div>
  )
}

export default ListItem
