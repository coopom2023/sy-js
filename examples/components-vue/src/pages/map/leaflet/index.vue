<script setup lang="ts">
import { MapLeaflet as Leaflet } from '@sy-js/components-vue'
import { TK_KEY } from '@/config'
</script>

<template>
  <div class="container">
    <Leaflet :tdtKey="TK_KEY"></Leaflet>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
}
</style>
