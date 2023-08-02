<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, shallowRef } from 'vue'
import type { MapMapvProps, MapMapvEmits } from './index'
import { compPrefix } from '../../config'

defineOptions({ name: `${compPrefix}Mapv` })

const props = defineProps<MapMapvProps>()
const emit = defineEmits<MapMapvEmits>()

const container = ref<HTMLDivElement>()
const mapRef = shallowRef<any>()

defineExpose({
  map: mapRef
})

/** 初始化 */
function init() {
  const { BMap } = window as any
  if (!container.value || !BMap) return
    // window.BMap = mapv
    if (mapRef.value || !container.value) return
    // 百度地图API功能, 创建Map实例
    mapRef.value = new BMap.Map(container.value, {
      enableMapClick: false
    })
    // 初始化地图,设置中心点坐标和地图级别
    mapRef.value.centerAndZoom(new BMap.Point(105.403119, 38.028658), 5)
    // 开启鼠标滚轮缩放
    mapRef.value.enableScrollWheelZoom(true)
  if (mapRef.value) emit('load', mapRef.value)
}

// 装载
onMounted(() => {
  init()
})

// 销毁
onBeforeUnmount(() => {
  if (mapRef.value && mapRef.value.remove) {
    mapRef.value.remove()
  }
  mapRef.value = undefined
})
</script>

<template>
  <div class="mapv" ref="container"></div>
</template>

<style scoped>
.mapv {
  width: 100%;
  height: 100%;
}
</style>
