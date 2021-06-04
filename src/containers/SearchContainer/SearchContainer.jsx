import React, { useEffect, useState } from 'react'
import SearchBar from 'components/SearchBar/SearchBar'
import SearchResults from 'components/SearchResults/SearchResults'
import { view } from '@risingstack/react-easy-state'
import HashLoader from 'react-spinners/ClipLoader'
import { getUsersFromQuery } from 'utils'

const SearchContainer = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const getUserOnFirstMount = async () => {
      await getUsersFromQuery()

      setIsLoading(false)
    }

    getUserOnFirstMount()
  }, [])

  return (
    <div className="search-container">
      {isLoading ? (
        <HashLoader color="#41bed1" size={150} />
      ) : (
        <>
          <SearchBar />
          <SearchResults />
        </>
      )}
    </div>
  )
}

export default view(SearchContainer)
