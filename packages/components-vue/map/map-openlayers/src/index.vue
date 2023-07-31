<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted, shallowRef, toRefs } from 'vue'
import Map from 'ol/Map.js'
import XYZ from 'ol/source/XYZ.js'
import TileLayer from 'ol/layer/Tile.js'
import View from 'ol/View.js'
import * as Control from 'ol/control.js'
import { TDT_DataServer } from '@sy-js/constants'
import type { MapOpenLayersProps, MapOpenLayersEmits } from './index'
import { compPrefix } from '../../config'

defineOptions({ name: `${compPrefix}OpenLayers` })

const props = defineProps<MapOpenLayersProps>()
const emit = defineEmits<MapOpenLayersEmits>()

const { tdtKey, tdtServer } = toRefs(props)

const container = ref<HTMLDivElement>()
const mapRef = shallowRef<Map>()

defineExpose({
  map: mapRef
})

/** 初始化 */
function init() {
  const prefix = tdtServer && tdtServer.value ? tdtServer.value : ''
  // 底图图层
  const imgwLayer = new TileLayer({
    // source: new OSM(),
    source: new XYZ({
      url: prefix + TDT_DataServer.img_w + tdtKey.value
    })
  })
  // 文字图层
  const ciawLayer = new TileLayer({
    source: new XYZ({
      url: prefix + TDT_DataServer.cia_w + tdtKey.value
    })
  })

  mapRef.value = new Map({
    layers: [imgwLayer, ciawLayer],
    target: container.value,
    view: new View({
      // projection: 'EPSG:3857',
      center: [0, 0],
      // center: [34.4091796875, 109.6435546875],
      zoom: 2
    }),
    controls: Control.defaults({
      zoom: true,
      rotate: false,
      attribution: false,
    })
  })
  emit('load', mapRef.value)
}

// 装载
onMounted(() => {
  init()
})

// 销毁
onBeforeUnmount(() => {
  if (mapRef.value) {
    mapRef.value.dispose()
  }
  mapRef.value = undefined
})
</script>

<template>
  <div class="ol" ref="container"></div>
</template>

<style scoped>
.ol {
  width: 100%;
  height: 100%;
}
</style>
