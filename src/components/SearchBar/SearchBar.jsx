import React, { useState, useEffect } from 'react'
import { getUsersFromQuery, handleBeforeUnload } from 'utils'
import 'react-notifications-component/dist/theme.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import { view, autoEffect } from '@risingstack/react-easy-state'
import './styles.scss'
import Tag from 'components/Tag/Tag'
import uuid from 'react-uuid'
import appStore from 'store'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    window.addEventListener('unload', handleBeforeUnload)
  }, [])

  // Check for localstorage for recent searches
  useEffect(() => {
    const localstorageData = localStorage.getItem('latestSearches')
    appStore.latestSearches = JSON.parse(localstorageData)
  }, [])

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchClick = async (query) => {
    const finalQuery =
      query !== undefined && query !== null ? query : searchQuery
    await getUsersFromQuery(finalQuery)

    // Add to latest searches
    appStore.latestSearches =
      appStore.latestSearches !== null ? appStore.latestSearches : []
    appStore.latestSearches.unshift(finalQuery)
    appStore.latestSearches = [...new Set(appStore.latestSearches)].slice(0, 3)
  }

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      await handleSearchClick()
    }
  }

  const handleTagClick = async (event) => {
    appStore.searchQuery = event.currentTarget.innerText

    await handleSearchClick(event.currentTarget.innerText)
  }

  autoEffect(() => {
    setSearchQuery(appStore.searchQuery)
  })

  return (
    <>
      <div className="search-bar">
        <input
          onKeyPress={handleKeyPress}
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
          placeholder="Search Github User..."
        />
        <button
          type="submit"
          onClick={handleSearchClick}
          className="search-btn btn"
        >
          <SearchRoundedIcon />
        </button>
      </div>
      <div className="recent-searches">
        Recent Searches:
        {appStore.latestSearches !== null &&
          appStore.latestSearches.length > 0 &&
          appStore.latestSearches.map((tag, key) => (
            <Tag onClick={handleTagClick} key={uuid()} label={tag} />
          ))}
      </div>
    </>
  )
}

export default view(SearchBar)
