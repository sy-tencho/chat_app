import React from 'react'
import _ from 'lodash'

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  render() {

    return(
      <div className='user-list'></div>
    ) 
  }
}

export default UserList