<template>
  <div class="job-card">
    <!--    <div class="job-card-header">-->
    <!--      <span>{{ title }} - {{ company }}</span>-->
    <!--      <span style="font-style: italic">{{ dates }}</span>-->
    <!--    </div>-->
    <div>
      <div class="job-card-header">
        <div style="font-weight: bold">
          <span>{{ company }}</span>
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
        <i
          v-for="(language, index) in languages || []"
          :key="index"
          :class="`${programmingLanguagesIcons[language]} colored footer-language`"
        >
        </i>
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
  background-color: var(--accent-color);
  border-radius: 16px;
  padding: 8px 12px;
  margin-left: 10px;
  font-size: 12px;
  font-family: Arial, sans-serif;
  color: var(--secondary-color);
}
.chip .close {
  margin-left: 8px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 16px;
  color: #666;
}
.chip .close:hover {
  color: #000;
}

.job-card-footer {
  padding: 5px 5px 5px;
  margin-bottom: 5px;
}

.footer-language {
  font-size: 32px;
  padding: 5px 5px 5px;
}
</style>

<script setup lang="ts">
import { computed, ref } from "vue";
import "devicon/devicon.min.css";

const props = defineProps<{
  title: String;
  company: String;
  location: String;
  dates: String;
  description: Array<String>;
  languages?: Array<String>;
  current?: boolean;
}>();

const showCard = ref(false);

const programmingLanguagesIcons = computed(() => {
  return {
    ts: "devicon-typescript-plain",
    js: "devicon-javascript-plain",
    vue: "devicon-vuejs-plain",
    html: "devicon-html5-plain",
    css: "devicon-css3-plain",
    sass: "devicon-sass-original",
    less: "devicon-less-plain",
    java: "devicon-java-plain",
    python: "devicon-python-plain",
    c: "devicon-c-plain",
    node: "devicon-nodejs-plain",
    nestjs: "devicon-nestjs-plain",
    docker: "devicon-docker-plain",
    postgres: "devicon-postgresql-plain",
    csharp: "devicon-csharp-plain",
    xunit: "devicon-xunit-plain",
    mstest: "devicon-visualstudio-plain",
    react: "devicon-react-original",
    nunit: "devicon-nunit-plain",
    selenium: "devicon-selenium-plain",
    sql: "devicon-mysql-plain",
    ssms: "devicon-microsoftsqlserver-plain",
    postman: "devicon-postman-plain",
  };
});
</script>
