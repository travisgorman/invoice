import $ from 'jquery'
import Backbone from 'backbone'
import router from '../router'
import settings from '../settings'
import session from '../models/session'

const Login = Backbone.View.extend({
  className: 'login-form',
  events: {
    'click #loginBtn' : 'loginHandler',
    'click #toSignup' : 'signupLink'
  },

  loginHandler: function(e) {
    e.preventDefault()
    let username = $('#username').val()
    let password = $('#password').val()
    session.login(username, password)
  },

  signupLink: function(e) {
    e.preventDefault()
    router.navigate('signup', {trigger: true})
  },

  template: function() {
    return `
    <main class="login">
      <div class="form">
        <form>
          <h2>Login To Your Account</h2>
          <input id="username" name="username" placeholder="Username" type="text">
          <input id="password" name="password" placeholder="Password" type="password">
          <button id="loginBtn" class="loginBtn"> Login </button>
        </form>
        <p>Not a memeber yet? </p>
        
          <a href="#signup">Sign Up</a>
        
      </div>
    </main>
    `
  },

  render() {
    this.$el.html(this.template())
    return this
  },

})
export default Login