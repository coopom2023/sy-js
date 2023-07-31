import type { SSmapWindow, Viewer } from '../types'

const wmtsImageryUrl = 'https://t1.tianditu.gov.cn/DataServer?T=img_c&x={x}&y={y}&l={z}&tk=789e558be762ff832392a0393fd8a4f1'
const markUrl = 'https://t0.tianditu.gov.cn/DataServer?T=cva_c&x={x}&y={y}&l={z}&tk=908473bdfa3948e977f13f7e6364132f'

/** 加载天地图底图 */
export function tiandituLoad(viewer: Viewer) {
  const win = window as unknown as SSmapWindow
  viewer.scene.globe.lightingEnabled = true
  const layer = new win.SSmap.TiandituImageryLayer()
  layer.url = wmtsImageryUrl
  // 使用卡托否
  layer.useWebMercator = false
  // 瓦片宽度
  layer.tileWidth = 256
  // 瓦片长度
  layer.tileHeight = 256
  // 最小层级
  layer.minimumLevel = 1
  // 最大层级
  layer.maximumLevel = 17
  // 使用阿尔法否
  layer.hasAlphaChannel = false
  // 标签否 用于影像和标记一起使用时，影像的isLabel设置为false,标记的isLabel设置为true
  layer.isLabel = false
  // 创建
  layer.componentComplete()
  return layer
}

/** 天地图注记 */
export function tiandituMarkLoad() {
  const win = window as unknown as SSmapWindow
  const tianditu = new win.SSmap.TiandituImageryLayer()
  tianditu.url = markUrl
  tianditu.useWebMercator = false
  tianditu.tileWidth = 256
  tianditu.tileHeight = 256
  tianditu.minimumLevel = 1
  tianditu.maximumLevel = 17
  tianditu.hasAlphaChannel = true
  tianditu.isLabel = true
  tianditu.componentComplete()
  return tianditu
}
