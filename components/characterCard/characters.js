export default {
  computed: {
    characters () {
      return !this.$store.getters.filteredCharacters
        ? false
        : this.$store.getters.filteredCharacters
    },
    ifPrev () {
      const prevPage = this.$store.getters.previousPage
      return !!prevPage
    },
    ifNext () {
      const nextPage = this.$store.getters.nextPage
      return nextPage != null
    }
  },
  methods: {
    previousPage () {
      const prevPage = this.$store.getters.previousPage
      if (prevPage != null) {
        this.$store.dispatch('getCharacters', { url: prevPage })
      }
    },
    nextPage () {
      const nextPage = this.$store.getters.nextPage
      if (nextPage != null) {
        this.$store.dispatch('getCharacters', { url: nextPage })
      }
    }
  }
}
