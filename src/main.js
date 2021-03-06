import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import { VueMasonryPlugin } from "vue-masonry";
import VueGtag from "vue-gtag-next";

import "./scss/style.scss";

// createApp(App).use(router).mount("#app");

let app = createApp(App);
app.use(VueMasonryPlugin);
app.use(
  VueGtag,
  {
    property: {
      id: "G-20YQJNJ7X8",
    },
  },
  router
);
app.use(router);
app.mount("#app");
