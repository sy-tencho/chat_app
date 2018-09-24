import ReactDecorator from '../base/react_decorator'
import BaseRouter from '../base/router'
import App from '../components/users/app'

export default class UserRouter extends BaseRouter {
  register() {
    this.route('/users/search', this.decorateUserSearch)
  }

  decorateUserSearch(ctx, next) {
    (new ReactDecorator()).decorate('user-search', App)
    next()
  }
}
