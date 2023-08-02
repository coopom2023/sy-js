import { useEffect, useRef } from 'react'
// import * as mapv from 'mapv'

export type MapMapvProps = {
  /** ak */
  ak?: string;
  /**
   * 成功回调
   * @param map 地图实例
   */
  load?(map: any): void;
}

export function MapMapv(props: MapMapvProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>()

  useEffect(() => {
    const { BMap } = window as any
    if (!BMap) return
    // window.BMap = mapv
    if (mapRef.current || !divRef.current) return
    // 百度地图API功能, 创建Map实例
    mapRef.current = new BMap.Map(divRef.current, {
      enableMapClick: false
    })
    // 初始化地图,设置中心点坐标和地图级别
    mapRef.current.centerAndZoom(new BMap.Point(105.403119, 38.028658), 5)
    // 开启鼠标滚轮缩放
    mapRef.current.enableScrollWheelZoom(true)
    if (props && props.load) props.load(mapRef.current)
  }, [])
  return (
    <div className="mapv" style={{ width: '100%', height: '100%' }} ref={divRef}></div>
  )
}

export default MapMapv
