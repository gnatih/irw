<template>
  <div class="container main">
    <div class="row mb-5">
      <div class="col-2 align-right">
        <div class="ratio ratio-1x1 bg-light rounded-circle float-end" style="width: 80px"></div>
      </div>
      <div class="col align-items-center d-flex">
        <h2 class="page-title">{{ category }}</h2>
      </div>
    </div>

    <div v-masonry transition-duration="0.5s" item-selector=".col" :class="classObject" class="row gx-5 gy-3 mb-5 masonry mx-5">
      <template v-for="story in filtered_stories" :key="story.ID">
        <router-link v-if="story.image" v-masonry-tile class="col" :to="`/story/${story.ID}`">
          <img :src="story.image.thumb" alt="" class="img-fluid w-100 shadow border" />
          <h5 class="mt-3">{{ story.TITLE }}</h5>
          <p>
            {{ story.AUTHORS }} <span v-if="story.AUTHORS">,</span>
            {{ story.COUNTRY.charAt(0).toUpperCase() + story.COUNTRY.toLowerCase().slice(1) }}
          </p>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import { computed, inject } from "@vue/runtime-core";
import { useRoute } from "vue-router";

export default {
  setup() {
    const store = inject("store");
    const route = useRoute();
    const category = computed(() => route.params.slug);
    const classObject = computed(() => ({
      "exhibit row-cols-2": category.value == "Exhibition",
      "row-cols-3": category.value !== "Exhibition",
    }));

    let filtered_stories = computed(() => {
      console.log(store.state.stories);
      return store.state.stories.filter((story) => {
        console.log(story);
      });
    });

    return { category, store, filtered_stories, classObject };
  },
};
</script>

<style></style>
