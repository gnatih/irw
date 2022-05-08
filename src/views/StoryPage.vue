<template>
  <div class="container">
    <category-header :category="category"></category-header>
  </div>

  <div class="break-top mb-5"><img src="/images/break-bottom.svg" /></div>
  <div class="container stories-swiper-wrapper">
    <div class="swiper-button-prev" @click="prevStory"></div>
    <div class="swiper-button-next" @click="nextStory"></div>
    <!-- <swiper id="stories-swiper" :slides-per-view="'auto'" :centered-slides="true" :space-between="15" class="mb-5" @swiper="swiperInit" @slide-change="changeStorySwiper">
      <swiper-slide v-for="story in all_stories" :key="story.STORYID"
        ><a :href="'/story/' + story.STORYID"><img :src="story.image.thumb" /></a
      ></swiper-slide> 
    </swiper>-->
  </div>

  <div class="col-md-8 mx-auto mb-5">
    <h2 class="text-center my-3">{{ stories[slide].TITLE }}</h2>
    <div v-if="stories[slide].AUTHORS" class="text-center my-3">{{ stories[slide].AUTHORS }}</div>

    <div v-if="stories.length > 1">
      <swiper id="story-swiper" :modules="[Navigation, Thumbs]" :pagination="{ clickable: true }" :thumbs="{ swiper: thumbsSwiper }" @slide-change="slideChange">
        <template v-for="story in stories" :key="story.ID">
          <swiper-slide v-show="story.image" class="story-slide" :data-story-id="story.STORYID" :style="{ background: `url(${story.image.large})` }"></swiper-slide>
        </template>
      </swiper>
      <swiper :modules="[Thumbs]" watch-slides-progress class="mt-3 thumbs-swiper" slides-per-view="5" :center-slides="true" :center-insufficient-slides="true" :space-between="15" @swiper="setThumbsSwiper">
        <template v-for="story in stories" :key="story.ID">
          <swiper-slide v-show="story.image" :style="{ 'background-image': `url(${story.image.thumb})` }"> </swiper-slide>
        </template>
      </swiper>
    </div>
    <div v-else class="story-slide" :style="{ background: `url(${stories[slide].image.large})` }"></div>

    <div class="story-info mt-5 text-center">
      <div class="story-description">{{ stories[slide].DESCRIPTION }}</div>
      <div class="mt-5"><img src="/images/location.png" width="18" alt="location" class="me-2" />{{ stories[slide].COUNTRY }} <img src="/images/museum.png" width="18" alt="location" class="ms-4 me-2" />{{ stories[slide].MUSEUMNAME }}</div>
    </div>
  </div>
</template>

<script>
import { computed, inject, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Thumbs, Lazy, FreeMode } from "swiper";
import findIndex from "lodash/findIndex";
import CategoryHeader from "@/components/CategoryHeader.vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";
import "swiper/css/free-mode";

export default {
  components: { Swiper, SwiperSlide, CategoryHeader },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.store.state.category = from.params.slug;
    });
  },
  setup() {
    const store = inject("store");
    const route = useRoute();
    const slide = ref(0);
    const thumbsSwiper = ref(null);
    const sid = route.params.sid;
    const stories = computed(() => store.state.data.filter((story) => parseInt(story.STORYID) == sid));
    const all_stories = computed(() => store.state.stories.filter((item) => item[category.value] == "1"));
    const initialSlide = computed(() => findIndex(all_stories.value, (story) => parseInt(story.STORYID) == sid));

    const category = computed(() => {
      let cats = [];

      for (let key in stories.value[0]) {
        if (stories.value[0][key] == "1" && key !== "IMAGE") cats.push(key);
      }

      if (cats.length) return cats[0];

      return store.state.category;
    });

    const slideChange = (i) => {
      slide.value = i.activeIndex;
    };

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    const swiperInit = (swiper) => {
      if (initialSlide) {
        swiper.activeIndex = initialSlide.value;
        swiper.preventInteractionOnTransition = true;
      }
    };

    const changeStorySwiper = (swiper) => {
      swiper.activeIndex = initialSlide.value;
    };

    const nextStory = () => {
      let next = all_stories.value[initialSlide.value + 1];

      if (next) {
        window.location.href = "/story/" + next.STORYID;
      }
    };

    const prevStory = () => {
      let prev = all_stories.value[initialSlide.value - 1];

      if (prev) {
        window.location.href = "/story/" + prev.STORYID;
      }
    };

    return {
      store,
      all_stories,
      stories,
      Navigation,
      Lazy,
      Thumbs,
      slide,
      slideChange,
      thumbsSwiper,
      setThumbsSwiper,
      initialSlide,
      category,
      swiperInit,
      FreeMode,
      changeStorySwiper,
      nextStory,
      prevStory,
    };
  },
};
</script>
