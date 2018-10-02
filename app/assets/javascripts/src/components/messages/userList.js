import React from 'react'
import _ from 'lodash'
import FriendStore from '../../stores/friend'
import FriendAction from '../../actions/friends'

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  onStoreChange() {
    return {friends: FriendStore.getUsers()}
  }

  getFrieds() {
    FriendAction.loadFriends()
  }

  render() {

    this.onLoad = this.getFrieds()

    return(
      <div className='user-list'>
      
      </div>
    ) 
  }
}

export default UserList