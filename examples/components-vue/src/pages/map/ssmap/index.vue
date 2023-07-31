<script setup lang="ts">
import { shallowRef } from 'vue'
import { MapSSmap as SSMap, SSmapUtils } from '@sy-js/components-vue'
import type { SSmapType } from '@sy-js/components-vue'

const mapRef = shallowRef<SSmapType.Viewer>()

function onLoad(viewer: SSmapType.Viewer) {
  mapRef.value = viewer
  SSmapUtils.baseAssetsUrl(viewer)
  SSmapUtils.baseAuthorize(viewer)
  setTimeout(render, 1000)
}

function render() {
  if (!mapRef.value) return
  SSmapUtils.baseArcGisImagery(mapRef.value)
  // 飞至深圳
  const shenzhenVertical: SSmapType.FlyToOption = {
    longitude: 114.16204062321083,
    latitude: 22.54733270773508,
    height: 137588.19747614875,
    duration: 3,
    heading: 14.57819001382442,
    pitch: -89.5,
    roll: 0
  }
  setTimeout(() => SSmapUtils.baseFlyTo(mapRef.value!, shenzhenVertical), 3000)
}
</script>

<template>
  <div class="container">
    <SSMap @load="onLoad" init></SSMap>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
