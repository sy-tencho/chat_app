import React from 'react'
import _ from 'lodash'
import UserStore from '../../stores/user'

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
                                    { user.username }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
} export default UserList
