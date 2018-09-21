import 'babel-polyfill'
import $ from './vendor/jquery'
import page from 'page'
import UserRouter from './router/user'

$(() => {
  const userRouter = new UserRouter()
  userRouter.register()

  page({click: false})
})
