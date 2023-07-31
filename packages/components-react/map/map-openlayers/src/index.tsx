import { useEffect, useRef } from 'react'
import Map from 'ol/Map.js'
import XYZ from 'ol/source/XYZ.js'
import TileLayer from 'ol/layer/Tile.js'
import View from 'ol/View.js'
import * as Control from 'ol/control.js'
import { TDT_DataServer } from '@sy-js/constants'
import 'leaflet'

export type MapOpenlayersProps = {
  /** 天地图服务key */
  tdtKey: string;
  /**
   * 天地图服务器地址，默认本地，需开启代理
   * @example
   * '/DataServer': {
   *   target: 'http://t0.tianditu.gov.cn',
   *   changeOrigin: true,
   * }
   */
  tdtServer?: string;
}

export function MapOpenlayers(props: MapOpenlayersProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<Map>()

  useEffect(() => {
    if (mapRef.current || !divRef.current) return
    const prefix = props.tdtServer && props.tdtServer ? props.tdtServer : ''
    // 底图图层
    const imgwLayer = new TileLayer({
      // source: new OSM(),
      source: new XYZ({
        url: prefix + TDT_DataServer.img_w + props.tdtKey
      })
    })
    // 文字图层
    const ciawLayer = new TileLayer({
      source: new XYZ({
        url: prefix + TDT_DataServer.cia_w + props.tdtKey
      })
    })

    mapRef.current = new Map({
      layers: [imgwLayer, ciawLayer],
      target: divRef.current,
      view: new View({
        // projection: 'EPSG:3857',
        center: [0, 0],
        // center: [34.4091796875, 109.6435546875],
        zoom: 2
      }),
      controls: Control.defaults({
        zoom: true,
        rotate: false,
        attribution: false,
      })
    })
  }, [])
  return (
    <div className="openlayers" style={{ width: '100%', height: '100%' }} ref={divRef}></div>
  )
}

export default MapOpenlayers
