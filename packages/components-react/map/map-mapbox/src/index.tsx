import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import type { AnyLayer, Sources } from 'mapbox-gl'
import { TDT_DataServer } from '@sy-js/constants'

export type MapMapBoxProps = {
  /** mapbox token */
  accessToken: string;
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

export function MapMapBox(props: MapMapBoxProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<mapboxgl.Map>()

  useEffect(() => {
    if (mapRef.current || !divRef.current) return
    const prefix = props.tdtServer && props.tdtServer ? props.tdtServer : ''
    mapboxgl.accessToken = props.accessToken
    const sources: Sources = {
      'osm-tiles1': {
        type: 'raster',
        tiles: [prefix + TDT_DataServer.img_w + props.tdtKey],
        tileSize: 256,
      },
      'osm-tiles2': {
        type: 'raster',
        tiles: [prefix + TDT_DataServer.cia_w + props.tdtKey],
        tileSize: 256,
      }
    }
    const layers: AnyLayer[] = [
      {
        id: 'tiles1',
        type: 'raster',
        source: 'osm-tiles1',
      },
      {
        id: 'tiles2',
        type: 'raster',
        source: 'osm-tiles2'
      }
    ]
    mapRef.current = new mapboxgl.Map({
      container: divRef.current,
      // style: 'mapbox://styles/mapbox/streets-v12',
      style: {
        version: 8,
        sources: sources,
        layers: layers,
      },
      center: [109.6435546875, 34.4091796875],
      zoom: 3,
      attributionControl: false,
      customAttribution: ''
    })
  }, [])
  return (
    <div className="mapbox" style={{ width: '100%', height: '100%', overflow: 'hidden' }} ref={divRef}></div>
  )
}

export default MapMapBox
