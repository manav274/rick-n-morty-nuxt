<template>
  <div>
    <section class="d-flex flex-column">
      <h3>Selected Filters</h3>
      <div>
        <ul class="list-inline d-flex flex-row flex-wrap list-unstyled p-0">
          <li
            v-for="(value, name,index) in selectedFilters"
            :key="index"
            class="list-unstyled"
          >
            <ul class="p-0">
              <transition-group name="fade" mode="out-in" class="d-flex flex-row flex-wrap list-unstyled">
                <li v-for="filterText in value" :key="filterText" class="mx-1">
                  <button class="btn btn-primary" @click="selectedFilterClick(filterText,name)">
                    {{ filterText }}
                    <i class="fa fa-times" />
                  </button>
                </li>
              </transition-group>
            </ul>
          </li>
        </ul>
      </div>
    </section>
    <section class="d-flex flex-column flex-sm-column flex-md-row justify-content-md-between">
      <div class="d-flex flex-column flex-sm-column justify-content-start col-md-6">
        <form class="form-inline mb-sm-2 mb-md-0">
          <input
            v-model.lazy="name"
            class="form-control col-8 col-sm-10 col-md-7 mr-2 mr-sm-2"
            type="search"
            placeholder="Enter Character Name"
            aria-label="Search"
            @keydown:enter.prevent="characterSearch"
          >
          <button
            class="btn btn-secondary my-2 my-sm-0"
            type="submit"
            @click.prevent="characterSearch"
          >
            Search
            <i class="fa fa-search" aria-hidden="true" />
          </button>
        </form>
      </div>

      <div class="d-flex flex-column flex-sm-column">
        <div class="form-group d-flex flex-md-column">
          <select
            v-model="sortBy"
            name="sortBy"
            class="form-control mb-2 mr-2 mr-sm-2 mr-md-0"
            @change="sortArrangement"
          >
            <option value="id">
              Sort by ID
            </option>
            <option value="name">
              Sort by Name
            </option>
          </select>
          <select
            v-model="orderBy"
            name="orderBy"
            class="form-control ml-2 ml-sm-2 ml-md-0"
            @change="sortArrangement"
          >
            <option value="asc">
              Ascending
            </option>
            <option value="desc">
              Descending
            </option>
          </select>
        </div>
      </div>
    </section>
  </div>
</template>
<script src="./searchFilters.js">
</script>

<style scoped lang="scss" src="./searchFilters.scss">
</style>
