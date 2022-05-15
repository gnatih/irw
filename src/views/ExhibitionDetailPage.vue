<template>
  <div class="container exhibitions-swiper-wrapper">
    <div class="row">
      <div class="col">
        <div class="swiper-button-prev" @click="prevExhibit"></div>
        <div class="swiper-button-next" @click="nextExhibit"></div>
        <swiper id="exhibitions-swiper" :slides-per-view="'auto'" :auto-height="true" :initial-slide="initialSlide" :centered-slides="true" :space-between="15" class="mb-5 d-none d-md-block" @swiper="swiperInit" @slide-change="swiperChange">
          <swiper-slide v-for="exhibit in exhibitions" :key="exhibit.UUID" class="text-center"
            ><a :href="'/exhibition/' + exhibit.UUID"><img :src="`https://irememberwater.watermuseums.net/images/micro/${exhibit.UNIVOCALCODE}`" /></a
          ></swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h2 class="mx-3 mx-md-auto text-center my-0">{{ exhibition.TITLE }}</h2>
      </div>
    </div>

    <div class="row my-3 my-md-5">
      <div class="col-md-8 mx-auto">
        <div class="story-slide text-center"><img :src="exhibition.image.large" class="img-fluid" /></div>
        <div class="story-info mt-5 text-center">
          <div class="story-description">{{ exhibition.DESCRIPTION }}</div>
          <div class="mt-4">
            <span class="d-block mb-2" v-if="exhibition.AUTHORS"><i class="fa-solid fa-user me-2"></i>{{ exhibition.AUTHORS }}</span>
            <span class="me-2"><i class="fa-solid fa-location-dot me-2"></i>{{ exhibition.COUNTRY }}</span>
            <span class="d-block d-md-inline-block mt-2 mt-md-0"><i class="fa-solid fa-landmark me-2"></i>{{ exhibition.MUSEUMNAME }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, inject, nextTick } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import first from "lodash/first";
import findIndex from "lodash/findIndex";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const store = inject("store");
    const route = useRoute();
    const eid = route.params.id;
    const exhibition = computed(() => first(store.state.exhibition.filter((item) => parseInt(item.UUID) == eid)));
    const exhibitions = computed(() => store.state.exhibition);
    const initialSlide = computed(() => findIndex(store.state.exhibition, (exhibit) => parseInt(exhibit.UUID) == eid));

    nextTick(() => {
      const link = document.querySelector(`[data-cat-id="Exhibition"]`);
      link.classList.add("router-link-active");
    });

    const swiperChange = (swiper) => {
      swiper.activeIndex = initialSlide.value;
    };

    const swiperInit = (swiper) => {
      swiper.activeIndex = initialSlide.value;
      console.log(swiper);
      swiper.autoHeight = true;
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
