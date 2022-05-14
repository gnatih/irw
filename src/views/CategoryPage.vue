<template>
  <div class="container">
    <div class="row">
      <category-header :category="category"></category-header>
    </div>
  </div>

  <div class="break--top mb-3 mb-md-5">
    <img src="/images/break-bottom.svg" alt="break-top" />
  </div>

  <div class="container mb-5">
    <div class="row">
      <div class="col text-columns-2" v-html="category_meta.Long_text"></div>
    </div>
  </div>

  <div class="container main">
    <div v-masonry transition-duration="0.5s" item-selector=".col" class="row row-cols-2 row-cols-md-3 gx-4 mb-5 masonry">
      <template v-for="story in filtered_stories" :key="story.ID">
        <router-link v-if="story.image" v-masonry-tile class="col mb-3" :to="`/story/${story.STORYID}`">
          <img :src="story.image.thumb" alt="" class="img-fluid w-100 shadow border" />
          <h5 class="mt-3 mb-0 fs-5 fs-md-auto">{{ story.TITLE }}</h5>
          <div>
            {{ story.COUNTRY }}
          </div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import { computed, inject } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import first from "lodash/first.js";
import CategoryHeader from "@/components/CategoryHeader.vue";

export default {
  components: { CategoryHeader },
  setup() {
    const store = inject("store");
    const route = useRoute();
    const category = computed(() => route.params.slug);

    let filtered_stories = computed(() => {
      return store.state.stories.filter((story) => story[category.value] == "1");
    });

    let category_meta = computed(() => first(store.state.categories.filter((item) => item.Category == category.value)));

    return { category, category_meta, store, filtered_stories };
  },
};
</script>
