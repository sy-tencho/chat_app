import React from 'react'
import _ from 'lodash'
import FriendStore from '../../stores/friend'
import FriendAction from '../../actions/friends'

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

  render() {

    // this.reload = this.getFriends()
    const Friend = this.state.friends
    console.log(this.state.friends)

    return(
      <div className='user-list'>
        <ul id='friendList'> 
          {
            _.map(Friend, (friends) => {
              return (
                <li key={friends.id}>
                  <span>{ friends.username }</span>
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