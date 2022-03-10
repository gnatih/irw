<template>
  <div>Category</div>
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
      const stories = [];
      //   const stories = ref([]);
      _.map(values, (photo) => {
        let museum = photo.MUSEUMNAME.trim();
        if (!stories[`${museum}-${photo.CN}`]) {
          stories[`${museum}-${photo.CN}`] = [];
        }
        stories[`${museum}-${photo.CN}`].push(photo);
      });

      console.log(stories);

      //   console.log(stories.value);
    };

    load();
  },
};
</script>

<style></style>
