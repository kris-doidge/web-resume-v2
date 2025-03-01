import { createRouter, createWebHistory } from "vue-router";
import Resume from "./components/Resume/Resume.vue";
import AboutMe from "@/components/AboutMe/AboutMe.vue";
import Home from "./components/Home/Home.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: Home,
      meta: { layout: DefaultLayout },
    },
    {
      name: "aboutMe",
      path: "/about-me",
      component: AboutMe,
      meta: { layout: DefaultLayout },
    },
    {
      name: "resume",
      path: "/resume",
      component: Resume,
      meta: { layout: DefaultLayout },
    },
  ],
});
