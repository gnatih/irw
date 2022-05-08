<template>
  <div class="col-md-8 mx-auto mb-5">
    <div v-if="stories.length > 1">
      <swiper
        id="story-swiper"
        :modules="[Navigation, Thumbs]"
        :pagination="{ clickable: true }"
        navigation
        :thumbs="{ swiper: thumbsSwiper }"
        @slide-change="slideChange"
      >
        <template v-for="story in stories" :key="story.ID">
          <swiper-slide
            v-show="story.image"
            class="story-slide"
            :style="{ background: `url(${story.image.large})` }"
          >
          </swiper-slide>
        </template>
      </swiper>
      <swiper
        :modules="[Thumbs]"
        watch-slides-progress
        class="mt-3 thumbs-swiper"
        slides-per-view="5"
        :center-slides="true"
        :center-insufficient-slides="true"
        :space-between="15"
        @swiper="setThumbsSwiper"
      >
        <template v-for="story in stories" :key="story.ID">
          <swiper-slide
            v-show="story.image"
            :style="{ 'background-image': `url(${story.image.thumb})` }"
          >
          </swiper-slide>
        </template>
      </swiper>
    </div>
    <div
      v-else
      class="story-slide"
      :style="{ background: `url(${stories[slide].image.large})` }"
    ></div>

    <div class="story-info my-4">
      <table>
        <tr>
          <td>TITLE</td>
          <td>{{ stories[slide].TITLE }}</td>
        </tr>
        <tr>
          <td>DESCRIPTION</td>
          <td>{{ stories[slide].DESCRIPTION }}</td>
        </tr>
        <tr v-if="stories[slide].AUTHORS !== ''">
          <td>CONTRIBUTOR</td>
          <td>{{ stories[slide].AUTHORS }}</td>
        </tr>
        <tr>
          <td>COUNTRY</td>
          <td>{{ stories[slide].COUNTRY }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { computed, inject, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const store = inject("store");
    const route = useRoute();
    const slide = ref(0);
    const thumbsSwiper = ref(null);
    const sid = route.params.sid;
    const stories = computed(() =>
      store.state.data.filter((story) => parseInt(story.ID) == sid)
    );

    const slideChange = (i) => {
      slide.value = i.activeIndex;
    };

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      store,
      stories,
      Navigation,
      Thumbs,
      slide,
      slideChange,
      thumbsSwiper,
      setThumbsSwiper,
    };
  },
};
</script>
