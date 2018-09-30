// const UserStore = {
//   user: {
//     id: 1,
//     name: 'John Doek',
//     profilePicture: 'https://avatars1.githubusercontent.com/u/8901351?v=3&s=200',
//   },
// }

// export default UserStore

import appDispatcher from '../dispatcher'
import BaseStore from '../base/store'
import {ActionTypes} from '../constants/app'

class UserStore extends BaseStore {
  getUsers() {
    if (!this.get('users')) this.setUsers([])
    return this.get('users')
  }

  setUsers(array) {
    this.set('users', array)
  }
}

const User = new UserStore()

User.dispatchToken = appDispatcher.register(payload => {
  const action = payload.action

  switch (action.type) {
    case ActionTypes.LOAD_USERS:
      User.setUsers(payload.action.json)
      User.emitChange()
      break

    case ActionTypes.LOAD_SEARCH_USERS: 
      User.setUsers(payload.action.json)
      User.emitChange()
      console.log(payload.action.json)
      break
  }

  return true
})

window.User = User
export default User