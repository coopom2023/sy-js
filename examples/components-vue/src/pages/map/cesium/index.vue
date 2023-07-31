<script setup lang="ts">
import { MapCesium } from '@sy-js/components-vue'
import { TK_KEY } from '@/config'
</script>

<template>
  <div class="container">
    <MapCesium :tdtKey="TK_KEY" flyToSZ></MapCesium>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
}
</style>
