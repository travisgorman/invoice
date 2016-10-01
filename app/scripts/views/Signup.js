import $ from 'jquery'
import Backbone from 'backbone'
import router from '../router'
import settings from '../settings'
import session from '../models/session'

const Signup = Backbone.View.extend({
  className: 'login-form',
  events: {
    'click #signupBtn' : 'signupHandler',
    'click #toLogin' : 'loginLink'
  },

  signupHandler: function(e) {
    e.preventDefault()
    let username = $('#username').val()
    let password = $('#password').val()
    session.signup(name, username, password)
  },

  loginLink: function(e) {
    e.preventDefault()
    router.navigate('login', {trigger: true})
  },

  template: function() {
    return `
    <main class="login">
      <div class="form">
        <form>
          <h2>Sign Up to Create Your New Account</h2>
          <input id="new-name" name="new-name" placeholder="Username" type="text">
          <input id="username" name="username" placeholder="Username" type="text">
          <input id="password" name="password" placeholder="Password" type="password">
          <input id="password2" name="password2" placeholder="Verify Password" type="password">
          <button id="signupBtn" class="signupBtn"> Sign Up </button>
        </form>
        <p>Already a member? </p>
          <a href="#login" id="toLogin">Log In</a>
      </div>
    </main>
    `
  },

  render() {
    this.$el.html(this.template())
    return this
  },

})

export default Signup