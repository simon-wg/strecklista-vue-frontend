<script setup lang="ts">
const props = defineProps<{
  item : {
    id: number,
    name: string,
    description: string,
    price: number,
    image: string
  },
}>()
function onClick() {
  console.log(`ItemCard ${props.item.id} clicked`)
}

</script>

<template>
<button class="cardback" @click="onClick">
  <img draggable="false" class="image" :src="props.item.image" alt="item image" width="100" height="100">
  <span class="itemname">{{ props.item.name }}</span>
  <span class="itemprice">{{ props.item.price + " kr" }}</span>
</button>
</template>

<style scoped>
.itemname {
  font-size: 2em;
}
.itemprice {
  font-size: 2em;
  font-weight: 600;
}
.image {
  margin: auto;
}
.cardback{
  display: flex;
  flex-direction: column;

  place-content: center;
  place-items: center;

  color: var(--color-text);
  background: var(--color-primary);
  transition: 100ms ease;

  padding: 1em;
  margin: 1em;
  border-radius: 0.5em;
  border-color: var(--color-border);
  border-style: solid;
  box-shadow: 0 6px 8px 2px rgba(0, 0, 0, 0.25);
}

.cardback:active {
  filter: brightness(0.9);
  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.25);
  transform: translateY(4px);
  transition: 0s ease;
}

</style>