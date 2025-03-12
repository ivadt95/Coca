<template>
  <header class="header">
    <div
      class="container flex flex-row flex-justify-content-space-between flex-align-items-center"
    
      style="height: 52px"
    >
      <img src="~/assets/Logo.svg" class="logo" />
      <div class="flex flex-row flex-align-items-center"
      >
        <nav class="nav flex flex-row flex-align-items-center"
        v-show="!isMobile"
        >
          <a
            v-for="(nav, index) in navItems"
            :key="index"
            class="text-body-large text-medium cursor-pointer underline-animation nav_button__margin"
          >
            {{ nav.name }}
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref,onMounted } from "vue";

interface NavItem {
  name: string;
  path: string;
}

const navItems = ref<NavItem[]>([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact Us ->", path: "/contact" },
]);
const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 425;
}
onMounted(() => {
  checkMobile();
  window.addEventListener('resize',checkMobile);
})
</script>

<style scoped>
.header {
  width: 100%;
  height: 114px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}

.nav_button__margin {
  margin-right: 32px;
}
.nav_button__margin:nth-last-child(2) {
  margin-right: 68px;
}

@media (max-width: 425px) {

}
</style>
