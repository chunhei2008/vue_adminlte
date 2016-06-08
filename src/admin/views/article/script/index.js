import AdminPagination from '../../../components/AdminPagination.vue'
export default
{
    methods: {
        remove(index)
        {
            if (window.confirm('确定要删除')) {
                let self = this
                let id = self.data[index].id
                $.ajax({
                    url: '/admin/article/remove',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        id: id
                    },
                    success: function (response) {
                        self.data.splice(index, 1)
                    }
                })
            }
        }
    },
    components: {
        AdminPagination
    },
    data()
    {
        return {
            data: [],
            path: {},
            current_page: 1,
            total: 0,
            per_page: 0,
            last_page: 0,
            next_page_url: '',
            prev_page_url: '',
            from: 0,
            to: 10
        }
    },
    route: {
        data: function (transition) {
            let page = transition.to.params.page;

        }
    }
}
