<template>
  <div class="layout">
    <NavBar />
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<style>
:root {
  --topnav-bg-color: #1f3b5f;
  --topnav-item-hover: #2c5a80;
  --topnav-item-active: #3d7db3;

  --primary-color: #121e2b;
  --secondary-color: #243b55;
  --accent-color: #a4c8e1;
  --text-color: #f0f5fa;
}
</style>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.content {
  flex: 1;
  margin-top: 60px; /* Ensures it's not hidden under the navbar */
  width: 100%;
  padding: 30px;
  background-color: #121e2b;
}
</style>

<script setup>
import NavBar from "@/components/NavBar/NavBar.vue";
import logo from "@/assets/logo_kd.jpg";
</script>
