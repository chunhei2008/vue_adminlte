module.exports = function (router) {
    router.map({
        '/admin': {
            name: 'admin',
            auth: true,
            component: function (resolve) {
                require(['./views/Admin.vue'], resolve)
            },
            subRoutes: {
                '/tag/:page': {
                    name: 'tag-index',
                    auth: true,
                    component: function (resolve) {
                        require(['./views/tag/Index.vue'], resolve)
                    }
                },
                '/tag/edit/:id': {
                    name: 'tag-edit',
                    auth: true,
                    component: function (resolve) {
                        require(['./views/tag/Edit.vue'], resolve)
                    }
                },
                '/article/create': {
                    name: 'article-create',
                    auth: true,
                    component: function (resolve) {
                        require(['./views/article/Create.vue'], resolve)
                    }
                },
                '/article/edit/:id': {
                    name: 'article-edit',
                    auth: true,
                    component: function (resolve) {
                        require(['./views/article/Edit.vue'], resolve)
                    }
                },
                '/article/:page': {
                    name: 'article-index',
                    auth: true,
                    component: function (resolve) {
                        require(['./views/article/Index.vue'], resolve)
                    }
                },
                '/demo': {
                    name: 'demo',
                    auth: true,
                    component: function (resolve) {
                        require(['./views/Demo.vue'], resolve)
                    }
                },
                '/test': {
                    name: 'test',
                    auth: true,
                    component: function (resolve) {
                        require(['./views/Test.vue'], resolve)
                    }
                },
                '/404': {
                    component: function (resolve) {
                        require(['./views/404.vue'], resolve)
                    }
                }
            }
        },
        '/login': {
            name: 'login',
            component: function (resolve) {
                require(['./views/Login.vue'], resolve)
            }
        },
        '/home': {
            name: 'home',
            component: function (resolve) {
                require(['./views/Home.vue'], resolve)
            }
        }
    })
}
