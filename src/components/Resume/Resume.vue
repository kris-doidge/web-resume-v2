<template>
  <JobCard
    v-for="job in jobs"
    :key="job.title"
    v-bind="job"
    :company="job.company"
    :title="job.title"
    :dates="job.dates"
    :description="job.description"
    :location="job.location"
  />
</template>

<style scoped></style>

<script setup lang="ts">
import { computed } from "vue";
import JobCard from "@/components/Resume/JobCard/JobCard.vue";

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
      languages: ["ts", "js", "nestjs", "postgres", "vue", "docker"],
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
      languages: ["csharp", "selenium", "mstest", "react"],
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
      languages: ["postman", "sql", "ssms", "react", "csharp"],
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
      languages: ["postman", "sql", "ssms", "react", "csharp"],
    },
  ];
});
</script>
