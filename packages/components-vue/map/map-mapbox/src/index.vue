<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted, shallowRef, toRefs } from 'vue'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
// import 'mapbox-gl'
import type { AnyLayer, Sources } from 'mapbox-gl'
import { TDT_DataServer } from '@sy-js/constants'
import type { MapMapBoxProps, MapMapBoxEmits } from './index'
import { compPrefix } from '../../config'

defineOptions({ name: `${compPrefix}Mapbox` })

const props = defineProps<MapMapBoxProps>()
const emit = defineEmits<MapMapBoxEmits>()

const { accessToken, tdtKey, tdtServer } = toRefs(props)

const container = ref<HTMLDivElement>()
const mapRef = shallowRef<mapboxgl.Map>()

defineExpose({
  map: mapRef
})

/** 初始化 */
function init() {
  let gl: typeof mapboxgl
  if (typeof mapboxgl === 'undefined') {
    gl = window.mapboxgl    
  } else {
    gl = mapboxgl
  }
  // const gl = window.mapboxgl
  if (!container.value || !gl) return
  const prefix = tdtServer && tdtServer.value ? tdtServer.value : ''
  gl.accessToken = accessToken.value
  const sources: Sources = {
    'osm-tiles1': {
      type: 'raster',
      tiles: [prefix + TDT_DataServer.img_w + tdtKey.value],
      tileSize: 256,
    },
    'osm-tiles2': {
      type: 'raster',
      tiles: [prefix + TDT_DataServer.cia_w + tdtKey.value],
      tileSize: 256,
    }
  }
  const layers: AnyLayer[] = [
    {
      id: 'tiles1',
      type: 'raster',
      source: 'osm-tiles1',
    },
    {
      id: 'tiles2',
      type: 'raster',
      source: 'osm-tiles2'
    }
  ]
  mapRef.value = new gl.Map({
    container: container.value,
    // style: 'mapbox://styles/mapbox/streets-v12',
    style: {
      version: 8,
      sources: sources,
      layers: layers,
    },
    center: [109.6435546875, 34.4091796875],
    zoom: 3,
    attributionControl: false,
    customAttribution: ''
  })
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
  <div class="mapbox" ref="container"></div>
</template>

<style scoped>
.mapbox {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
