require('../../../dist/adminlte2/plugins/iCheck/icheck.min.js');

export default {
    data() {
            return {
                email: '',
                password: '',
                remember: false
            }
        },
        methods: {
            submit: function() {
                let self = this;
                $('#remember-me').on('ifChecked', function(e) {
                    self.remember = true;
                });
                $('#remember-me').on('ifUnchecked', function(e) {
                    self.remember = false;
                });
                console.log(self.email, self.password, self.remember);
                self.$route.router.go('/demo');
            }
        },
        ready: function() {
            $('#remember-me').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%' // optional
            });
            $('body').removeClass().addClass('hold-transition login-page');
        }
}
