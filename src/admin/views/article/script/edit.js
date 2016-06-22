import Simditor from '../../../components/Simditor.vue'

export default {
    methods: {
        submit() {
            var self = this;
            var article = {
                title: this.title,
                tags: this.tags,
                content: this.content
            };
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
            new_tags: '',
            tags: [],
            content: '',
            sys_tags: []
        };
    },
    ready: function() {
        var self = this;
        $.ajax({
            type: 'GET',
            url: 'http://blog.chunhei2008.com:8081/admin/tag/all',
            success: function(response) {
                self.sys_tags = response.data;
            }
        });
    },
    components: {
        Simditor
    }
};
