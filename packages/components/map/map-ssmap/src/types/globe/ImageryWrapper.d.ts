import type { Rectangle } from '../base/Rectangle'
import type { RenderLayer } from '../scene/RenderLayer'
import type { ImageryLayer } from './ImageryLayer'

/**
 * 影像图层包装基类，用于调整图层的基本属性,一般不直接调用
 */
export class ImageryWrapper extends RenderLayer {
  /** 获取或者设置影像图层的url */
  url: string
  /** 获取或者设置图像的矩形范围 */
  rectangle: Rectangle
  /** 获取或者设置是否使用Web墨卡托，如果为true使用Web墨卡托构建的地图切片方案，默认为false */
  useWebMercator: boolean
  /** 获取或者设置切片的宽度，默认为256 */
  tileWidth: number
  /** 获取或者设置切片的高度，默认为256 */
  tileHeight: number
  /** 获取或者设置最低层级，默认为0 */
  minimumLevel: number
  /** 获取或者设置最高层级，默认为21 */
  maximumLevel: number
  /** 获取或者设置是否含有阿尔法通道，默认为false */
  hasAlphaChannel: boolean
  /** 获取或者设置是否为注记图层(如天地图的注记服务)，默认为false。为true时，当前服务会一直处于影像或者电子地图的上层，不会被覆盖 */
  isLabel: boolean
  /** 获取对应的ImageryLayer对象 */
  readonlylayer: ImageryLayer
}