<template>
  <div class="container">
    <category-header :category="'Exhibition'"></category-header>
  </div>

  <div class="break-top mb-5"><img src="/images/break-bottom.svg" /></div>

  <div class="container exhibitions-swiper-wrapper">
    <div class="swiper-button-prev" @click="prevExhibit"></div>
    <div class="swiper-button-next" @click="nextExhibit"></div>
    <swiper id="exhibitions-swiper" :slides-per-view="'auto'" :centered-slides="true" :space-between="15" class="mb-5" @swiper="swiperInit" @slide-change="swiperChange">
      <swiper-slide v-for="exhibit in exhibitions" :key="exhibit.UUID"
        ><a :href="'/exhibition/' + exhibit.UUID"><img :src="`https://irememberwater.watermuseums.net/images/micro/${exhibit.UNIVOCALCODE}`" /></a
      ></swiper-slide>
    </swiper>
  </div>

  <div class="col-md-8 mx-auto mb-5">
    <h2 class="text-center my-3">{{ exhibition.TITLE }}</h2>
    <div v-if="exhibition.AUTHORS" class="text-center my-3">{{ exhibition.AUTHORS }}</div>

    <div class="story-slide" :style="{ background: `url(${exhibition.image.large})` }"></div>

    <div class="story-info mt-5 text-center">
      <div class="story-description">{{ exhibition.DESCRIPTION }}</div>
      <div class="mt-5"><img src="/images/location.png" width="18" alt="location" class="me-2" />{{ exhibition.COUNTRY }} <img src="/images/museum.png" width="18" alt="location" class="ms-4 me-2" />{{ exhibition.MUSEUMNAME }}</div>
    </div>
  </div>
</template>

<script>
import { computed, inject } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import CategoryHeader from "@/components/CategoryHeader.vue";
import first from "lodash/first";
import findIndex from "lodash/findIndex";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

export default {
  components: { Swiper, SwiperSlide, CategoryHeader },
  setup() {
    const store = inject("store");
    const route = useRoute();
    const eid = route.params.id;
    const exhibition = computed(() => first(store.state.exhibition.filter((item) => parseInt(item.UUID) == eid)));
    const exhibitions = computed(() => store.state.exhibition);
    const initialSlide = computed(() => findIndex(store.state.exhibition, (exhibit) => parseInt(exhibit.UUID) == eid));

    const swiperChange = (swiper) => {
      swiper.activeIndex = initialSlide.value;
    };

    const swiperInit = (swiper) => {
      swiper.activeIndex = initialSlide.value;
    };

    const nextExhibit = () => {
      let next = exhibitions.value[initialSlide.value + 1];

      if (next) {
        window.location.href = "/exhibition/" + next.UUID;
      }
    };

    const prevExhibit = () => {
      let prev = exhibitions.value[initialSlide.value - 1];

      if (prev) {
        window.location.href = "/exhibition/" + prev.UUID;
      }
    };

    return {
      exhibitions,
      exhibition,
      swiperInit,
      swiperChange,
      initialSlide,
      nextExhibit,
      prevExhibit,
    };
  },
};
</script>
