import Vuex from 'vuex'
import filterOptions from './filterOptions'

import * as actions from './actions/actions'
import * as mutations from './mutations/mutations'
import * as getters from './getters/getters'

const createStore = () => {
  return new Vuex.Store({
    state: {
      filters: filterOptions,
      selectedFilters: {},
      url: 'https://rickandmortyapi.com/api/character/?',
      characters: [],
      filteredCharacters: [],
      searchName: '',
      prevPage: null,
      nextPage: null
    },
    mutations,
    actions,
    getters
  })
}

export default createStore
