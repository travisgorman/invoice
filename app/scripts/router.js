import Backbone from 'backbone'
import $ from 'jquery'
import Login from './views/Login'
import Signup from './views/Signup'
import Nav from './views/Nav'

const Router = Backbone.Router.extend({
  routes: {
    'login' : 'loginRoute',
    'signup': 'signupRoute',
    'app'   : 'appRoute',
    '/*'    : 'loginRoute',
  },

  loginRoute: () => {
    let login = new Login()
    $('#page').empty().append(login.render().$el)
  },

  signupRoute: () => {
    let signup = new Signup()
    $('#page').empty().append(signup.render().$el)
  },

  appRoute: () => {
    let nav = new Nav()
    $('#page').empty().append(nav.render().$el)
  },

})

let router = new Router()
export default router