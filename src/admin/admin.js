var Vue = require('vue')
var VueRouter = require('vue-router')
var Route = require('./route')
var VueResource = require('vue-resource')
require('bootstrap')

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.debug = true
Vue.config.devtools = true

var app = Vue.extend({})
var router = new VueRouter()

router.beforeEach(function(transition) {
  if (transition.to.auth) {
    if (localStorage.token) {
      transition.next();
    } else {
      transition.redirect('/login');
    }
  } else {
    transition.next();
  }
})

Route(router)

router.start(app, '#app')
