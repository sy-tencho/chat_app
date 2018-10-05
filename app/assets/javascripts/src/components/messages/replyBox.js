import React from 'react'
import MessagesAction from '../../actions/messages'
import FriendStore from '../../stores/friend'

class ReplyBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  get initialState() {
    return {
      value: '',
    }
  }
  getStateFromStore() {
    return {
      messages: FriendStore.getMessages(),
    }
  }
  handleKeyDown(e) {
    if (e.keyCode === 13) {
      MessagesAction.saveMessage(this.state.value)
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
  render() {
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
