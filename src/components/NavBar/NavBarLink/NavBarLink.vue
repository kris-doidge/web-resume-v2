<template>
  <router-link :to="to" class="link" :class="{ active: isActiveRoute }">
    <slot />
  </router-link>
</template>

<style scoped>
.link {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;

  color: var(--text-color);
  text-decoration: none;
}
.link:hover {
  background-color: var(--topnav-item-hover);
}
.link.active {
  background-color: var(--topnav-item-active);
}
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  to: String,
});

const route = useRoute();
const isActiveRoute = computed(() => route.path === props.to);
</script>
