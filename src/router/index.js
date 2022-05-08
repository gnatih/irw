import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage";
import StoryPage from "../views/StoryPage";
import CategoryPage from "../views/CategoryPage";
import ExhibitionPage from "../views/ExhibitionPage";
import ExhibitionDetailPage from "../views/ExhibitionDetailPage";
import TermsPage from "../views/TermsPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/exhibition",
    name: "exhibition",
    component: ExhibitionPage,
  },
  {
    path: "/exhibition/:id",
    name: "exhibition-detail",
    component: ExhibitionDetailPage,
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
  {
    path: "/terms-and-conditions",
    name: "terms",
    component: TermsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
