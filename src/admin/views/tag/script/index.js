export default
{
    data(){
        return {
            data: []
        };
    },
    methods: {
        edit: function (index) {
            let self = this;
            self.data[index].show = !self.data[index].show;
        },
        update: function (index) {
            let self = this;
            let id = self.data[index].id;
            let name = self.data[index].name;
            $.ajax({
                url: '/admin/tag/edit',
                type: 'POST',
                dataType: 'json',
                data: {
                    id: id,
                    name: name
                },
                success: function (response) {
                    self.data[index].show = !self.data[index].show;
                }
            })
        }
    },
    route: {
        data: function (transition) {
            let page = transition.to.params.page;
            $.ajax({
                url: '/admin/tag',
                type: 'GET',
                dataType: 'json',
                data: {
                    page: page
                },
                success: function (response) {
                    let body = response.data;
                    body.data.forEach(function(tag){
                       tag.show = false;
                    });
                    console.log(body);
                    transition.next({
                        data: body.data,
                        path: {
                            name: 'tag-index',
                            params: {}
                        },
                        current_page: body.current_page,
                        total: body.total,
                        per_page: body.per_page,
                        last_page: body.last_page,
                        next_page_url: body.next_page_url,
                        prev_page_url: body.prev_page_url,
                        from: body.from,
                        to: body.to
                    })
                }
            })
        }
    }
}
