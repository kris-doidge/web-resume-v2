<template>
  <div class="programming-container">
    <div class="programming-card">
      <h1>Languages</h1>
      <br />
      <IconCard
        v-for="(language, index) in containsProgrammingLanguages || []"
        :key="index"
        :icon="
          programmingLanguages[language]
            ? programmingLanguages[language].icon
            : ''
        "
        :text="
          programmingLanguages[language]
            ? programmingLanguages[language].text
            : 'Missing Language'
        "
      >
      </IconCard>
    </div>
    <div class="programming-card standout">
      <h1>Frameworks</h1>
      <IconCard
        v-for="(language, index) in containsProgrammingFrameworks || []"
        :key="index"
        :icon="
          programmingFrameworks[language]
            ? programmingFrameworks[language].icon
            : ''
        "
        :text="
          programmingFrameworks[language]
            ? programmingFrameworks[language].text
            : language
        "
      >
      </IconCard>
    </div>
    <div class="programming-card standout">
      <h1>Tools</h1>
      <IconCard
        v-for="(language, index) in containsProgrammingTools || []"
        :key="index"
        :icon="
          programmingTools[language] ? programmingTools[language].icon : ''
        "
        :text="
          programmingTools[language]
            ? programmingTools[language].text
            : 'Missing Tool'
        "
      >
      </IconCard>
    </div>
  </div>
  <div>
    <JobCard
      v-for="job in jobs"
      :key="job.title"
      v-bind="job"
      :company="job.company"
      :title="job.title"
      :dates="job.dates"
      :description="job.description"
      :location="job.location"
      :tools="job.tools"
      :frameworks="job.frameworks"
      :languages="job.languages"
    />
  </div>
</template>

<style scoped>
.programming-container {
  display: flex;
  gap: 20px; /* Space between the cards */
  justify-content: center; /* Center the cards */
  flex-wrap: wrap;
  width: 100%;
}

.programming-card {
  width: 100%;
  background-color: var(--secondary-color);
  border: 1px solid var(--accent-color);
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 5px 5px 5px;
  display: flex;
  flex-wrap: wrap; /* Ensure icons wrap instead of overflowing */
  gap: 10px; /* Space between icons */
  justify-content: center; /* Center icons inside the card */
  max-width: 30%; /* Set a max width for wrapping */
}

.standout {
  background-color: var(--accent-color);
  color: var(--primary-color);
  font-weight: bold;
}

.footer-language {
  font-size: 64px;
  padding: 5px 5px 5px;
}

@media (max-width: 768px) {
  .programming-container {
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items when stacked */
    gap: 10px; /* Reduce gap for better spacing */
  }

  .programming-card {
    max-width: 90%; /* Allow cards to scale down */
    padding: 15px;
  }
}
</style>

<script setup lang="ts">
import { computed } from "vue";
import JobCard from "@/components/Resume/JobCard/JobCard.vue";
import IconCard from "@/components/@base/IconCard.vue";
import {
  programmingFrameworks,
  programmingLanguages,
  programmingTools,
} from "@/utils/constants";

const jobs = computed(() => {
  return [
    {
      company: "Marxsmith LLC",
      location: "Tampa, FL",
      title: "Full Stack Developer",
      dates: "April 2021 - Present",
      description: [
        "Took part in the design and implementation of a new modular, component-driven frontend with Vue 3 for a dynamic and responsive user experience.",
        "Developed a robust backend API with NestJS, leveraging Prisma for efficient database access and PostgreSQL for data storage.",
        "Integrated third-party APIs to unify multiple external tools into a single platform, enabling seamless data synchronization and improved workflow efficiency.",
        "Contributed to the expansion and maintenance of an existing application built with JavaScript, Vue 2, Node.js, and PostgreSQL, adding and enhancing functionality, optimizing performance, and resolving technical debt.",
      ],
      languages: ["ts", "js"],
      frameworks: ["vue3", "vue2", "postgres", "nestjs", "node", "prisma"],
      tools: ["git", "docker", "postman", "jetbrains", "azuredevops"],
      current: true,
    },
    {
      company: "InComm Inc",
      location: "St Petersburg, FL",
      title: "QA Engineer II",
      dates: "December 2019 - April 2021",
      description: [
        "Designed and implemented xUnit functional test solutions for .NET Core Web APIs, establishing reliable automated testing frameworks.",
        "Maintained and enhanced the existing Selenium test suite, improving stability and reducing flaky test failures.",
        "Optimized automated test execution, reducing runtime from over 2 hours to just 20-30 minutes by refining test logic, parallelizing execution, and optimizing database interactions.",
        "Implemented functional tests on legacy .NET applications using MSTest v1 and v2, modernizing test strategies for existing systems.",
        "Collaborated closely with developers to identify and resolve defects early in the development lifecycle, improving software quality and deployment efficiency.",
      ],
      languages: ["csharp", "js", "sql"],
      frameworks: ["xunit", "mstest", "nunit", "selenium", "react", "dotnet"],
      tools: ["postman", "git", "visualstudio", "azuredevops"],
    },
    {
      company: "Deloitte & Touche",
      location: "Tampa, FL",
      title: "Quality Analyst - Team Lead",
      dates: "August 2018 - September 2019",
      description: [
        "QA representative for project’s UAT - responsible for troubleshooting defects and being the liaison between the business and QA Team",
        "Create Postman collections to automate smoke tests",
        "Utilizing SSMS to validate the integrity of the data in the database",
        "Provide insight on architectural design based on knowledge of where and how what data was displayed/manipulated",
        "Create and implement testing strategies to maximize team member efficiency and throughput",
        "On-board and train team members on how to utilize back-end testing tools",
      ],
      languages: ["sql", "csharp"],
      frameworks: ["react", "dotnet"],
      tools: ["postman", "ssms", "azuredevops", "visualstudio"],
    },
    {
      company: "AgileThought",
      location: "Tampa, FL",
      title: "Jr. Information Technology Associate",
      dates: "August 2017 - August 2018",
      description: [
        "Responsible for troubleshooting and debugging front-end and back-end work",
        "Facilitated defect triaging meetings with development team",
        "Strategically tested software using Swagger and Postman",
      ],
      languages: ["sql", "csharp"],
      frameworks: ["react", "dotnet"],
      tools: ["postman", "ssms", "azuredevops", "visualstudio"],
    },
  ];
});

const containsProgrammingTools = computed(() => {
  return [...new Set(jobs.value.flatMap((job) => job.tools))];
});

const containsProgrammingLanguages = computed(() => {
  return [...new Set(jobs.value.flatMap((job) => job.languages))];
});

const containsProgrammingFrameworks = computed(() => {
  return [...new Set(jobs.value.flatMap((job) => job.frameworks))];
});
</script>
