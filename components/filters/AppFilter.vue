<template>
  <section>
    <div>
      <ul
        v-for="(filter, key) in filterList"
        :key="key"
        class="list-unstyled d-flex flex-column"
      >
        <h4>{{ key }}</h4>
        <div class="pl-3 pr-5 py-3 pl-md-2 border border-secondary rounded">
          <li
            v-for="(item, itemKey) in filter"
            :key="itemKey"
            class="form-check"
          >
            <label :for="key + '_' + item.value" class="form-check-label">
              <input
                :id="key + '_' + item.value"
                v-model="item.selected"
                type="checkbox"
                class="form-check-input"
                @change="updateSelectedFilter"
              >
              {{ item.value }}
            </label>
          </li>
        </div>
      </ul>
    </div>
  </section>
</template>
<script src="./filter.js"></script>
