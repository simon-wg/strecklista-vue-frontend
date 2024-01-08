<template>
  <div class="grid-container">
    <ItemCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import ItemCard from '@/components/itemcard/ItemCard.vue'

function getIntegers(num: number): number[]{
  let integers: number[] = []
  for (let i = 0; i < num; i++) {
    integers.push(Math.floor(Math.random() * 100))
  }
  return integers
}
const images = getIntegers(20).map((image: number) => {
  return {
    id: image,
    image: "https://picsum.photos/seed/" + image + "/300/300"
  }
})
// Create items from images
const items = images.map((image: any) => {
  return {
    id: image.id,
    name: "Item " + image.id,
    description: "This is item " + image.id,
    price: Math.floor(Math.random() * 1000),
    image: image.image
  }
})

</script>

<style scoped>
.grid-container{
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(150px, 0.5fr));
  grid-template-rows: auto;
  bottom: 1em;
}
@media (min-width: 768px) {
  .grid-container{
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

</style>