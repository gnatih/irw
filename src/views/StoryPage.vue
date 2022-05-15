<template>
  <div class="container">
    <div class="row">
      <div class="col stories-swiper-wrapper">
        <div class="swiper-button-prev" @click="prevStory"></div>
        <div class="swiper-button-next" @click="nextStory"></div>
        <swiper id="stories-swiper" :initial-slide="initialSlide" :slides-per-view="'auto'" :centered-slides="true" :center-insufficient-slides="true" :space-between="15" class="d-none d-md-block" @swiper="swiperInit" @slide-change="changeStorySwiper">
          <swiper-slide v-for="story in all_stories" :key="story.STORYID"
            ><a :href="'/story/' + story.STORYID"><img :src="story.image.micro" /> </a
          ></swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="row my-3 my-md-5">
      <div class="col-md-8 mx-auto">
        <h2 class="text-center mb-5 mx-3 mt-0 mt-md-5 mx-md-auto">{{ stories[slide].TITLE }}</h2>

        <div v-if="stories.length > 1">
          <swiper id="story-swiper" :auto-height="true" :modules="[Navigation, Thumbs]" :pagination="{ clickable: true }" :thumbs="{ swiper: thumbsSwiper }" @slide-change="slideChange">
            <template v-for="story in stories" :key="story.ID">
              <swiper-slide v-show="story.image" class="story-slide text-center" :data-story-id="story.STORYID"><img :src="story.image.large" :alt="story.TITLE" class="img-fluid" /></swiper-slide>
            </template>
          </swiper>
          <swiper :modules="[Thumbs]" watch-slides-progress class="mt-3 thumbs-swiper" :slides-per-view="'auto'" :center-insufficient-slides="true" :space-between="15" @swiper="setThumbsSwiper">
            <template v-for="story in stories" :key="story.ID">
              <swiper-slide v-show="story.image" class="text-center"><img :src="story.image.micro" :alt="story.TITLE + ' thumbnail'" class="img-fluid" /></swiper-slide>
            </template>
          </swiper>
        </div>
        <div v-else class="story-slide text-center"><img :src="stories[slide].image.large" :alt="stories[slide].TITLE" class="img-fluid" /></div>

        <div class="story-info mt-5 text-center">
          <div class="story-description">{{ stories[slide].DESCRIPTION }}</div>
          <div class="text-center mt-3">
            <span class="d-block mb-2" v-if="stories[slide].AUTHORS"><i class="fa-solid fa-user me-2"></i>{{ stories[slide].AUTHORS }}</span>
            <span class="me-2"><i class="fa-solid fa-location-dot me-2"></i>{{ stories[slide].COUNTRY }}</span>
            <span class="d-block d-md-inline-block mt-2 mt-md-0"><i class="fa-solid fa-landmark me-2"></i>{{ stories[slide].MUSEUMNAME }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, inject, nextTick, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Thumbs, Lazy } from "swiper";
import findIndex from "lodash/findIndex";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";
import "swiper/css/free-mode";

export default {
  components: { Swiper, SwiperSlide },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.store.state.category) {
        vm.store.state.category = from.params.slug;
      }
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

      if (cats.length) {
        store.state.category = cats[0];
      }

      nextTick(() => {
        document.querySelector(".nav-link").classList.remove("router-link-active");
        const link = document.querySelector(`[data-cat-id="${cats[0]}"]`);
        link.classList.add("router-link-active");
      });

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
        swiper.loadPrevNext = true;
        swiper.loadPrevNextAmount = 10;
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
      changeStorySwiper,
      nextStory,
      prevStory,
    };
  },
};
</script>
