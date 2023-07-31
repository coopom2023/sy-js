<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted, shallowRef, toRefs } from 'vue'
import { SSmapQtLoader } from '@sy-js/components'
import type { SSmapType } from '@sy-js/components'
import type { MapSSmapsProps, MapSSmapEmits } from './index'
import { compPrefix } from '../../config'

defineOptions({ name: `${compPrefix}SSmap` })

const props = defineProps<MapSSmapsProps>()
const emit = defineEmits<MapSSmapEmits>()

const { path: SSmapPath, init: defaultInit } = toRefs(props)

const container = ref<HTMLDivElement>()
const mapRef = shallowRef<SSmapType.Viewer>()

defineExpose({
  map: mapRef,
  init,
  destroy: destroyMap
})

/** 初始化 */
function init(option?: { path: string }) {
  if (!container.value) return
  const optionPath = option && option.path ? option.path : ''
  SSmapQtLoader({
    el: container.value,
    // path: '/map/ssmap',
    // 直接使用数生地图文件，需代理 https://examples.dataarche.com/sdkcode/
    path: optionPath || (SSmapPath && SSmapPath.value ? SSmapPath.value : '/sdkcode/'),
  }).then(({ canvas }) => {
    const gv = (window as any).globalViewer as SSmapType.Viewer
    mapRef.value = gv
    gv.canvasEl = canvas
    emit('load', mapRef.value)
  })
}

/** 销毁地图 */
function destroyMap() {
  const win = window as any
  if (win.Browser) {
    if (win.Browser.mainLoop) {
      win.Browser.mainLoop = {
        runner() {},
        queue: [],
        currentlyRunningMainloop: window.Infinity
      }
    }
  }
  try {
    if (win.exit) win.exit(1)
  } catch (error) {
    win.exit = undefined
  }
  win.ABORT = true
  if (win.globalViewer && win.globalViewer.quit) {
    win.globalViewer.quit()
  }
  if (win.Module) {
    if (win.Module._free) win.Module._free()
  }
  win.globalViewer = undefined
  win.GlobalViewer = undefined
  win.Module = undefined
  win.Browser = undefined
  win.calledRun = undefined
  win.initScene = undefined
  if (container.value) {
    container.value.innerHTML = ''
  }
  mapRef.value = undefined
}

// 装载
onMounted(() => {
  if (defaultInit.value !== false) {
    init()
  }
})

// 销毁
onBeforeUnmount(() => {
  destroyMap()
})
</script>

<template>
  <div class="viewer-container" ref="container"></div>
</template>

<style scoped>
.viewer-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f2f2f2;
}
</style>
