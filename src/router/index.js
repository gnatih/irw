import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage";
import StoryPage from "../views/StoryPage";
import CategoryPage from "../views/CategoryPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/category/:slug",
    name: "category",
    component: CategoryPage,
  },
  {
    path: "/story/:sid",
    name: "story",
    component: StoryPage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
