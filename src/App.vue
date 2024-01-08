<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarBottom from '@/components/navbar/NavbarBottom.vue'
import InfoBar from '@/components/infobar/InfoBar.vue'

</script>

<template>
  <div class="wrapper">
    <InfoBar />
    <div class="content">
      <RouterView />
    </div>
    <NavbarBottom />
  </div>
</template>

<style>
body {
  background: var(--color-background-soft);
  min-height: 100vh;
}
</style>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.content {
  overflow-y: auto;
  height: calc(100vh - 2*var(--navbar-height));
  position: relative;
  margin: 0 4px;
  padding: 1em;
  width: auto;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
</style>
