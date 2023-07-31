import { MapCesium } from '@sy-js/components-react'
import { TK_KEY } from '../../../config'

function Cesium() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <MapCesium tdtKey={TK_KEY} flyToSZ></MapCesium>
    </div>
  )
}

export default Cesium
