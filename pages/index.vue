<template>
  <main id="app" class="d-flex flex-column flex-sm-column flex-md-row py-5 col col-12 col-sm-12 bg">
    <div class="col col-12 col-sm-12 col-md-2">
      <AppFilter />
    </div>
    <div class="col col-12 col-sm-12 col-md-10">
      <SearchFilters />
      <CharacterCard />
    </div>
  </main>
</template>

<script>
import AppFilter from '@/components/filters/AppFilter.vue'
import CharacterCard from '@/components/characterCard/CharacterCard.vue'
import SearchFilters from '@/components/searchFilters/SearchFilters.vue'
export default {
  name: 'App',
  components: {
    AppFilter,
    CharacterCard,
    SearchFilters
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
