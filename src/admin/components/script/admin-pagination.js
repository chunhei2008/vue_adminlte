export default {
  props: {
    path: Object,
    current_page: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    total: Number,
    per_page: Number,
    current_page: {
      type: Number,
      default: 1
    },
    last_page: Number,
    next_page_url: String,
    prev_page_url: String,
    from: Number,
    to: Number,
  },
  computed: {
    prev: function() {
      if (this.current_page <= 1) {
        return {}
      }
      let prev = this.current_page - 1
      let prev_page = {
        path: {
          name: this.path.name,
          params: {
            page: prev
          }
        },
        index: prev
      }

      return prev_page
    },
    next: function() {
      if (this.current_page >= this.last_page) {
        return {}
      }
      let next = this.current_page + 1
      let next_page = {
        path: {
          name: this.path.name,
          params: {
            page: next
          }
        },
        index: next
      }
      return next_page
    },
    pages: function() {
      let self = this
      if (self.last_page <= 1) {
        return []
      }

      let pages = []
      if (self.last_page <= 15) {
        for (let i = 1; i <= self.last_page; i++) {
          let page = {
            path: {
              name: self.path.name,
              params: {
                page: i
              }
            },
            index: i
          }
          pages.push(page)
        }
        return pages
      }

      let first_page = {
        path: {
          name: self.path.name,
          params: {
            page: 1
          }
        },
        index: 1
      }

      let last_page = {
        path: {
          name: self.path.name,
          params: {
            page: self.last_page
          }
        },
        index: self.last_page
      }


      let start = self.current_page - 7
      let end = self.current_page + 7

      if (start <= 1) {
        end = end - start + 1
        start = 1
      } else {
        let span_page = {
          path: {},
          index: '...'
        }
        pages.push(first_page)
        start > 2 && pages.push(span_page)
      }

      if (end >= self.last_page) {
        end = self.last_page
        start = end - 15 + 1
      }

      for (let i = start; i <= end; i++) {
        let page = {
          path: {
            name: self.path.name,
            params: {
              page: i
            }
          },
          index: i
        }
        pages.push(page)
      }
      if (end < self.last_page) {
        let span_page = {
          path: {},
          index: '...'
        }
        end < self.last_page - 1 && pages.push(span_page)
        pages.push(last_page)
      }
      return pages;
    },
    show: function() {
      return this.last_page > 1
    }
  }
}
