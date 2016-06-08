import BlogNav from '../components/Nav.vue'
import BlogHeader from '../components/Header.vue'
import BlogFooter from '../components/Footer.vue'

export default {
    data() {
            return {
                h1: 'Man must explore, and this is exploration at its greatest',
                bg: './dist/startbootstrap-clean-blog/img/post-bg.jpg',
                subheading: 'Problems look mighty small from 150 miles up',
                meta:'<span class="meta">Posted by <a href="#">Start Bootstrap</a> on August 24, 2014</span>'
            }
        },
        components: {
            BlogNav,
            BlogHeader,
            BlogFooter
        }
}
