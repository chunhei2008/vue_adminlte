import Simditor from '../../../components/Simditor.vue';
//var Firebase = require("firebase");
//var tags  = new Firebase('https://fir-a6355.firebaseio.com/tags/');

export default {
    methods: {
        submit() {
            var self = this;
            var article = {
                title: this.title,
                tags: this.tags,
                content: this.content
            }
            $.ajax({
                url: '/admin/article',
                type: 'POST',
                dataType: 'json',
                data: article,
                success: function(response) {
                    self.title = '';
                    self.tags = '';
                    self.content = '';
                }

            });
        }
    },
    data() {
        return {
            id: '',
            title: '',
            tags: ['1', '2'],
            content: '',
            all_tags: [{
                id: 1,
                name: 'abc',
            }, {
                id: 2,
                name: 'abc',
            }, {
                id: 3,
                name: 'abc',
            }, {
                id: 4,
                name: 'abc',
            }]
        };
    },
    route: {
        //从服务器获取数据
        data: function(transition) {
            let page = transition.to.params.page;
            //获取token
            //获取文章
            let id = transition.to.params.id;
            id = id;
        }
    },
    components: {
        Simditor
    },
    /*
    firebase:{
      all_tags:tags.limitToLast(25)
    }
    */
}
