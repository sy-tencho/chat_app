import React from 'react'
import _ from 'lodash'
import FriendStore from '../../stores/friend'
import FriendAction from '../../actions/friends'
import MessagesAction from '../../actions/messages'
import CurrentUserAction from '../../actions/currentUser'

class UserList extends React.Component {

  static get propTypes() {
    return {
      searchString: React.PropTypes.string,
    }
  }
  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  get initialState() {
    return this.getStateFromStores()
  }

  onStoreChange() {
    this.setState(this.getStateFromStores())
  }

  getStateFromStores() {
    return {friends: FriendStore.getFriends()}
  }

  // getFriends() {
  //   FriendAction.loadFriends()
  // }

  componentDidMount() {
    FriendStore.onChange(this.onStoreChange.bind(this))
  }

  componentWillUnmount() {
    FriendStore.offChange(this.onStoreChange.bind(this))
  }

  getFriends(id) {
    FriendAction.loadFriendsId(id)
    MessagesAction.getMessages(id)
    CurrentUserAction.getCurrentUser()
    $('.reply-box').css({
      'display': 'block'
    });
  }

  render() {
    const friends = this.state.friends
    console.log(friends)
    return (
      <div className='user-list'>
        <ul id='friendList'>
          {
            _.map(friends, (friend) => {
              return (
                <li key={friend.id} onClick={this.getFriends.bind(this, friend.id)}>
                  <span>{friend.username}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default UserList
