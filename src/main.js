import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import { VueMasonryPlugin } from "vue-masonry";

import "./scss/style.scss";

// createApp(App).use(router).mount("#app");

let app = createApp(App);
app.use(VueMasonryPlugin);
app.use(router);
app.mount("#app");
