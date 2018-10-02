import React from 'react'
import _ from 'lodash'
import UserStore from '../../stores/user'
import FriendsAction from '../../actions/friends'

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
    // これを抜かすとエラーになった

    getStateFromStores() {
        return {users: UserStore.getUsers()}
    }

    onStoreChange() {
        this.setState(this.getStateFromStores())
    }

    componentDidMount() {
        UserStore.onChange(this.onStoreChange.bind(this))
    }
    
      componentWillUnmount() {
        UserStore.offChange(this.onStoreChange.bind(this))
    }

    onSubmitHandler(connected_user_id) {
        FriendsAction.buildFriendRelationship(connected_user_id)
      }

    render() {
        const searchUsers = this.state.users
        console.log(searchUsers)
        return (
            <div id = 'search_user_list_wrap'>
                <ul className = 'search_user_list'>
                    {
                        _.map(searchUsers, (user) => {
                            return (
                                <li className = 'search_user_list_item' key={user.id}>
                                  <div className = 'search_user_list_result' onClick={this.onSubmitHandler.bind(this, user.id)}>
                                    { user.username }
                                  </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
} export default UserList
