<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, shallowRef, toRefs } from 'vue'
import 'leaflet'
import 'leaflet/dist/leaflet.css'
import { TDT_DataServer } from '@sy-js/constants'
import type { MapLeafletProps, MapLeafletEmits } from './index'
import { compPrefix } from '../../config'

defineOptions({ name: `${compPrefix}Leaflet` })

const props = defineProps<MapLeafletProps>()
const emit = defineEmits<MapLeafletEmits>()

const { tdtKey, tdtServer } = toRefs(props)

const container = ref<HTMLDivElement>()
const mapRef = shallowRef<L.Map>()

defineExpose({
  map: mapRef
})

/** 初始化 */
function init() {
  if (!container.value) return
  mapRef.value = window.L.map(container.value, {
    minZoom: 3,
    maxZoom: 20,
    center: [34.4091796875, 109.6435546875],
    zoom: 3,
    zoomControl: false,
    attributionControl: false,
    crs: window.L.CRS.EPSG4326
  })
  const prefix = tdtServer && tdtServer.value ? tdtServer.value : ''
  // 影像底图
  window.L.tileLayer(prefix + TDT_DataServer.img_c + tdtKey.value, {
    maxZoom: 20,
    tileSize: 256,
    zoomOffset: 1,
  }).addTo(mapRef.value)
  // 文字图层
  window.L.tileLayer(prefix + TDT_DataServer.cia_c + tdtKey.value, {
    maxZoom: 20,
    tileSize: 256,
    zoomOffset: 1,
  }).addTo(mapRef.value)
  if (mapRef.value) emit('load', mapRef.value)
}

// 装载
onMounted(() => {
  init()
})

// 销毁
onBeforeUnmount(() => {
  if (mapRef.value) {
    mapRef.value.remove()
  }
  mapRef.value = undefined
})
</script>

<template>
  <div class="leaflet" ref="container"></div>
</template>

<style scoped>
.leaflet {
  width: 100%;
  height: 100%;
}
</style>
