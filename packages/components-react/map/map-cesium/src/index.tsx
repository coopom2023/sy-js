import { useEffect, useRef } from 'react'
import { Cartesian3, Math as CesiumMath, UrlTemplateImageryProvider, Viewer, WebMapTileServiceImageryProvider } from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { TDT_DataServer, TDT_DataServer_Domain, TDT_WMTS_Domain, TDT_WMTS_Server } from '@sy-js/constants'

export type MapCesiumProps = {
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
  /** 是否飞到深圳 */
  flyToSZ?: boolean;
  /** 渲染成功回调 */
  load?(viewer: Viewer): void;
}
const method: number = 1

export function MapCesium(props: MapCesiumProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<Viewer>()

  useEffect(() => {
    if (mapRef.current || !divRef.current) return
    const mapOption: Viewer.ConstructorOptions = {
      baseLayer: false,
      baseLayerPicker: false,
      infoBox: false,
      fullscreenButton: false,
      vrButton: false,
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      selectionIndicator: false,
      timeline: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      animation: false,
      creditContainer: document.createElement('div'),
    }
      
    const subdomains = ['0', '1', '2', '3', '4', '5', '6', '7']
    mapRef.current = new Viewer(divRef.current, mapOption)
    if (method === 0) {
      // 方式一：wmts
      const tdtDomain = props.tdtServer != undefined ? props.tdtServer : TDT_WMTS_Domain
      mapRef.current.imageryLayers.addImageryProvider(new WebMapTileServiceImageryProvider({
        url: tdtDomain + TDT_WMTS_Server.img_w + props.tdtKey,
        subdomains,
        layer: 'tdtimgwLayer',
        style: 'default',
        format: 'image/jpeg',
        tileMatrixSetID: 'GoogleMapsCompatible',
      }))
      mapRef.current.imageryLayers.addImageryProvider(new WebMapTileServiceImageryProvider({
        url: tdtDomain + TDT_WMTS_Server.cia_w + props.tdtKey,
        subdomains,
        layer: 'tdtciawLayer',
        style: 'default',
        format: 'image/jpeg',
        tileMatrixSetID: 'GoogleMapsCompatible',
      }))
    } else if (method === 1) {
      // 方式二：urltemplate
      const tdtDomain = props.tdtServer != undefined ? props.tdtServer : TDT_DataServer_Domain
      mapRef.current.imageryLayers.addImageryProvider(new UrlTemplateImageryProvider({
        url: tdtDomain + TDT_DataServer.img_w + props.tdtKey,
        subdomains,
      }))
      mapRef.current.imageryLayers.addImageryProvider(new UrlTemplateImageryProvider({
        url: tdtDomain + TDT_DataServer.cia_w + props.tdtKey,
        subdomains,
      }))
    }
    mapRef.current.scene.debugShowFramesPerSecond = false
    mapRef.current.scene.globe.depthTestAgainstTerrain = true
    // 镜头初始化到中国
    mapRef.current.camera.setView({
      destination: Cartesian3.fromDegrees(114.16204062321083, 22.54733270773508, 24793627.19698344),
    })
    if (props.flyToSZ) {
      setTimeout(() => {
        // 飞至深圳
        if (!mapRef.current) return
        mapRef.current.camera.flyTo({
          destination: Cartesian3.fromDegrees(114.16204062321083, 22.54733270773508, 137588.19747614875),
          orientation: {
            heading: CesiumMath.toRadians(14.57819001382442),
            pitch: CesiumMath.toRadians(-89.5),
          },
          duration: 3
        })
      }, 2000)
    }
    if (props.load) props.load(mapRef.current)
  }, [])
  return (
    <div className="leaflet" style={{ width: '100%', height: '100%' }} ref={divRef}></div>
  )
}

export default MapCesium
