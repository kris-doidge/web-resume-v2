<template>
  <div class="job-card">
    <!--    <div class="job-card-header">-->
    <!--      <span>{{ title }} - {{ company }}</span>-->
    <!--      <span style="font-style: italic">{{ dates }}</span>-->
    <!--    </div>-->
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
        <!--        <i-->
        <!--          v-for="(language, index) in languages || []"-->
        <!--          :key="index"-->
        <!--          :class="`${programmingLanguages[language]} colored footer-language`"-->
        <!--        >-->
        <!--        </i>-->
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
  box-shadow: 0px 4px 8px rgba(164, 200, 225, 0.6); /* Light accent glow */
  border: 2px solid var(--accent-color);
}
.chip-tool {
  color: var(--secondary-color);
  background-color: var(--accent-color);
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
  tools?: Array<String>;
  current?: boolean;
}>();

const showCard = ref(false);

const programmingLanguages = computed(() => {
  return {
    ts: { text: "Typescript", icon: "devicon-typescript-plain" },
    js: { text: "Javascript", icon: "devicon-javascript-plain" },
    vue2: { text: "Vue2", icon: "devicon-vuejs-plain" },
    vue3: { text: "Vue3", icon: "devicon-vuejs-plain" },
    html: { text: "HTML", icon: "devicon-html5-plain" },
    css: { text: "CSS", icon: "devicon-css3-plain" },
    sass: { text: "SASS", icon: "devicon-sass-original" },
    java: { text: "Java", icon: "devicon-java-plain" },
    python: { text: "Python", icon: "devicon-python-plain" },
    c: { text: "C", icon: "devicon-c-plain" },
    node: { text: "Node.js", icon: "devicon-nodejs-plain" },
    nestjs: { text: "NestJs", icon: "devicon-nestjs-plain" },
    postgres: { text: "Postgresql", icon: "devicon-postgresql-plain" },
    csharp: { text: "C#", icon: "devicon-csharp-plain" },
    xunit: { text: "XUnit", icon: "devicon-xunit-plain" },
    mstest: { text: "MSTest", icon: "devicon-visualstudio-plain" },
    react: { text: "React", icon: "devicon-react-original" },
    nunit: { text: "NUnit", icon: "devicon-nunit-plain" },
    selenium: { text: "Selenium", icon: "devicon-selenium-plain" },
    sql: { text: "SQL", icon: "devicon-mysql-plain" },
  };
});

const programmingTools = computed(() => {
  return {
    git: { text: "Git", icon: "devicon-git-plain" },
    github: { text: "Github", icon: "devicon-github-plain" },
    azure: { text: "Azure", icon: "devicon-microsoftazure-plain" },
    docker: { text: "Docker", icon: "devicon-docker-plain" },
    jenkins: { text: "Jenkins", icon: "devicon-jenkins-plain" },
    vscode: { text: "VSCode", icon: "devicon-visualstudio-plain" },
    ssms: { text: "SSMS", icon: "devicon-microsoftsqlserver-plain" },
    postman: { text: "Postman", icon: "devicon-postman-plain" },
    jetbrains: { text: "JetBrains", icon: "devicon-jetbrains-plain" },
    visualstudio: { text: "VisualStudio", icon: "devicon-visualstudio-plain" },
  };
});
</script>
