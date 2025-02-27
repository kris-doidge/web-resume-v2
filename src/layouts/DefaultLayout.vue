<template>
  <div class="layout">
    <NavBar class="navbar" />
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar {
  width: 100%;
  display: flex;
  justify-content: center; /* Centers the navbar items */
  align-items: center;
  height: 60px; /* Adjust as needed */
}

.content {
  flex: 1;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}
</style>

<script setup>
import NavBar from "@/components/NavBar/NavBar.vue";
</script>
