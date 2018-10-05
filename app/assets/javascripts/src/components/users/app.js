import React from 'react'
import SearchBox from './searchBox'
import UserList from './userList'

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <h1 id='searchUserTitle'>Search Users</h1>
        <h2 id='searchUserExplain'>You can start chating by clicking user's name!</h2>
        <SearchBox />
        <UserList {...this.state}/>
      </div>
    )
  }
}
export default App
