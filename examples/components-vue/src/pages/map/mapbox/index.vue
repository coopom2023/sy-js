<script setup lang="ts">
import { MapMapBox as Mapbox } from '@sy-js/components-vue'
import { MAPBOX_ACCESS_TOKEN, TK_KEY } from '@/config'
</script>

<template>
  <div class="container">
    <Mapbox :accessToken="MAPBOX_ACCESS_TOKEN" :tdtKey="TK_KEY"></Mapbox>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
}
</style>