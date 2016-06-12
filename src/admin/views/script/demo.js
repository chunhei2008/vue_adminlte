import EchartPie from '../../components/EchartPie.vue'

var firebase = require('firebase');
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBxIHWnUX-6gzMn5a9yAHaincrNl2hE92I",
    authDomain: "fir-a6355.firebaseapp.com",
    databaseURL: "https://fir-a6355.firebaseio.com",
    storageBucket: "fir-a6355.appspot.com",
};
firebase.initializeApp(config);


export default {
    data() {
            return {
                option: {
                    title: {
                        text: 'ECharts 入门示例22222'
                    },
                    tooltip: {},
                    legend: {
                        data: ['销量']
                    },
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 20, 20]
                    }]
                }
            }
        },
        components: {
            EchartPie
        },
        methods: {
            signin: function() {
                var email = 'chunhei2008@qq.com';
                var password = 'baicai88';
                // [START authanon]
                /*        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // [START_EXCLUDE]
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        console.error(error);
                    }
                    // [END_EXCLUDE]
                });
*/
                firebase.auth().signInAnonymously().catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // [START_EXCLUDE]
                    if (errorCode === 'auth/operation-not-allowed') {
                        alert('You must enable Anonymous auth in the Firebase Console.');
                    } else {
                        console.error(error);
                    }
                    // [END_EXCLUDE]
                });


                var newPostKey = firebase.database().ref().child('posts').push().key;

                // Write the new post's data simultaneously in the posts list and the user's post list.
                var updates = {};
                updates['/users/' + newPostKey] = {
                    name: 'wangyi',
                    age: 28
                };

                return firebase.database().ref().update(updates);

            }
        }
}
