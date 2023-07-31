import type { SSmapWindow, Viewer } from '../types'

/** 加载xyz遥感影像底图 */
export function xyzAddImagery(viewer: Viewer) {
  const opt = {
    // 路径
    url: '../data/dom/ft/{z}/{x}/{y}.png',
    // url: 'https://examples.dataarche.com/data/dom/ft/{z}/{x}/{y}.png',
    // 遥感影像显示范围
    rectangle: [-180, -90, 180, 90],
    // 卡托
    useWebMercator: true,
    // 最大层级
    maximumLevel: 14,
    // 最小层级
    minimumLevel: 0,
    // 瓦片宽
    tileWidth: 256,
    // 瓦片长
    tileHeight: 256,
    // 阿尔法
    hasAlphaChannel: true,
    // 请求头需要传入key的参数
    // licensekey:""
  }
  return addXyzImagery(viewer, opt)
}

function addXyzImagery(viewer: Viewer, option: any) {
  const win = window as unknown as SSmapWindow
  const nowrectangle = option.rectangle
  const newrectangle = win.SSmap.Rectangle.fromDegrees(nowrectangle[0], nowrectangle[1], nowrectangle[2], nowrectangle[3])
  const imageryProvider = new win.SSmap.UrlTemplateImageryProvider(
    // 路径
    option.url,
    // 卡托
    option.useWebMercator,
    // 最大
    option.maximumLevel,
    // 最小
    option.minimumLevel,
    // 瓦片宽
    option.tileWidth,
    // 瓦片长
    option.tileHeight,
    // 阿尔法
    option.hasAlphaChannel
  )
  //无请求头添加的，不需要添加
  if (option.startgw) {
    imageryProvider.setUrlFunctor((x: number, y: number, level: number) => 
      `${option.url}${level - 9}/${y}/${x}?format=image%2Fpng`)
  }
  if (option.licensekey) {
    imageryProvider.setHeader('szvsud-license-key', option.licensekey)
  }
  const layer = new win.SSmap.ImageryLayer(imageryProvider, newrectangle)
  viewer.scene.globe.addImageryLayer(layer)
  return layer
}
