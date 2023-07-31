<script setup lang="ts">
import { MapOpenLayers as OpenLayers } from '@sy-js/components-vue'
import { TK_KEY } from '@/config'
</script>

<template>
  <div class="container">
    <OpenLayers :tdtKey="TK_KEY"></OpenLayers>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
}
</style>