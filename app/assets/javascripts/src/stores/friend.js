import appDispatcher from '../dispatcher'
import BaseStore from '../base/store'
import {ActionTypes} from '../constants/app'

class FriendStore extends BaseStore {
  getFriends() {
    if (!this.get('friends')) this.setFriends([])
    return this.get('friends')
  }

  setFriends(array) {
    this.set('friends', array)
  }
}

const Friend = new FriendStore()

Friend.dispatchToken = appDispatcher.register(payload => {
  const action = payload.action

  switch (action.type) {
    case ActionTypes.LOAD_FRIENDS:
      Friend.setFriends(payload.action.json)
      console.log(payload.action.json)
      Friend.emitChange()
      break

    case ActionTypes.LOAD_SEARCH_FRIENDS:
      Friend.setFriends(payload.action.json)
      Friend.emitChange()
      // console.log(payload.action.json)
      break

    case ActionTypes.LOAD_FRIENDS_ID:
      toUserId = action.toUserId
      Friend.emitChange()
      break
  }

  return true
})

window.Friend = Friend
export default Friend
