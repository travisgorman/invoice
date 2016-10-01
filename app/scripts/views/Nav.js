import Backbone from 'backbone'
import router from '../router'
import settings from '../settings'
import session from '../models/session'

const Nav = Backbone.View.extend({
  tagName: 'header',
  className: 'header',
  id: 'header',
  events: {
    'click #logoutBtn' : 'logoutHandler', 
  },
  template() {
    return ` 
    <nav> 
      <button class=logoutBtn id="logoutBtn">Log Out</button>
    </nav>
  ` 
  },
  logoutHandler: function(e) {
    session.logout()
  },
  render: function() {
    this.$el.html(this.template())
    return this
  },
  // functions & event handlers
})

export default Nav