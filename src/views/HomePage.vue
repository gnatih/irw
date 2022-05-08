<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <img src="/images/fp-sequence1.jpg" alt="I Remember Water.." class="img-fluid" />
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row justify-content-center">
      <div class="clearfix">
        <div class="curatorial-note text-uppercase text-primary fw-bold my-3">Curatorial note</div>
      </div>
      <div class="col text-columns-2">
        <p>A new "culture of water" cannot grow without memory. Memories, whether they are sensory or emotional, short-term or long-term, material or immaterial, are fundamental to our existence as individuals and as collective societies. The curatorial team of this exhibition selected a number of meaningful images that recall our past water memories and reflect on pathways that can help us shape our water futures.</p>
        <p>From the ornate public fountains and standpipes that provided free water to citizens in bustling cities, to the ancient civilizations that have flourished along rivers and waterways, water has shaped our landscape across time and space, from Europe to Africa, from Asia to the Americas.</p>
        <p>However, while water is at the core of our bodies, our livelihoods and our social relationships, water resources have been dammed, depleted or polluted by human activity engrained in engineering paradigms, economic development and growing transboundary conflicts. It's likely that in the future water will have enormous economic value, as the 'new petroleum'.</p>
        <p>Climate change has not only accentuated our failure to use and manage water wisely, but the dangers of too little or too much water (drought, floods and rising sea levels) have posed new challenges to global water governance.</p>
        <p>If we want to address the next global water challenges, we need to find new ways to connect people with their water heritage, so that we can build empathy and stimulate new water awareness, supporting the wise and judicious use of our water legacies. In the future, water museums have a pivotal role to play in this process.</p>
      </div>
    </div>
  </div>

  <div class="break--top">
    <img src="/images/break-top.svg" alt="break-top" />
  </div>

  <div class="container">
    <div class="row">
      <div class="col py-3">
        <div class="d-inline-block" style="width: 120px">
          <img src="/images/icon_exhibition.svg" alt="Exhibition" />
        </div>
        <h3 class="mb-3 text-uppercase">Exhibition</h3>
        <div class="bg-light p-4 d-flex align-items-center">
          <p>In this section, the curatorial team has selected the most representative images from 60 participating institutions and 6 artists from around the world to create an exhibition 'in hand' - <b>a taster of the different 'water worlds' exhibited by museums</b> affiliated to WAMU-NET. This selection is now available to all partners to illustrate <b>the diversity and similarity of humankind's connections with water and its heritage</b>. Images have been selected through a democratic process which involved all curators in intensive discussions to ensure that all pictures conveyed universal water memories.</p>
          <div class="mx-4">
            <a href="/category/Exhibition" class="d-inline-block btn btn-secondary my-3 text-uppercase">VIEW</a>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col mx-auto py-3">
        <h3 class="my-3 text-uppercase">Categories</h3>
        <p>In all, we received around 600 images and the curatorial team selected 462 from these to show vibrant and historical relationships with the most fundamental element of life. From water as the elixir of Life to recreation, Play and education; from water Heritage to our Spiritual and sacred connections with water; from water shaping our proximity and Belonging to a river, or a place, to the radical Transformations of waterscapes witnessed in the last century or so - each category was selected by an individual curator after hours of inspiring collective discussions.</p>
      </div>
    </div>

    <div class="row">
      <div class="category-tabs col py-3">
        <ul id="category-tabs" class="nav nav-tabs nav-fill" role="tablist">
          <li v-for="(category, index) in categories" :key="category.Priority" class="nav-item" role="presentation">
            <button :class="{ 'nav-link': true, active: index == 0 }" data-bs-toggle="tab" :data-bs-target="`#${category.Category}-tab`" type="button" role="tab" aria-controls="#" aria-selected="true">
              <img :src="`/images/icon_${category.Category.toLowerCase()}.svg`" :alt="category.Category" />
              <div>{{ category.Category }}</div>
            </button>
          </li>
        </ul>
        <div id="category-tabs-content" class="tab-content my-2 bg-light p-3">
          <div v-for="(category, index) in categories" :id="`${category.Category}-tab`" :key="category.Priority" :class="{ 'tab-pane': true, 'show active': index == 0 }" role="tabpanel" :aria-labelledby="`${category.Category}-tab`">
            <div class="d-flex flex-fill">
              <div>{{ category.short_text }}</div>
              <div class="mx-4">
                <a :href="`/category/${category.Category}`" class="d-inline-block btn btn-secondary my-3 text-uppercase">VIEW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, inject } from "@vue/runtime-core";

export default {
  name: "HomePage",
  setup() {
    const store = inject("store");
    let categories = computed(() => store.state.categories);

    return {
      categories,
    };
  },
};
</script>
