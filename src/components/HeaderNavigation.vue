<template>
  <div>
    <nav>
      <router-link class="nav-item" to="/">Home</router-link>
      <router-link to="/about">About</router-link>

      <template v-if="categories.length">
        <router-link
          v-for="category in categories"
          :key="category"
          :to="'/category/' + category"
          >{{ category }}</router-link
        >
      </template>

      <router-link to="/contact">Contact</router-link>
    </nav>
  </div>
</template>

<script>
// import _ from "lodash";

export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    console.log(props.categories);
  },
};
</script>

<style scoped>
a {
  margin: 0 8px;
  text-decoration: none;
}
</style>
