import ReactDecorator from '../base/react_decorator'
import BaseRouter from '../base/router'
import App from '../components/messages/app'
import FriendAction from '../actions/friends'
import CurrentUserAction from '../actions/currentUser'

export default class MessageRouter extends BaseRouter {
  register() {
    this.route('/', this.decorateApp)
  }

  decorateApp(ctx, next) {
    (new ReactDecorator()).decorate('react-main', App)
    FriendAction.loadFriends()
    CurrentUserAction.getCurrentUser()
    next()
  }
}
