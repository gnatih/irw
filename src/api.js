import { uniq, map, first, compact, chain, isEmpty } from "lodash";
import { ref } from "vue";

const fetchData = async () => {
  const sheetId = "1syfH86e54jCh2Dp6y3GwTjTWG_Vn9ubg1yH_FQe4h4s";
  const res = await fetch(`https://opensheet.elk.sh/${sheetId}/Sheet1`);
  return await res.json();
};

const createCategories = function (data) {
  let terms = [
    ...uniq(map(data, "C1")),
    ...uniq(map(data, "C2")),
    ...uniq(map(data, "C3")),
    ...uniq(map(data, "C4")),
  ];

  const categories = compact(uniq(terms)).sort();
  return categories;
};

const createStories = function (data) {
  let stories = chain(data)
    .groupBy((item) => `${item["MUSEUM CODE"]}--${item.CN}--${item.STORY}`)
    .value();

  return map(stories, (story) => first(story));
};

export default function loadData() {
  const storage = localStorage.getItem("irw-storage");
  const url = new URL(window.location);
  const categories = ref([]);
  const stories = ref([]);
  let data = [];
  let reload = url.searchParams.get("refresh") == "";

  if (!storage || reload || isEmpty(storage)) {
    console.log("fetching data");
    (async () => {
      data = await fetchData();
      localStorage.setItem("irw-storage", JSON.stringify(data));
      categories.value = createCategories(data);
      stories.value = createStories(data);
    })();
  } else {
    console.log("local data");
    data = JSON.parse(storage);
    categories.value = createCategories(data);
    stories.value = createStories(data);
  }

  return {
    data,
    categories,
    stories,
  };
}
