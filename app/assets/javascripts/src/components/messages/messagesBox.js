import React from 'react'
// import classNames from 'classNames'
import _ from 'lodash'
import MessagesStore from '../../stores/messages'
import ReplyBox from '../../components/messages/replyBox'
// import UserStore from '../../stores/user'
// import Utils from '../../utils'

class MessagesBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.initialState
  }
  get initialState() {
    return this.getStateFromStore()
  }
  getStateFromStore() {
    return {
      messages: MessagesStore.getMessages(),
    }
  }
  componentWillMount() {
    MessagesStore.onChange(this.onStoreChange.bind(this))
  }
  componentWillUnmount() {
    MessagesStore.offChange(this.onStoreChange.bind(this))
  }
  onStoreChange() {
    this.setState(this.getStateFromStore())
  }

  render() {
    console.log(this.state.messages)
    // const messagesLength = this.state.messages.length
    // const currentUserID = UserStore.user.id
    // const messages = this.state.messages.map((message) => {
    //   const messageClasses = classNames({
    //     'message-box__item': true,
    //     'message-box__item--from-current': message.from === currentUserID,
    //     'clear': true,
    //   })

    //   return (
    //       <li key={ message.timestamp + '-' + message.from } className={ messageClasses }>
    //         <div className='message-box__item__contents'>
    //           { message.content }
    //         </div>
    //       </li>
    //     )
    // })

    // const lastMessage = this.state.messages[messagesLength - 1]

    // if (lastMessage.from === currentUserID) {
    //   if (this.state.lastAccess.recipient >= lastMessage.timestamp) {
    //     const date = Utils.getShortDate(lastMessage.timestamp)
    //     messages.push(
    //         <li key='read' className='message-box__item message-box__item--read'>
    //           <div className='message-box__item__contents'>
    //             Read { date }
    //           </div>
    //         </li>
    //       )
    //   }
    // }

    // const messages = this.state.messages.map(message => {
    //   const messageClasses = classNames({
    //     'message-box__item': true,
    //     'message-box__item--from-current': message.user_id === currentUserId,
    //     'clear': true,
    //   })
    //   return (
    //     <div className='message-box__item__contents'>
    //       { messages }
    //     </div>
    //   )
    // })
    
    const messages = this.state.messages


    return (
        <div className='message-box'>
          <ul className='message-box__list'>
            {
              _.map(messages, (message) => {

                return (
                  <li key={message.id}>
                    <span>{message.content}</span>
                  </li>
                )
              })
            }
          </ul>
          <ReplyBox />,
        </div>
      )
  }
}

export default MessagesBox
