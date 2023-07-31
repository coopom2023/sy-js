import { MapMapBox } from '@sy-js/components-react'
import { MAPBOX_ACCESS_TOKEN, TK_KEY } from '../../../config'

function Mapbox() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <MapMapBox accessToken={MAPBOX_ACCESS_TOKEN} tdtKey={TK_KEY}></MapMapBox>
    </div>
  )
}

export default Mapbox
