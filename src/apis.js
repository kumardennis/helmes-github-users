import appStore from 'store'

export const getUsers = async (queryText) => {
  try {
    // Check for null and undefined
    if (queryText === null || queryText === undefined) queryText = ''

    // Trim trailing and starting whitespaces
    queryText = queryText.trim()

    const per_page = queryText !== '' ? 6 : 20
    const baseUrl = `https://api.github.com/search/users?q=${queryText}+in:user&per_page=${per_page}`

    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        authorization: `token ${appStore.githubToken}`,
      },
    })

    const responseJSON = await response.json()

    return responseJSON
  } catch (err) {
    console.log(err)
  }
}

export const getUserRepos = async (baseUrl) => {
  try {
    const response = await fetch(`${baseUrl}?per_page=3`, {
      method: 'GET',
      headers: {
        authorization: `token ${appStore.githubToken}`,
      },
    })

    const responseJSON = await response.json()

    return responseJSON
  } catch (err) {
    console.log(err)
  }
}

export const getUserOrgs = async (baseUrl) => {
  try {
    const response = await fetch(`${baseUrl}?per_page=3`, {
      method: 'GET',
      headers: {
        authorization: `token ${appStore.githubToken}`,
      },
    })

    const responseJSON = await response.json()

    return responseJSON
  } catch (err) {
    console.log(err)
  }
}

export const getSpecificOrg = async (baseUrl) => {
  try {
    const response = await fetch(`${baseUrl}`, {
      method: 'GET',
      headers: {
        authorization: `token ${appStore.githubToken}`,
      },
    })

    const responseJSON = await response.json()

    return responseJSON
  } catch (err) {
    console.log(err)
  }
}

export const getSpecificUser = async (user) => {
  user = user.trim()
  const baseUrl = `https://api.github.com/users/${user}`
  try {
    const response = await fetch(`${baseUrl}`, {
      method: 'GET',
      headers: {
        authorization: `token ${appStore.githubToken}`,
      },
    })

    const responseJSON = await response.json()

    return responseJSON
  } catch (err) {
    console.log(err)
  }
}
