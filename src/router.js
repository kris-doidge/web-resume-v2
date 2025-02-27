import { createRouter, createWebHistory } from "vue-router";
import Profile from "./components/Profile/Profile.vue";
import Home from "./components/Home/Home.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      meta: { layout: DefaultLayout },
    },
    {
      path: "/profile",
      component: Profile,
      meta: { layout: DefaultLayout },
    },
  ],
});
