<template>
  <div class="icon-card">
    <i :class="`${icon} colored footer-language`"> </i>
    <span>{{ text }}</span>
  </div>
</template>

<style scoped>
.icon-card {
  display: flex;
  flex-direction: column; /* Stack icon above text */
  align-items: center; /* Center content horizontally */
  justify-content: center; /* Center content vertically */
  width: 100px; /* Set a fixed or max width */
  height: 120px; /* Define the height of the card */
  text-align: center; /* Ensure text is centered */
  border: 1px solid var(--accent-color);
  border-radius: 5px;
}

.icon-card i {
  flex-grow: 1; /* Make the icon take up most of the space */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem; /* Adjust size dynamically */
  width: 100%; /* Ensure it fills the container */
  height: 80%; /* Allow the icon to take most of the space */
}

.icon-card span {
  display: block; /* Ensure text stays below */
  font-size: 1rem;
}
</style>

<script setup lang="ts">
const props = defineProps<{
  icon: string;
  text: string;
}>();
</script>
