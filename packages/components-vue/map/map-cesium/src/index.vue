<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, shallowRef, toRefs } from 'vue'
import { Cartesian3, Math as CesiumMath, UrlTemplateImageryProvider, Viewer, WebMapTileServiceImageryProvider } from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { TDT_DataServer, TDT_DataServer_Domain, TDT_WMTS_Domain, TDT_WMTS_Server } from '@sy-js/constants'
import type { MapCesiumProps, MapCesiumEmits } from './index'
import { compPrefix } from '../../config'

defineOptions({ name: `${compPrefix}Cesium` })

const props = defineProps<MapCesiumProps>()
const emit = defineEmits<MapCesiumEmits>()

let method = 1
const { tdtKey, tdtServer, flyToSZ } = toRefs(props)

const container = ref<HTMLDivElement>()
const mapRef = shallowRef<Viewer>()

defineExpose({ map: mapRef })

/** 初始化 */
async function init() {
  if (!container.value) return
  const mapOption: Viewer.ConstructorOptions = {
    baseLayer: false,
    baseLayerPicker: false,
    infoBox: false,
    fullscreenButton: false,
    vrButton: false,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    selectionIndicator: false,
    timeline: false,
    navigationHelpButton: false,
    navigationInstructionsInitiallyVisible: false,
    animation: false,
    creditContainer: document.createElement('div'),
  }
  const subdomains = ['0', '1', '2', '3', '4', '5', '6', '7']
  mapRef.value = new Viewer(container.value, mapOption)
  if (method === 0) {
    // 方式一：wmts
    const tdtDomain = tdtServer && tdtServer.value != undefined ? tdtServer.value : TDT_WMTS_Domain
    mapRef.value.imageryLayers.addImageryProvider(new WebMapTileServiceImageryProvider({
      url: tdtDomain + TDT_WMTS_Server.img_w + tdtKey.value,
      subdomains,
      layer: 'tdtimgwLayer',
      style: 'default',
      format: 'image/jpeg',
      tileMatrixSetID: 'GoogleMapsCompatible',
    }))
    mapRef.value.imageryLayers.addImageryProvider(new WebMapTileServiceImageryProvider({
      url: tdtDomain + TDT_WMTS_Server.cia_w + tdtKey.value,
      subdomains,
      layer: 'tdtciawLayer',
      style: 'default',
      format: 'image/jpeg',
      tileMatrixSetID: 'GoogleMapsCompatible',
    }))
  } else if (method === 1) {
    // 方式二：urltemplate
    const tdtDomain = tdtServer && tdtServer.value != undefined ? tdtServer.value : TDT_DataServer_Domain
    mapRef.value.imageryLayers.addImageryProvider(new UrlTemplateImageryProvider({
      url: tdtDomain + TDT_DataServer.img_w + tdtKey.value,
      subdomains,
    }))
    mapRef.value.imageryLayers.addImageryProvider(new UrlTemplateImageryProvider({
      url: tdtDomain + TDT_DataServer.cia_w + tdtKey.value,
      subdomains,
    }))
  }
  mapRef.value.scene.debugShowFramesPerSecond = false
  mapRef.value.scene.globe.depthTestAgainstTerrain = true
  // 镜头初始化到中国
  mapRef.value.camera.setView({
    destination: Cartesian3.fromDegrees(114.16204062321083, 22.54733270773508, 24793627.19698344),
  })
  if (mapRef.value) emit('load', mapRef.value)
  if (flyToSZ && flyToSZ.value) {
    setTimeout(() => {
      // 飞至深圳
      if (!mapRef.value) return
      mapRef.value.camera.flyTo({
        destination: Cartesian3.fromDegrees(114.16204062321083, 22.54733270773508, 137588.19747614875),
        orientation: {
          heading: CesiumMath.toRadians(14.57819001382442),
          pitch: CesiumMath.toRadians(-89.5),
        },
        duration: 3
      })
    }, 2000)
  }
}

// 装载
onMounted(() => init())

// 销毁
onBeforeUnmount(() => {
  if (mapRef.value) {
    mapRef.value.destroy()
  }
  mapRef.value = undefined
})
</script>

<template>
  <div class="cesium" ref="container"></div>
</template>

<style scoped>
.cesium {
  width: 100%;
  height: 100%;
}
</style>
