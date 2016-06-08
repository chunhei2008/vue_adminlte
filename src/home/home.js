var Vue = require('vue')
var VueRouter = require('vue-router')
var Route = require('./route')

Vue.use(VueRouter)
Vue.config.debug = true
Vue.config.devtools = true

var app = Vue.extend({})
var router = new VueRouter()

Route(router)

router.start(app, '#app')
