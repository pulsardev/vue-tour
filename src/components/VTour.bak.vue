<script>
  export default {
    name: 'v-tour',
    props: {
      tag: {
        type: String,
        default: 'div'
      }
    },
    render (h) {
      return h(this.tag, this.$slots.default)
    }
  }
</script>
