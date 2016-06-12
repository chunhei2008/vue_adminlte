import Simditor from '../../../components/Simditor.vue';

export default {
    methods: {
        submit() {
            var self = this;
            var article = {
                title: self.title,
                new_tags:self.new_tags,
                tags: self.tags,
                content: self.content
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
            new_tags:'',
            tags: [],
            content: '',
            sys_tags: []
        };
    },
    route: {
        data: function(transition) {
            let page = transition.to.params.page;
            var self = this;
            $.ajax({
                type: 'GET',
                contentType:'text',
                url: 'http://blog.chunhei2008.com:8081/admin/tag/all',
                success: function(response) {
                    self.sys_tags = response.data;
                }
            })
        }
    },
    components: {
        Simditor
    }
}
