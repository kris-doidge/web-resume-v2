<template>
  <div class="navbar">
    <n-tabs default-value="oasis" justify-content="space-evenly" type="line">
      <n-tab name="Home" tab="Home" />
      <n-tab name="Resume" tab="Resume" />
      <n-tab name="About Me" tab="About Me" />
    </n-tabs>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;
  width: 100%;
  height: 60px;
}
</style>

<script setup>
import { NTabs, NTab, NTabPane } from "naive-ui";
</script>
