import { reactive } from "vue";
import first from "lodash/first";
import map from "lodash/map";
import sortBy from "lodash/sortBy";
import { groupBy } from "lodash";

const state = reactive({
  data: [],
  stories: [],
  categories: [],
  category: null,
});

const methods = {
  async loadData() {
    const sheetId = "1grkdfQVI6GV-_cJuJQPdDpv9b_5IuS3nDvZPw5ehqzM";
    const service = "https://opensheet.elk.sh";
    const url = new URL(window.location);
    const reload = url.searchParams.get("refresh") == "";
    const storage = localStorage.getItem("irw-storage");

    if (!storage || reload) {
      console.log("..fetch data");
      console.log(`${service}/${sheetId}/Entries`);

      const stories_data = await fetch(`${service}/${sheetId}/Entries`).then((r) => r.json());
      const exhibition_data = await fetch(`${service}/${sheetId}/Exhibition`).then((r) => r.json());
      const categories = await fetch(`${service}/${sheetId}/Categories`).then((r) => r.json());

      for (const key in stories_data) {
        const name = stories_data[key]["UNIVOCALCODE"];
        stories_data[key].image = {
          thumb: `/images/thumbs/${name}`,
          large: `/images/large/${name}`,
        };
      }

      const stories_groups = groupBy(stories_data, "STORYID");
      const stories = map(stories_groups, (story) => first(story));

      state.data = stories_data;
      state.stories = stories;
      state.categories = sortBy(categories, "Priority");

      localStorage.setItem(
        "irw-storage",
        JSON.stringify({
          data: stories_data,
          stories,
          categories,
          exhibition: exhibition_data,
        })
      );
    } else {
      console.log("..local data");
      const data = JSON.parse(storage);
      state.data = data.data;
      state.categories = sortBy(data.categories, "Title");
      state.stories = data.stories;
      state.exhibition = data.exhibition;
    }
  },
};

export default {
  state,
  methods,
};
