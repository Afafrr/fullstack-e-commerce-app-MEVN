import { createRouter, createWebHistory } from "vue-router";
import HomeMain from "../routes/HomeMain.vue";
import PhonePage from "../components/PhonePage.vue";
import NotFound from "../routes/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeMain,
  },
  {
    path: "/phones/:id",
    name: "PhonePage",
    component: PhonePage,
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
