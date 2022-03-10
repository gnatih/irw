<template>
  <h2>{{ category }}</h2>

  <div>
    <div v-for="story in stories" :key="story.ID">
      {{ story.AUTHORS }}
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import _ from "lodash";
import { ref } from "@vue/reactivity";

export default {
  setup() {
    const sheetId = "1syfH86e54jCh2Dp6y3GwTjTWG_Vn9ubg1yH_FQe4h4s";
    const route = useRoute();
    const refs = ref([]);
    const stories = ref([]);
    let category = route.params.slug;

    const load = async () => {
      let data = await fetch(
        // `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?alt=json&key=AIzaSyDRMLsE7nXHAPfpL8WavbwqdtA70geEt0o`
        `https://opensheet.elk.sh/${sheetId}/Sheet1`
      );

      let values = await data.json();

      refs.value = _.filter(values, (val) => {
        return (
          val.C1 == category ||
          val.C1 == category ||
          val.C3 == category ||
          val.C4 == category
        );
      });

      //   const stories = _.groupBy(refs.value, "MUSEUMNAME");
      const museum_people = [];
      //   const museum_people = ref([]);
      _.map(values, (photo) => {
        let museum = photo["MUSEUM CODE"].trim();
        if (!museum_people[`${museum}-${photo.CN}`]) {
          museum_people[`${museum}-${photo.CN}`] = [];
        }
        museum_people[`${museum}-${photo.CN}`].push(photo);
      });

      for (const museum_person in museum_people) {
        let story_groups = _.groupBy(museum_people[museum_person], "STORY");

        for (const story in story_groups) {
          stories.value.push(story_groups[story][0]);
        }
      }
    };

    load();

    return { category, stories };
  },
};
</script>

<style></style>
