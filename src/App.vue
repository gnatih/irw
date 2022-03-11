<template>
  <header>
    <header-navigation :categories="categories" />
  </header>

  <router-view />
  <footer-navigation />
</template>

<script>
import HeaderNavigation from "./components/HeaderNavigation.vue";
import FooterNavigation from "./components/FooterNavigation.vue";
import loadData from "./api";

export default {
  components: { HeaderNavigation, FooterNavigation },
  setup() {
    const { categories } = loadData();
    // const sheetId = "1syfH86e54jCh2Dp6y3GwTjTWG_Vn9ubg1yH_FQe4h4s";
    // const values = ref([]);
    // const categories = computed(() => {
    //   let categories = [
    //     ..._.uniq(_.map(values.value, "C1")),
    //     ..._.uniq(_.map(values.value, "C2")),
    //     ..._.uniq(_.map(values.value, "C3")),
    //     ..._.uniq(_.map(values.value, "C4")),
    //   ];

    //   return _.compact(_.uniq(categories)).sort();
    // });

    // const load = async () => {
    //   let data = await fetch(
    //     // `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?alt=json&key=AIzaSyDRMLsE7nXHAPfpL8WavbwqdtA70geEt0o`
    //     `https://opensheet.elk.sh/${sheetId}/Sheet1`
    //   );

    //   data = await data.json();

    //   values.value = data;
    //   // data.values.shift();
    //   // values.value = data.values;
    //   // console.log(data.values);
    // };

    // load();

    // // axios
    // //   .get(
    // //     // "https://sheets.googleapis.com/v4/spreadsheets/1x8WkZ5NJk9BgOsQIz1R4jShRC7hd3KcwE-NK9C45RdM?alt=json&key=AIzaSyDRMLsE7nXHAPfpL8WavbwqdtA70geEt0o"
    // //     `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?alt=json&key=AIzaSyDRMLsE7nXHAPfpL8WavbwqdtA70geEt0o`
    // //   )
    // //   .then((res) => {
    // //     console.log(res);
    // //   });

    return {
      HeaderNavigation,
      FooterNavigation,
      categories,
      // values,
      // categories,
    };
  },
};
</script>
