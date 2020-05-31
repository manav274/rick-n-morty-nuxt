export default {
  computed: {
    filterList () {
      return this.$store.getters.filters
    }
  },
  methods: {
    updateSelectedFilter () {
      this.$store.dispatch('updateCheckedFilters')
    }
  }
}
