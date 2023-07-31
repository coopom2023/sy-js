<script setup lang="ts">
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    default: "",
  },
});

const count = ref(0);
</script>

<template>
  <button @click="count++">{{ title }}: {{ count }}</button>
</template>

<style scoped>
button {
  color: blue;
}
</style>
