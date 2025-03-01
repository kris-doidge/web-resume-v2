<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="../../assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
  <footer>
    <a
      href="https://www.linkedin.com/in/kristopher-doidge-985119b5"
      target="_blank"
    >
      <n-icon><LogoLinkedin /></n-icon>
    </a>
    <a href="https://github.com/kris-doidge/" target="_blank">
      <n-icon><LogoGithub /></n-icon>
    </a>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<script setup>
import HelloWorld from "../HelloWorld.vue";
import TheWelcome from "../TheWelcome.vue";
import { NIcon } from "naive-ui";
import { LogoLinkedin, LogoGithub } from "@vicons/ionicons5";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faLinkedin, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// library.add(faLinkedin, faEnvelope);
</script>
