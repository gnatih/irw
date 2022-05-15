<template>
  <nav class="navbar navbar-expand-lg p-0 mb-5">
    <div class="container">
      <a class="navbar-brand p-0" href="/"><img src="/images/irw-logo.png" class="img-fluid" width="200" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"><i class="text-secondary fa-solid fa-bars fs-1"></i></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-secondary" to="/about">About</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/exhibition">Exhibition</router-link>
          </li>
          <li v-for="(category, index) in categories" :key="index" class="nav-item">
            <router-link class="nav-link" :to="'/category/' + category['Category']" :data-cat-id="category.Category">{{ category.Category }}</router-link>
          </li>

          <li class="nav-item">
            <a href="https://www.watermuseums.net/contacts/" class="nav-link text-secondary" target="_blank">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed, inject } from "@vue/runtime-core";

export default {
  setup() {
    const store = inject("store");
    const categories = computed(() => store.state.categories);
    console.log(store);

    return { categories };
  },
};
</script>
