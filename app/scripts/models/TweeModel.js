import Backbone from 'backbone'

const TweeModel = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/twees`,
  defaults: {
    timestamp: new Date(),
    author: '',
    username: '',
    body: ''
  }
})

export default TweeModel