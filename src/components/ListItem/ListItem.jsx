import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import './styles.scss'

const ListItem = ({ avatarUrl, name, repos, type }) => (
  <div className="list-item">
    <div>
      <div className="avatar">
        <img alt={name} src={avatarUrl} />
      </div>
      <div className="name-type">
        <Link target="_blank" rel="noreferrer" to={`/${name}`}>
          {name}
        </Link>
        <small>{type}</small>
      </div>
    </div>
    <div className="repo-list">
      <h3>Repositories</h3>
      <ul>
        {repos.length > 0
          ? repos.map((repo) => (
              <li>
                <a target="_blank" rel="noreferrer" href={repo.url}>
                  {repo.name}
                </a>
              </li>
            ))
          : 'No repos to display'}
      </ul>
    </div>
  </div>
)

ListItem.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
}

export default ListItem
