import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ContactPage from "../views/ContactPage";
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
    path: "/story/:slug",
    name: "story",
    component: StoryPage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
