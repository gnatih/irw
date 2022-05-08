<template>
  <div class="container">
    <category-header category="Exhibition"></category-header>
  </div>

  <div class="container">
    <div class="row">
      <div class="col text-columns-2">In this section, the curatorial team has selected the most representative images from 60 participating institutions and 6 artists from around the world to create an exhibition ‘in hand’ - a taster of the different ‘water worlds’ exhibited by museums affiliated to WAMU-NET. This selection is now available to all partners to illustrate the diversity and similarity of humankind’s connections with water and its heritage. Images have been selected through a democratic process which involved all curators in intensive discussions to ensure that all pictures conveyed universal water memories.</div>
    </div>
  </div>

  <div class="break--top mt-5"><img src="/images/break-bottom.svg" /></div>

  <div class="container main">
    <div class="exhibition-grid">
      <div v-for="exhibition in exhibitions" :key="exhibition.TITLE" class="exhibition-tile">
        <img :src="`${exhibition.image.thumb}`" :alt="exhibition.TITLE" class="shadow img-fluid w-100" />
        <h4 class="mt-3">{{ exhibition.TITLE }}</h4>
        <span class="">{{ exhibition.COUNTRY }} | Category: {{ exhibition.CATEGORY }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryHeader from "@/components/CategoryHeader.vue";
import { computed, inject } from "@vue/runtime-core";

export default {
  components: { CategoryHeader },
  setup() {
    const store = inject("store");

    console.log(store.state.exhibition);
    const exhibitions = computed(() => store.state.exhibition);

    return {
      exhibitions,
    };
  },
};
</script>
