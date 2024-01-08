<template>
  <div class="infobar">
    <div class="title">
      <h1>Store</h1>
    </div>
    <div class="group">
      <h1>P.R.I.T.</h1>
    </div>
    <div class="saldo">
      <h1>2000kr</h1>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.infobar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  place-items: center;

  transition: 0.5s ease;
  background: var(--color-background);
  height: var(--navbar-height);
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
}

</style>