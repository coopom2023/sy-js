---
outline: deep
---

# components-react 示例

此页包含通用 react 组件的使用方法。

## 基础组件

基本的统一风格 UI 组件：

**Button**

```tsx
import { UIButton } from '@sy-js/components-react'

export default function Component() {
  return <UIButton></UIButton>
}
```

**Link**

```tsx
import { UILink } from '@sy-js/components-react'

export default function Component() {
  return <UILink></UILink>
}
```

## 地图组件

**Leaflet**

```tsx
import { MapLeaflet } from '@sy-js/components-react'

export default function Leaflet() {
  /** 天地图KEY */
  const TK_KEY = ''
  return (
    <MapLeaflet tdtKey={TK_KEY}></MapLeaflet>
  )
}
```

**MapboxGL**

```tsx
import { MapMapBox } from '@sy-js/components-react'

export default function Mapbox() {
  /** mapbox token */
  const accessToken = ''
  /** 天地图KEY */
  const TK_KEY = ''
  return (
    <MapMapBox accessToken={accessToken} tdtKey={TK_KEY}></MapMapBox>
  )
}
```

**OpenLayers**

```tsx
import { MapOpenlayers } from '@sy-js/components-react'

export default function Openlayers() {
  /** 天地图KEY */
  const TK_KEY = ''
  return (
    <MapOpenlayers tdtKey={TK_KEY}></MapOpenlayers>
  )
}
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

查看详细文档请访问 [components-react手册](#components-react示例)
