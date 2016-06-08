import BlogNav from '../components/Nav.vue'
import BlogHeader from '../components/Header.vue'
import BlogFooter from '../components/Footer.vue'

export default {
    data() {
            return {
                h1: 'Contact Me',
                bg: './dist/startbootstrap-clean-blog/img/contact-bg.jpg',
                subheading: 'Have questions? I have answers (maybe).'
            }
        },
        components: {
            BlogNav,
            BlogHeader,
            BlogFooter
        }
}
