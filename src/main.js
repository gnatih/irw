import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import { VueMasonryPlugin } from "vue-masonry";
import VueGtagPlugin from "vue-gtag";

import "./scss/style.scss";

// createApp(App).use(router).mount("#app");

let app = createApp(App);
app.use(VueMasonryPlugin);
app.use(
  VueGtagPlugin,
  {
    config: {
      id: "G-20YQJNJ7X8",
    },
  },
  router
);
app.use(router);
app.mount("#app");
