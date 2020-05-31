export const selectedFilters = (state, selectedFilters) => {
  state.selectedFilters = selectedFilters
}

export const characters = (state, characters) => {
  state.characters = characters
}

export const filteredCharacters = (state, filteredCharacters) => {
  state.filteredCharacters = filteredCharacters
}

export const filters = (state, filters) => {
  state.filters = filters
}

export const prevPage = (state, url) => {
  state.prevPage = url
}
export const nextPage = (state, url) => {
  state.nextPage = url
}
export const characterSearch = (state, name) => {
  state.searchName = name
}
