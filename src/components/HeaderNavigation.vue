<template>
  <nav class="navbar navbar-expand-lg p-0 mb-5">
    <div class="container">
      <a class="navbar-brand p-0" href="#"
        ><img src="/images/irw-logo.png" class="img-fluid" width="200"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>

          <li
            v-for="(category, index) in store.state.categories"
            :key="index"
            class="nav-item"
          >
            <router-link class="nav-link" :to="'/category/' + category.Title">{{
              category.Title
            }}</router-link>
          </li>

          <li class="nav-item">
            <a href="https://google.com" class="nav-link" target="_blank"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { inject } from "@vue/runtime-core";

export default {
  setup() {
    const store = inject("store");
    return { store };
  },
};
</script>
