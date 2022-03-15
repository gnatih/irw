<template>
  <div>
    <header>
      <header-navigation />
    </header>
    <router-view />
    <footer-navigation />
  </div>
</template>

<script>
import HeaderNavigation from "./components/HeaderNavigation.vue";
import FooterNavigation from "./components/FooterNavigation.vue";
import store from "./store";
import { onMounted, provide } from "@vue/runtime-core";

export default {
  components: { HeaderNavigation, FooterNavigation },
  setup() {
    onMounted(async () => {
      store.methods.loadData();
    });

    provide("store", store);
  },
};
</script>
