<template>
  <div class="container main">
    <h2 class="page-title">{{ category }}</h2>

    <div class="row row-cols g-2">
      <div v-for="story in filtered_stories" :key="story.ID" class="col-4">
        {{ story["UNIVOCAL CODE"] }}
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import loadData from "../api";
import filter from "lodash/filter";
import { computed } from "@vue/runtime-core";

export default {
  setup() {
    const { stories } = loadData();
    const route = useRoute();
    const category = computed(() => route.params.slug);

    // const filtered_stories = _.filter(
    //   stories.value,
    //   (item) =>
    //     item.C1 == category ||
    //     item.C2 == category ||
    //     item.C3 == category ||
    //     item.C4 == category
    // );

    const filtered_stories = computed(() =>
      filter(
        stories.value,
        (story) =>
          story.C1 == category.value ||
          story.C2 == category.value ||
          story.C3 == category.value ||
          story.C4 == category.value
      )
    );
    // const sheetId = "1syfH86e54jCh2Dp6y3GwTjTWG_Vn9ubg1yH_FQe4h4s";
    // const refs = ref([]);
    // const stories = ref([]);
    // const route = useRoute();
    // const category = route.params.slug;
    // const load = async () => {
    //   let data = await fetch(
    //     // `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?alt=json&key=AIzaSyDRMLsE7nXHAPfpL8WavbwqdtA70geEt0o`
    //     `https://opensheet.elk.sh/${sheetId}/Sheet1`
    //   );
    //   let values = await data.json();
    //   refs.value = _.filter(values, (val) => {
    //     return (
    //       val.C1 == category ||
    //       val.C1 == category ||
    //       val.C3 == category ||
    //       val.C4 == category
    //     );
    //   });
    //   //   const stories = _.groupBy(refs.value, "MUSEUMNAME");
    //   const museum_people = [];
    //   //   const museum_people = ref([]);
    //   _.map(values, (photo) => {
    //     let museum = photo["MUSEUM CODE"].trim();
    //     if (!museum_people[`${museum}-${photo.CN}`]) {
    //       museum_people[`${museum}-${photo.CN}`] = [];
    //     }
    //     museum_people[`${museum}-${photo.CN}`].push(photo);
    //   });
    //   for (const museum_person in museum_people) {
    //     let story_groups = _.groupBy(museum_people[museum_person], "STORY");
    //     for (const story in story_groups) {
    //       stories.value.push(story_groups[story][0]);
    //     }
    //   }
    // };
    return { category, filtered_stories };
  },
};
</script>

<style></style>
