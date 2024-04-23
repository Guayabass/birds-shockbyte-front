import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/LandingPage.vue";
import overviewRoutes from "../modules/Overview/routers/overviewRoutes";
import birdhouseRoutes from "../modules/Birdhouse/routers/birdhouseRoutes";

const mainRoutes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/:pathMatch(.*)*",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [...mainRoutes, ...overviewRoutes, ...birdhouseRoutes],
});

export default router;
