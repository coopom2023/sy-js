import type { RgbaColorRange } from '../../common/Color'

/**
 * 颜色数据类型
 * @example
 * // 半透明红色
 * let color = SSmap.Color.fromRgb(255,0,0,128);
 */
export class Color {
  /** 红色组件，0-255 */
  red: RgbaColorRange
  /** 绿色组件，0-255 */
  green: RgbaColorRange
  /** 蓝色组件，0-255 */
  blue: RgbaColorRange
  /** alpha组件，用来表示透明度，0-255 */
  alpha: RgbaColorRange
  /** 红色组件，0.0-1.0 */
  redF: number
  /** 绿色组件，0.0-1.0 */
  greenF: number
  /** 蓝色组件，0.0-1.0 */
  blueF: number
  /** alpha组件，用来表示透明度，0.0-1.0 */
  alphaF: number
  /** 红色组件，0.0-1.0 */
  r: number
  /** 绿色组件，0.0-1.0 */
  g: number
  /** 蓝色组件，0.0-1.0 */
  b: number
  /** alpha组件，用来表示透明度，0.0-1.0 */
  a: number

  /**
   * 静态方法，颜色对象的构造函数，直接SSmap.Color.fromRgb(r, g, b, a)进行调用
   * @param r 红色组件，0-255
   * @param g 绿色组件，0-255
   * @param b 蓝色组件，0-255
   * @param a 可选 alpha组件，用来表示透明度，0-255，默认值为255
   */
  static fromRgb(r: RgbaColorRange, g: RgbaColorRange, b: RgbaColorRange, a?: RgbaColorRange): Color;
  /**
   * 静态方法，颜色对象的构造函数，直接SSmap.Color.fromRgbF(r, g, b, a)
   * @param r 红色组件，0.0-1.0
   * @param g 绿色组件，0.0-1.0
   * @param b 蓝色组件，0.0-1.0
   * @param a 可选 alpha组件，用来表示透明度，0.0-1.0，默认值为1.0
   */
  static fromRgbF(r: number, g: number, b: number, a: number): Color;
}
