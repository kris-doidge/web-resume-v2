<template>
  <div>
    <div class="navbar">
      <NavBarLink to="home" :icon="LogoLinkedin.name">Home</NavBarLink>
      <NavBarLink to="resume" :icon="LogoLinkedin.name">Resume</NavBarLink>
      <NavBarLink to="about-me" :icon="LogoLinkedin.name">About Me</NavBarLink>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  color: white;
  background-color: var(--topnav-bg-color);

  position: fixed; /* Keeps it fixed at the top */
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px; /* Adjust based on your navbar size */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensures it stays above content */
}
</style>

<script setup>
import { NTabs, NTab, NTabPane } from "naive-ui";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import NavBarLink from "@/components/NavBar/NavBarLink/NavBarLink.vue";
import { LogoLinkedin, LogoGithub } from "@vicons/ionicons5";

const route = useRoute();
const router = useRouter();

const activeTab = ref(route.name);

const updateTab = (name) => {
  console.log("test");
  router.push({ name });
};
</script>
