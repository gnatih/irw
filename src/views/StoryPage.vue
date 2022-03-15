<template>
  <div class="col-md-8 mx-auto mb-5">
    <swiper
      v-if="stories.length > 1"
      id="story-swiper"
      :modules="modules"
      :pagination="{ clickable: true }"
      navigation
      @slideChange="slideChange"
    >
      <template v-for="story in stories">
        <swiper-slide
          v-if="story.image"
          :key="story.ID"
          class="story-slide"
          :style="{ background: `url(${story.image.large})` }"
        >
        </swiper-slide>
      </template>
    </swiper>
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
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const store = inject("store");
    const route = useRoute();
    const slide = ref(0);
    const sid = route.params.sid;
    const stories = computed(() => {
      return store.state.data.filter((story) => parseInt(story.ID) == sid);
    });

    const slideChange = (i) => {
      slide.value = i.activeIndex;
    };

    return {
      store,
      stories,
      modules: [Pagination, Navigation],
      slide,
      slideChange,
    };
  },
};
</script>
