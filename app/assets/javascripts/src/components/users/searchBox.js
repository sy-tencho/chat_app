import React from 'react'
import UsersAction from '../../actions/users'

class SearchBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.initialState
    }

    handleChange(e) {
        const searchText = e.target.value
        this.setState({
            searchText,
        })
        UsersAction.loadSearchUsers(searchText)
    }

    render() {
        return (
            <div className='searchBox'>
                <input 
                    type='text'
                    onChange={ this.handleChange.bind(this) }
                    placeholder= 'Search by user name'
                />
            </div>
        )
    }

}
export default SearchBox