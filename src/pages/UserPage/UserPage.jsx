import React, { useEffect, useState } from 'react'
import Header from 'components/Header/Header'
import UserDetail from 'containers/UserDetail/UserDetail'
import ReactNotification, { store } from 'react-notifications-component'
import { useParams, Link } from 'react-router-dom'
import { view } from '@risingstack/react-easy-state'
import HashLoader from 'react-spinners/ClipLoader'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'
import {
  getSpecificUser,
  getUserRepos,
  getUserOrgs,
  getSpecificOrg,
} from 'apis'
import NoData from 'components/NoData/NoData'
import Footer from 'components/Footer/Footer'

const UserPage = () => {
  const { id } = useParams()

  const [userInfo, setUserInfo] = useState({})
  const [userRepos, setUserRepos] = useState([])
  const [userOrgs, setUserOrgs] = useState([])
  const [userFound, setUserFound] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const getUser = async () => {
      const response = await getSpecificUser(id)

      if (response.message === 'Not Found') {
        setUserFound(false)
        store.addNotification({
          title: 'Oops!',
          message: 'User does not exists...',
          type: 'danger',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        })
        setIsLoading(false)
      } else {
        setUserInfo(response)

        // Get repos and orgs
        const [repoResponse, orgResponse] = await Promise.all([
          getUserRepos(response.repos_url),
          getUserOrgs(response.organizations_url),
        ])

        const repos = []
        const orgs = []

        repoResponse.forEach((repo) => {
          repos.push({
            id: repo.id,
            url: repo.html_url,
            name: repo.name,
          })
        })

        for (let i = 0; i < orgResponse.length; i += 1) {
          // Get html_url for each org
          const specificOrgResponse = getSpecificOrg(orgResponse[i].url)

          const htmlUrl = specificOrgResponse.html_url

          orgs.push({
            id: orgResponse[i].id,
            url: htmlUrl,
            name: orgResponse[i].login,
            avatarUrl: orgResponse[i].avatar_url,
          })
        }

        setUserRepos(repos)
        setUserOrgs(orgs)
        setIsLoading(false)
      }
    }

    getUser()
  }, [])

  return (
    <div className="page-container">
      <ReactNotification />
      <Header animateHeader />
      <main>
        <Link to="/">
          <ArrowBackRoundedIcon fontSize="large" />
        </Link>
        {isLoading ? (
          <HashLoader color="#41bed1" size={150} />
        ) : userFound ? (
          <UserDetail
            userRepos={userRepos}
            userOrgs={userOrgs}
            userInfo={userInfo}
          />
        ) : (
          <NoData />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default view(UserPage)
