var Vue = require('vue')
var VueRouter = require('vue-router')
var Route = require('./route')
var VueFire = require("vuefire");
require('bootstrap')

Vue.use(VueFire);
Vue.use(VueRouter)
Vue.config.debug = true
Vue.config.devtools = true

Vue.directive('ueditor', {
           params: ['config'],
           twoWay: true,
           bind: function () {
               var self = this;
               this.editor = UE.getEditor(this.el.id, this.params.config)
               this.editor.ready(function () {
                   self.editorReady = true
                   self.editor.addListener("contentChange", function () {
                       self.set(self.editor.getContent())
                   })
                   self.update(self.vm.$get(self.expression))
               })
           },
           update: function (newValue, oldValue) {
               if (this.editorReady) {
                   this.editor.setContent(newValue)
               }
           },
           unbind: function () {
               this.editor.destroy()
           }
       });

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
