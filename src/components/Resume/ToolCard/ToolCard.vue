<template>
  <div class="tool-card">
    <p class="tool-card-title">{{ props.title }}</p>
    <br />
    <div class="tool-card-content">
      <IconCard
        v-for="(item, index) in items || []"
        :key="index"
        :icon="itemsByType[item] ? itemsByType[item].icon : ''"
        :text="itemsByType[item] ? itemsByType[item].text : 'Missing Language'"
      >
      </IconCard>
    </div>
  </div>
</template>

<style scoped>
.tool-card {
  width: 100%;
  background-color: var(--secondary-color);
  border: 1px solid var(--accent-color);
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 15px 5px 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap; /* Ensure icons wrap instead of overflowing */
  max-width: 30%; /* Set a max width for wrapping */
}

.tool-card-title {
  text-align: center;
  font-size: 1.5em;
  color: var(--text-color);
  font-weight: bold;
  text-decoration: underline;
}

.tool-card-content {
  display: flex;
  flex-wrap: wrap; /* Allows wrapping */
  gap: 10px; /* Optional: adds spacing between items */
  justify-content: center; /* Aligns items in the center */
}

@media (max-width: 768px) {
  .tool-card {
    max-width: 90%; /* Allow cards to scale down */
    padding: 15px;
  }
}
</style>

<script setup lang="ts">
import {
  programmingFrameworks,
  programmingLanguages,
  programmingTools,
} from "@/utils/constants";
import IconCard from "@/components/@base/IconCard.vue";
import { computed } from "vue";

const props = defineProps<{
  title: String;
  items: Array<any>;
  type: "programmingLanguages" | "programmingTools" | "programmingFrameworks";
}>();

const itemsByType = computed(() => {
  if (props.type === "programmingLanguages") {
    return programmingLanguages;
  } else if (props.type === "programmingTools") {
    return programmingTools;
  } else {
    return programmingFrameworks;
  }
});
</script>
