import Simditor from '../../../components/Simditor.vue';

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
        data: function(transition) {
            let page = transition.to.params.page;
            $.ajax({
                url: '/admin/tag/all',
                type: 'GET',
                dataType: 'json',
                data: {},
                success: function(response) {
                    transition.next({
                        tags: response.data
                    })
                }
            })
        }
    },
    components: {
        Simditor
    }
}
