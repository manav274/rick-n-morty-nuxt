<template>
  <div>
    <section class="row">
      <ul class="list-unstyled col-sm-12 card-grid p-0">
        <div v-if="characters.length > 0">
          <transition-group
            name="fade"
            mode="out-in"
            class="d-flex flex-row flex-wrap"
          >
            <li
              v-for="character in characters"
              :key="character.id"
              class="col col-12 col-sm-6 col-md-3 d-flex align-items-stretch p-0"
            >
              <div class="card m-2">
                <div class="card-image">
                  <img
                    :src="character.image"
                    :alt="character.name"
                    class="card-img-top"
                  >
                  <div class="card-name card-body col-12">
                    <h4>{{ character.name }}</h4>
                    id: {{ character.id }} - created
                    {{
                      parseInt(
                        (new Date() - new Date(character.created)) /
                          (1000 * 3600 * 24) /
                          365
                      )
                    }}
                    years ago
                  </div>
                </div>
                <ul class="card-body list-unstyled">
                  <li
                    class="card-text d-flex justify-content-between flex-wrap"
                  >
                    <span>Status</span>
                    <span class="card-text_status text-right">{{
                      character.status
                    }}</span>
                  </li>
                  <li
                    class="card-text d-flex justify-content-between flex-wrap"
                  >
                    <span>Species</span>
                    <span class="card-text_status text-right">{{
                      character.species
                    }}</span>
                  </li>
                  <li
                    class="card-text d-flex justify-content-between flex-wrap"
                  >
                    <span>Gender</span>
                    <span class="card-text_status text-right">{{
                      character.gender
                    }}</span>
                  </li>
                  <li
                    class="card-text d-flex justify-content-between flex-wrap"
                  >
                    <span>Origin</span>
                    <span class="card-text_status text-right">{{
                      character.origin.name
                    }}</span>
                  </li>
                  <li
                    class="card-text d-flex justify-content-between flex-wrap"
                  >
                    <span>Last Location</span>
                    <span class="card-text_status text-right">{{
                      character.location.name
                    }}</span>
                  </li>
                </ul>
              </div>
            </li>
          </transition-group>
        </div>
        <div
          v-else
          class="d-flex flex-column justify-content-center align-items-center align-center py-4"
        >
          <h4 class="py-2">
            No characters available for current filter selection. Please change
            filter selection. Or Change Page Below
          </h4>
        </div>
      </ul>
    </section>
    <section class="d-flex col-sm-12 justify-content-center">
      <button
        class="btn btn-outline-primary mr-3"
        :class="{ disabled: !ifPrev }"
        @click="previousPage"
      >
        <i class="fa fa-arrow-left" aria-hidden="true" /> Prev
      </button>
      <button
        class="btn btn-outline-primary ml-3"
        :class="{ disabled: !ifNext }"
        @click="nextPage"
      >
        Next
        <i class="fa fa-arrow-right" aria-hidden="true" />
      </button>
    </section>
  </div>
</template>
<script src="./characters.js"></script>

<style scoped lang="scss" src="./characters.scss"></style>
