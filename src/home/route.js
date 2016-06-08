module.exports = function(router) {
    router.map({
        '/post': {
            name: 'post',
            component: function(resolve) {
                require(['./views/Post.vue'], resolve)
            },
            subRoutes: {
                '/:id': {
                    name: '',
                    component: function(resolve) {
                        require(['./views/Detail.vue'], resolve)
                    }
                },
                '/page/:page': {
                    name: '',
                    component: function(resolve) {
                        require(['./views/Detail.vue'], resolve)
                    }
                }
            }
        },
        '/about': {
            name: 'about',
            component: function(resolve) {
                require(['./views/About.vue'], resolve)
            }
        },
        '/home': {
            name: 'home',
            component: function(resolve) {
                require(['./views/Home.vue'], resolve)
            }
        },
        '/contact': {
            name: 'contact',
            component: function(resolve) {
                require(['./views/Contact.vue'], resolve)
            }
        }
    })
}
