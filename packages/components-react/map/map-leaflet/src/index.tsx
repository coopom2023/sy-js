import { useEffect, useRef } from 'react'
import { TDT_DataServer } from '@sy-js/constants'
import 'leaflet'
import 'leaflet/dist/leaflet.css'

export type MapLeafletProps = {
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

export function MapLeaflet(props: MapLeafletProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map>()

  useEffect(() => {

    if (mapRef.current || !divRef.current) return
    const prefix = props.tdtServer && props.tdtServer ? props.tdtServer : ''
    mapRef.current = window.L.map(divRef.current, {
      minZoom: 3,
      maxZoom: 20,
      center: [34.4091796875, 109.6435546875],
      zoom: 3,
      zoomControl: false,
      attributionControl: false,
      crs: window.L.CRS.EPSG4326
    })
    // 影像底图
    window.L.tileLayer(prefix + TDT_DataServer.img_c + props.tdtKey, {
      maxZoom: 20,
      tileSize: 256,
      zoomOffset: 1,
    }).addTo(mapRef.current)
    // 文字图层
    window.L.tileLayer(prefix + TDT_DataServer.cia_c + props.tdtKey, {
      maxZoom: 20,
      tileSize: 256,
      zoomOffset: 1,
    }).addTo(mapRef.current)
  }, [])
  return (
    <div className="leaflet" style={{ width: '100%', height: '100%' }} ref={divRef}></div>
  )
}

export default MapLeaflet
