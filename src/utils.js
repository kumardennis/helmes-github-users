import { store } from 'react-notifications-component'
import { getUsers, getUserRepos } from 'apis'
import appStore from 'store'

export const getUsersFromQuery = async (searchQuery) => {
  try {
    const response = await getUsers(searchQuery)

    appStore.listOfUsers = []

    if (response.items < 1) {
      store.addNotification({
        title: 'Oops!',
        message: 'Results incomplete...',
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
    } else {
      await response.items.forEach(async (item) => {
        const repoResponse = await getUserRepos(item.repos_url)
        const reposForUser = []

        if (repoResponse.length < 1) {
          store.addNotification({
            title: 'Oops!',
            message: 'Results incomplete...',
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
        } else {
          await repoResponse.forEach(async (repo) => {
            reposForUser.push({
              id: item.id,
              name: repo.name,
              url: repo.html_url,
            })
          })

          appStore.listOfUsers.push({
            id: item.id,
            avatarUrl: item.avatar_url,
            name: item.login,
            profileUrl: item.url,
            type: item.type,
            repos: reposForUser,
          })
        }
      })
    }
  } catch (err) {
    store.addNotification({
      title: 'Oops!',
      message: err.toString(),
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
  }
}

export const handleBeforeUnload = () => {
  localStorage.setItem(
    'latestSearches',
    JSON.stringify(appStore.latestSearches),
  )
}
