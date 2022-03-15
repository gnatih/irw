import { reactive } from "vue";
import { scale } from "@cloudinary/url-gen/actions/resize";
import first from "lodash/first";
import map from "lodash/map";
import sortBy from "lodash/sortBy";
import groupBy from "lodash/groupBy";
import { Cloudinary } from "@cloudinary/url-gen";

const state = reactive({
  data: [],
  stories: [],
  categories: [],
  category: null,
});

const methods = {
  async loadData() {
    const sheetId = "1syfH86e54jCh2Dp6y3GwTjTWG_Vn9ubg1yH_FQe4h4s";
    const service = "https://opensheet.elk.sh";
    const url = new URL(window.location);
    const reload = url.searchParams.get("refresh") == "";
    const storage = localStorage.getItem("irw-storage");

    if (!storage || reload) {
      console.log("..fetch data");
      const cld = new Cloudinary({
        cloud: {
          cloudName: "merasite",
        },
        url: {
          secure: true,
        },
      });

      const stories_data = await fetch(`${service}/${sheetId}/Entries`).then(
        (r) => r.json()
      );

      const categories = await fetch(`${service}/${sheetId}/Categories`).then(
        (r) => r.json()
      );

      for (const key in stories_data) {
        const name = stories_data[key]["UNIVOCAL CODE"].replace(/[ ]+/g, "_");
        await fetch(
          `https://res.cloudinary.com/merasite/image/upload/fl_getinfo/IRW/${name}`
        )
          .then((r) => {
            if (r.ok) {
              return r.json();
            }
          })
          .then((result) => {
            if (result) {
              stories_data[key].image = {
                thumb: cld
                  .image(`IRW/${name}`)
                  .resize(scale().width(600))
                  .format("jpg")
                  .toURL(),
                large: cld.image(`IRW/${name}`).format("jpg").toURL(),
                width: result.input.width,
                height: result.input.height,
              };
            }
          });
      }

      const stories_groups = groupBy(stories_data, "ID");
      const stories = map(stories_groups, (story) => first(story));

      state.data = stories_data;
      state.stories = stories;
      state.categories = sortBy(categories, "Title");

      localStorage.setItem(
        "irw-storage",
        JSON.stringify({
          data: stories_data,
          stories,
          categories,
        })
      );
    } else {
      console.log("..local data");
      const data = JSON.parse(storage);
      state.data = data.data;
      state.categories = sortBy(data.categories, "Title");
      state.stories = data.stories;
    }
  },
};

export default {
  state,
  methods,
};
