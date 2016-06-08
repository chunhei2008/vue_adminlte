import BlogNav from '../components/Nav.vue'
import BlogHeader from '../components/Header.vue'
import BlogFooter from '../components/Footer.vue'

export default {
    data() {
            return {
                h1: 'About Me',
                bg: './dist/startbootstrap-clean-blog/img/about-bg.jpg',
                subheading: 'This is what I do.'
            }
        },
        components: {
            BlogNav,
            BlogHeader,
            BlogFooter
        }
}
