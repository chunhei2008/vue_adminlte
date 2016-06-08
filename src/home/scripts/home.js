import BlogNav from '../components/Nav.vue'
import BlogHeader from '../components/Header.vue'
import BlogFooter from '../components/Footer.vue'

export default {
    data() {
            return {
                h1: 'NoIT',
                bg: './dist/startbootstrap-clean-blog/img/home-bg.jpg',
                subheading: 'Not only IT'
            }
        },
        components: {
            BlogNav,
            BlogHeader,
            BlogFooter
        }
}
