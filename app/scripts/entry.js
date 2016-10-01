import Backbone from 'backbone'
import $ from 'jquery'
import router from './router'
import session from './models/session'
import settings from './settings'

$(document).ajaxSend((e, jqXHR, jqAjax) => {
  if (localStorage.getItem('authtoken')) {
    jqXHR.setRequestHeader('Authorization', `Kinvey ${localStorage.getItem('authtoken')}`)
  } else {
    jqXHR.setRequestHeader('Authorization', `Basic ${settings.basicAuth}`)
  }
})

Backbone.history.start()

if (localStorage.getItem('authtoken')) {
  session.retrieve()
} else {
  router.navigate('login', {trigger: true})
}


console.log('session.authtoken: ', session.get('authtoken'))
console.log('session.username: ', session.get('username'))
console.log('session.userId: ', session.get('userId'))
console.log('session: ', session)
