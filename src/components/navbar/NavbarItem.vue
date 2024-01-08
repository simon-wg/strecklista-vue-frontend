<script lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  props: {
    to: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return {
      isActive
    }
  }
}

</script>

<template>
  <RouterLink :to=to class="link" :class="{ active: isActive }">
    <div class="icon">
      <i :class="icon"></i>
    </div>
    <div class="label">
      {{ label }}
    </div>
  </RouterLink>
</template>

<style scoped>
.link {
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 600;
  user-select: none;

  margin: 0 0.2em;
  padding: 0.4em;
  border-radius: 1em;
  aspect-ratio: 3/2;

  color: var(--color-text);
  text-decoration: none;
}
.link:hover {
  background-color: var(--color-background-soft);
}
.link.active {
  color: var(--color-secondary);
}

</style>