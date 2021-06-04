import { store } from '@risingstack/react-easy-state'

const appStore = store({
  cuurentView: 0,
  listOfUsers: [],
  latestSearches: ['test', 'test2', 'test3'],
  searchQuery: '',
  githubToken: '',
})

export default appStore
