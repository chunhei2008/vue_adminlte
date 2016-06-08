export default {
    props: [
        'bg',
        'h1',
        'subheading'
    ],
    data() {
        return {
            style: {}
        }
    },
    ready: function() {
        this.style = {
            'background-image': 'url(' + this.bg + ')'
        }
    }
}
