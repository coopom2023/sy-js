import type { Rectangle } from '../base/Rectangle'
import type { ImageryProvider } from './ImageryProvider'

/** ImageryLayer代表一个影像图层，地球可以叠加多个影像图层,图层可以随时隐藏或显示 */
export class ImageryLayer {
  /** 返回影像图层所用的影像切片服务 */
  imageryProvider: ImageryProvider
  /** 获取或者设置显隐 */
  show: boolean
  /** 获取或者设置亮度 */
  brightness: number
  /** 获取或者设置对比度 */
  contrast: number
  /** 获取或者设置饱和度 */
  saturation: number
  /** 获取或者设置色调 */
  hue: number
  /** 获取或者设置伽马值 */
  gamma: number
  /** 获取或者设置透明度 */
  alpha: number
  /** 按照当前设置好的参数，创建六边形对象 */
  create(): boolean;
  /**
   * 设置系统字体
   * @param fontName 字体的完整名称
   */
  setFont(fontName: string): void;
  /**
   * 实例
   * @param provider 影像切片服务
   * @param rectangle rectangle
   */
  constructor(provider: ImageryProvider, rectangle: Rectangle)
}
