import React from 'react'
import SearchBox from './searchBox'

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <h1 id='searchUserTitle'>Search Users</h1>
        <SearchBox />
      </div>
    )
  }
}
export default  App