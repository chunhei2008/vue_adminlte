import Simditor from '../../../components/Simditor.vue';
var firebase = require('firebase');
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBxIHWnUX-6gzMn5a9yAHaincrNl2hE92I",
    authDomain: "fir-a6355.firebaseapp.com",
    databaseURL: "https://fir-a6355.firebaseio.com",
    storageBucket: "fir-a6355.appspot.com",
};
firebase.initializeApp(config);
firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/operation-not-allowed') {
        alert('You must enable Anonymous auth in the Firebase Console.');
    } else {
        console.error(error);
    }
});

export default {
    methods: {
        submit() {
            var self = this;
            var post = {
                title: self.title,
                new_tags: self.new_tags,
                tags: self.tags,
                content: self.content
            }
            firebase.database().ref('/posts/').push(post).then((value) => {
                self.title = '';
                self.new_tags = '';
                self.tags = [];
                self.content = '';
            }).catch((err) => {
                console.log(err);
            })
        }
    },
    data() {
        return {
            title: '',
            new_tags: '',
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
                contentType: 'text',
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
