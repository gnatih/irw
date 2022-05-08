<template>
  <div class="container">
    <div class="row">
      <div class="col d-flex align-items-center">
        <div class="ratio ratio-1x1 float-end" style="width: 100px">
          <img :src="`/images/icon_${category.toLowerCase()}.svg`" alt="" />
        </div>
        <h2 class="page-title me-auto">{{ category }}</h2>

        <img :src="`/images/il_${category.toLowerCase()}.svg`" width="200" :alt="category" class="ms-auto" />
      </div>
    </div>
  </div>

  <div class="break--top mb-5">
    <img src="/images/break-bottom.svg" alt="break-top" />
  </div>

  <div class="container mb-5">
    <div class="row">
      <div class="col text-columns-2" v-html="category_meta.Long_text"></div>
    </div>
  </div>

  <div class="container main">
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
import first from "lodash/first.js";

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
      return store.state.stories.filter((story) => story[category.value] == "1");
    });

    let category_meta = computed(() => first(store.state.categories.filter((item) => item.Category == category.value)));

    return { category, category_meta, store, filtered_stories, classObject };
  },
};
</script>

<style></style>
