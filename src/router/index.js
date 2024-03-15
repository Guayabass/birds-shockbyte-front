import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/LandingPage.vue";
import overviewRoutes from "../modules/Overview/routers/overviewRoutes";

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
  routes: [...mainRoutes, ...overviewRoutes]
});

export default router;
