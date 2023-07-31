import { MapLeaflet } from '@sy-js/components-react'
import { TK_KEY } from '../../../config'

function Leaflet() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <MapLeaflet tdtKey={TK_KEY}></MapLeaflet>
    </div>
  )
}

export default Leaflet
