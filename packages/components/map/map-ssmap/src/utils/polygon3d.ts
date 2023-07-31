import type { SSmapWindow } from '../types'

export type Polygon3DOption = {
  /** 坐标点 */
  pointArr: any[];
  /** 透明度 */
  alpha?: number;
  /** 边界颜色 */
  borColor: any;
  /** 边界宽度 */
  width?: number;
  /** 填充透明度 */
  fillAlpha?: number;
  /** 填充颜色 */
  fillcolor: any;
  /** 海拔高度模式 */
  altitude: any;
  /** 海拔值 */
  altitudeval?: number;
  /** 名称 */
  name: string;
  /** id */
  id: string;
  /** 水纹理 */
  showwater?: boolean;
  /** 高光 */
  highlight?: string;
  /** 纹理图片地址 */
  imgurl?: string;
  /** 纹理重复次数 */
  imgrepeat?: number;
}

/**
 * 创建面
 * @param opt 
 * @returns 
 */
export function polygon3DCreate(opt: Polygon3DOption) {
  const win = window as unknown as SSmapWindow
  const url = window.document.location.href
  const baseUrl = url.substring(0, url.lastIndexOf('/') + 1)
  const polygon3d = new win.SSmap.Polygon3D()
  if (opt.borColor) {
    // 边界颜色
    polygon3d.color = opt.borColor
    // 边界宽度
    polygon3d.setWidth(opt.width == undefined ? 2 : opt.width)
    // alpha透明度不能设置为1.0 //边界透明度
    polygon3d.alpha = opt.alpha == undefined || opt.alpha >= 1 ? 0.99 : opt.alpha || 0.99
  }
  if (opt.fillcolor) {
    // 填充透明度
    polygon3d.fillAlpha = opt.fillAlpha == undefined || opt.fillAlpha >= 1 ? 0.99 : opt.fillAlpha || 0.99
    // 填充颜色，颜色，
    polygon3d.setFillColor(opt.fillcolor)
  }
  opt.pointArr.forEach((item: any) => {
    // 面坐标
    polygon3d.addPoint(item)
  })
  // 海拔高度模式
  polygon3d.setAltitudeMethod(opt.altitude)

  if (opt.altitude.value == 0) {
    // 海拔模式为贴地时 使用
    // 默认的贴地模式有效. TerrainOnly: 覆盖地面 WholeScene: 覆盖范围内的所有场景
    polygon3d.setSceneMode(
      win.SSmap.TextureProjectionSceneMode.TerrainOnly
    )
  } else if (opt.altitude.value == 1) {
    polygon3d.setAltitude(opt.altitudeval || 100)
    // 纹理只有绝对高度模式 生效
    if (opt.imgurl) {
      // 设置填充方式 NoFill, FillColor, FillImage
      polygon3d.fillMode = win.SSmap.FillMode.FillImage
      // 使用纹理贴图
      polygon3d.image = baseUrl + opt.imgurl
      // polygon3d.setRepeat(opt.imgrepeat, opt.imgrepeat);
      if (opt.imgrepeat !== undefined) {
        polygon3d.textureScale = win.SSmap.Vector2.create(opt.imgrepeat, opt.imgrepeat)
      }
    }
    // 水纹理 贴图纹理和水纹理同时存在 水纹理优先
    if (opt.showwater) {
      polygon3d.waterShader = opt.showwater
    }
  }
  polygon3d.addProperty('name', opt.name)
  polygon3d.addProperty('多边形', '多边形属性测试')
  polygon3d.addProperty('id', opt.id)
  polygon3d.draw()
  polygon3d.end()
  return polygon3d
}

