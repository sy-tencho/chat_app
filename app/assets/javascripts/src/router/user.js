import ReactDecorator from '../base/react_decorator'
import BaseRouter from '../base/router'
import UserSearch from '../components/users/search'

export default class UserRouter extends BaseRouter {
  register() {
    this.route('/users/search', this.decorateUserSearch)
  }

  decorateUserSearch(ctx, next) {
    (new ReactDecorator()).decorate('user-search', UserSearch)
    next()
  }
}
