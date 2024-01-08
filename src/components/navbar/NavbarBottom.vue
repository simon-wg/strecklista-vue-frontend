<script setup lang="ts">

import NavbarItem from '@/components/navbar/NavbarItem.vue'
</script>

<template>
  <div class="navbar">
    <NavbarItem label="Home" icon="fas fa-house" to="/"/>
    <NavbarItem label="Stats" icon="fas fa-chart-bar" to="/stats"/>
    <NavbarItem label="About" icon="fas fa-question" to="/about"/>

  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  transition: 0.5s ease;
  background: var(--color-background);
  height: var(--navbar-height);
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
}
</style>

<style>
:root{
  --navbar-height: 60px;
}
</style>