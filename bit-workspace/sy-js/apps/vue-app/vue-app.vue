<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <button @click="count++">App: {{ count }}</button>
</template>

<style scoped>
button {
  color: blue;
}
</style>
