import { MapOpenlayers } from '@sy-js/components-react'
import { TK_KEY } from '../../../config'

function OpenLayers() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <MapOpenlayers tdtKey={TK_KEY}></MapOpenlayers>
    </div>
  )
}

export default OpenLayers
