import React from 'react'
import MessagesAction from '../../actions/messages'
// import FriendStore from '../../stores/friend'
import Friend from '../../stores/friend'
import MessagesStore from '../../stores/messages'

class ReplyBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  static get propTypes() {
    return {
      searchString: React.PropTypes.string,
    }
  }

  get initialState() {
    return {
      value: '',
    }
  }
  getStateFromStore() {
    return {
      // messages: FriendStore.getMessages(),
      users: Friend.getUsers(),
      userId: MessagesStore.getUsers(),
    }
  }
  handleKeyDown(e) {
    if (e.keyCode === 13) {
      MessagesAction.saveMessage(this.state.value, this.state.users, this.state.userId)
      this.setState({
        value: '',
      })
    }
    console.log(this.state.value)
  }
  updateValue(e) {
    this.setState({
      value: e.target.value,
    })
  }
  componentWillMount() {
    Friend.onChange(this.onStoreChange.bind(this))
  }
  componentWillUnmount() {
    Friend.offChange(this.onStoreChange.bind(this))
  }
  onStoreChange() {
    this.setState(this.getStateFromStore())
  }

  render() {
    // const toUserId = this.state.users
    console.log(this.state.users)
    const currentUserId = this.state.userId
    return (
      <div className='reply-box'>
        <input
          value={ this.state.value }
          onKeyDown={ this.handleKeyDown.bind(this) }
          onChange={ this.updateValue.bind(this) }
          className='reply-box__input'
          placeholder='Type message to reply..'
        />
        <span className='reply-box__tip'>
          Press <span className='reply-box__tip__button'>Enter</span> to send
        </span>
      </div>
    )
  }
}

export default ReplyBox
