import { createRouter, createWebHistory } from "vue-router";
import Resume from "./components/Resume/Resume.vue";
import AboutMe from "@/components/AboutMe/AboutMe.vue";
import Home from "./components/Home/Home.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const routes = [
  {
    // TODO: Need to figure out why my routing is broken and get 404s.
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
];

const router = createRouter({ history: createWebHistory(), routes });

// Redirect non-existent routes to the homepage
router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next("/");
  } else {
    next();
  }
});

export default router;
