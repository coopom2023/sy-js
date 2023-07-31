import type { SSmapWindow } from '../types'

export type Label3DOption = {
  /** 坐标 */
  position: any;
  /** 文字 */
  text: string;
  /** 文字大小 */
  fontSize?: number;
  /** 字体颜色 */
  fontColor?: any;
  /** 文本粗体 */
  fontBold?: boolean;
  /** 属性名称 */
  name: string;
  /** 图标路径, url: "images/site.png" */
  url?: string,
  /** 图标宽度 */
  imageWidth?: number;
  /** 图标长度 */
  imageHeight?: number;
  /** label 整体比例 */
  scale?: number;
  /** 描边颜色 */
  strokeColor?: any;
  /** 海拔高度 */
  altitude: number;
  /** 海拔模式: OnTerrain-贴地（随瓦块更新）, Absolute-绝对高度, RelativeToTerrain-贴地(直线， 有曲面跟随), OnBuilding-贴建筑 */
  altitudeMethod: any;
  /** 背景颜色, window.SSmap.Color.fromRgb(0, 0, 0, 128), */
  background?: any;
  /** 偏移量 */
  offset: any;
  /** 显示范围区间(近距离的范围（x）,远距离的范围（y）） */
  distanceDisplayCondition: any;
  /** 缩放的距离数值Cartesian4(近距离的值（x）,近距离的缩放值（y）和远距离的值（z），远距离的缩放值（w）) */
  scaleByDistance: any;
  /** 半透明的范围, Cartesian4(近距离的值（x）,近距离的范围（y）和远距离的值（z），远距离的范围（w）) */
  translucencyByDistance: any;
  mix?: any;
}

export function label3dCreate(opt: Label3DOption) {
  const win = window as unknown as SSmapWindow
  const url = window.document.location.href
  const baseUrl = url.substring(0, url.lastIndexOf('/') + 1)
  // billboard 合集
  const label3d = new win.SSmap.Label3D()
  label3d.position = opt.position
  if (opt.text != '' && opt.text != undefined) {
    label3d.text = opt.text
  }
  label3d.fontColor = opt.fontColor || win.SSmap.Color.fromRgb(255, 255, 255, 255)
  label3d.fontSize = opt.fontSize || 72
  if (opt.url) {
    label3d.url = baseUrl + opt.url
  }
  if (opt.imageWidth) {
    label3d.imageWidth = opt.imageWidth
  }
  if (opt.imageHeight) {
    label3d.imageHeight = opt.imageHeight
  }
  if (opt.background) {
    label3d.background = opt.background
  }
  if (opt.strokeColor) {
    // 描边颜色，黑边
    label3d.strokeColor = opt.strokeColor
  }
  if (opt.altitude) {
    label3d.setAltitude(opt.altitude)
    if (opt.altitudeMethod) {
      label3d.setAltitudeMethod(opt.altitudeMethod)
    } else {
      label3d.setAltitudeMethod(win.SSmap.AltitudeMethod.OnTerrain)
    }
  } else {
    label3d.setAltitudeMethod(win.SSmap.AltitudeMethod.OnTerrain)
  }
  if (opt.offset) {
    // 偏移量
    label3d.offset = opt.offset
  }
  if (opt.scaleByDistance) {
    // 缩放比
    label3d.setScaleByDistance(opt.scaleByDistance)
  }
  if (opt.translucencyByDistance) {
    // 缩放控制透明度
    label3d.setTranslucencyByDistance(opt.translucencyByDistance)
  }
  if (opt.distanceDisplayCondition) {
    label3d.setDistanceDisplayCondition(opt.distanceDisplayCondition)
  }
  // 混合否
  if (opt.mix) {
    label3d.mix = opt.mix
  }
  label3d.scale = opt.scale == undefined ? 1.0 : opt.scale
  // 牵引线
  label3d.setLineToGround(false)
  label3d.addProperty('id', opt.name || 'label3d')
  label3d.addProperty('name', opt.name || 'label3d')
  label3d.setCollection(win.SSmap.BillboardCollection.Instance())
  // 设置到Label3D集合中
  win.SSmap.BillboardCollection.Instance().setDepthTest(true)
  return label3d
}
