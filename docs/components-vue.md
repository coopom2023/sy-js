---
layout: components-vue
lang: zh-CN


---

# components-vue示例

此页包含通用 vue 组件的使用方法。

## 基础组件

基本的统一风格 UI 组件：

**Button**

```vue
<script setup lang="ts">
import { UIButton } from '@sy-js/components-vue'
</script>

<template>
  <UIButton></UIButton>
</template>
```

**Link**

```vue
<script setup lang="ts">
import { UILink } from '@sy-js/components-vue'
</script>

<template>
  <UILink></UILink>
</template>
```

## 地图组件

**Leaflet**

```vue
<script setup lang="ts">
import { MapLeaflet as Leaflet } from '@sy-js/components-vue'

/** 天地图KEY */
const TK_KEY = ''
</script>

<template>
  <Leaflet :tdtKey="TK_KEY"></Leaflet>
</template>
```

**MapboxGL**

```vue
<script setup lang="ts">
import { MapMapBox as Mapbox } from '@sy-js/components-vue'

/** mapbox token */
const accessToken = ''
/** 天地图KEY */
const TK_KEY = ''
</script>

<template>
  <Mapbox :accessToken="accessToken" :tdtKey="TK_KEY"></Mapbox>
</template>
```

**OpenLayers**

```vue
<script setup lang="ts">
import { MapOpenLayers as OpenLayers } from '@sy-js/components-vue'

/** 天地图KEY */
const TK_KEY = ''
</script>

<template>
  <OpenLayers :tdtKey="TK_KEY"></OpenLayers>
</template>
```

**SSmap**

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'
import { MapSSmap as SSMap, SSmapUtils } from '@sy-js/components-vue'
import type { SSmapType } from '@sy-js/components-vue'

const mapRef = shallowRef<SSmapType.Viewer>()

function onLoad(viewer: SSmapType.Viewer) {
  mapRef.value = viewer
  // 加载shaders
  SSmapUtils.baseAssetsUrl(viewer)
  // 认证
  SSmapUtils.baseAuthorize(viewer)
  // 底图
  SSmapUtils.baseArcGisImagery(viewer)
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
  setTimeout(() => SSmapUtils.baseFlyTo(viewer, shenzhenVertical), 3000)
}
</script>

<template>
  <SSMap @load="onLoad" init></SSMap>
</template>
```

## 更多

查看详细文档请访问 [components-vue手册](#components-vue示例)
