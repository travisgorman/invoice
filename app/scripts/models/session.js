import Backbone from 'backbone'
import $ from 'jquery'
import settings from '../settings'
import router from '../router'

const Session = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: `https://baas.kinvey.com/user/${settings.appKey}`,
  defaults: {
    username: '',
  },
  parse: function(response) {
    if (response) {
      return {
        _id: response._id,
        userId: response._id,
        username: response.username,
        authtoken: response._kmd.authtoken,
        name: response.author,
      }
    }
  },
  login: function(username, password) {
    this.save({
      username: username,
      password: password,
    }, {
      url: `https://baas.kinvey.com/user/${settings.appKey}/login`,
      type: 'POST',
      success: (model, response) => {
        localStorage.setItem('authtoken', response._kmd.authtoken)
        this.unset('password')
        router.navigate('app', {trigger: true})
        console.log('SUCCESS: you are logged in.', this.get('username'))
        console.log('localStorage.authtoken', localStorage.getItem('authtoken'))
      },
      error: function(model, response) {
        throw new Error('LOGIN FAILED');
      },
    })
  },
  signup: function(username, password, name) {
    this.save({
      username: username,
      password: password,
      author: name,
    }, {
      url: `https://baas.kinvey.com/user/${settings.appKey}/`,
      type: 'POST',
      success: () => {
        localStorage.removeItem('authtoken');
        localStorage.setItem('authtoken', response._kmd.authtoken)
        this.unset('password')
        router.navigate('app', {trigger: true})
        console.log('SUCCESS: new user created','username: ', this.username)
      },
      error: function(model, response) {
        throw new Error('SIGNUP FAILED')
      },
    })
  },
  logout: function() {
    this.save(null, {
      url: `https://baas.kinvey.com/user/${settings.appKey}/_logout`,
      type: 'POST',
      success: (model, response) => {
        localStorage.clear()
        router.navigate('/', {trigger: true})
        this.set('authtoken', '')
        this.set('name', '')
        console.log('SUCCESS: you are logged out')
        console.log('window.localStorage', window.localStorage)
        console.log('session', session)
      },
      error: function(model, response) {
        throw new Error('LOGOUT FAILED')
      },
    })
  },
  retrieve: function() {
    this.fetch({
      url: `https://baas.kinvey.com/user/${settings.appKey}/_me`,
      success: (model, response) => {
        console.log('USER RETRIEVED: ', this)
        console.log('USER RETRIEVED: ', this.toJSON())
      },
      error: function(response) {
        throw new Error('FAILED TO FETCH USER: ', response)
      },
    })
  }
})

let session = new Session()
export default session

