import { useRef } from 'react'
import { MapSSmap, SSmapUtils } from '@sy-js/components-react'
import type { SSmapType } from '@sy-js/components-react'

function SSmap() {
  const mapRef = useRef<SSmapType.Viewer>()

  const render = function () {
    if (!mapRef.current) return
    SSmapUtils.baseArcGisImagery(mapRef.current)
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
    setTimeout(() => SSmapUtils.baseFlyTo(mapRef.current!, shenzhenVertical), 3000)
  }

  const onLoad = function (viewer: SSmapType.Viewer) {
    mapRef.current = viewer
    SSmapUtils.baseAssetsUrl(viewer)
    SSmapUtils.baseAuthorize(viewer)
    setTimeout(render, 1000)
  }
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <MapSSmap load={onLoad}></MapSSmap>
    </div>
  )
}

export default SSmap
