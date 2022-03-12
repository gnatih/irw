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

          <li v-for="category in categories" :key="category" class="nav-item">
            <router-link class="nav-link" :to="'/category/' + category">{{
              category
            }}</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>
