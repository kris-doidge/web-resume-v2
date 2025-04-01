<template>
  <div class="job-card">
    <div>
      <div class="job-card-header">
        <div>
          <span style="font-weight: bold">{{ company }}</span>
          <div v-if="current" class="chip">Current</div>
        </div>
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
      <div class="job-card-footer">
        <div>
          <i
            v-for="(language, index) in languages || []"
            :key="index"
            class="chip chip-language"
          >
            {{
              (programmingLanguages[language] &&
                programmingLanguages[language].text) ||
              "Missing Language"
            }}
          </i>
        </div>
        <div style="padding-top: 5px">
          <i
            v-for="(framework, index) in frameworks || []"
            :key="index"
            class="chip chip-tool"
          >
            {{
              (programmingFrameworks[framework] &&
                programmingFrameworks[framework].text) ||
              "Missing Language"
            }}
          </i>
        </div>
        <div style="padding-top: 5px">
          <i
            v-for="(tool, index) in tools || []"
            :key="index"
            class="chip chip-tool"
          >
            {{
              (programmingTools[tool] && programmingTools[tool].text) ||
              "Missing Language"
            }}
          </i>
        </div>
      </div>
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

.chip {
  display: inline-flex;
  align-items: center;
  border-radius: 16px;
  padding: 8px 12px;
  margin-left: 10px;
  font-size: 14px;
  font-family: Arial, sans-serif;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.chip-language {
  color: var(--secondary-color);
  background-color: var(--highlight-color);
  box-shadow: 0 4px 8px rgba(164, 200, 225, 0.6); /* Light accent glow */
  border: 2px solid var(--accent-color);
}
.chip-tool {
  color: var(--secondary-color);
  background-color: var(--accent-color);
}
.chip {
  margin-left: 8px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 16px;
  color: #666;
}
.chip :hover {
  color: #000;
}

.job-card-footer {
  padding: 5px 5px 5px;
  margin-bottom: 5px;
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import "devicon/devicon.min.css";
import {
  programmingTools,
  programmingLanguages,
  programmingFrameworks,
} from "@/utils/constants";

const props = defineProps<{
  title: String;
  company: String;
  location: String;
  dates: String;
  description: Array<String>;
  languages?: Array<String>;
  frameworks?: Array<String>;
  tools?: Array<String>;
  current?: boolean;
}>();

const showCard = ref(false);
</script>
