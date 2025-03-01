<template>
  <div class="job-card">
    <div class="job-card-header">
      <span style="font-weight: bold">{{ company }}</span>
      <span style="font-style: italic">{{ dates }}</span>
    </div>
    <div class="job-card-subheader">
      <span style="padding-right: 5px">{{ title }},</span>
      <span>{{ location }}</span>
    </div>
    <div class="job-card-body">
      <ul>
        <li v-for="desc in description" :key="desc">
          {{ desc }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.job-card {
  width: 100%;
  background-color: var(--secondary-color);
  border: 1px solid var(--accent-color);
  border-radius: 10px;
  margin-bottom: 10px;
}
.job-card-header {
  color: var(--text-color);
  padding: 10px 10px 0;
  display: flex;
  justify-content: space-between; /* Pushes items to opposite sides */
  align-items: center; /* Ensures vertical alignment */
  width: 100%; /* Ensures it spans the full width of the parent */
}
.job-card-subheader {
  color: var(--text-color);
  padding: 0 10px 0;
  justify-content: space-around; /* Pushes items to opposite sides */
}
.job-card-body {
  color: var(--text-color);
  padding: 10px;
}
</style>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  title: String;
  company: String;
  location: String;
  dates: String;
  description: Array<String>;
}>();

const showCardBody = ref(false);
</script>
