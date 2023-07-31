import type { Component } from '../scene/Component'

/**
 * 场景后期处理的对象。
 * @example
 * let PostRendering = GlobalViewer.renderSystem.postRendering();
 */
export class PostRendering extends Component {
  /** 获取或者设置饱和度，默认：1 */
  saturation: number
  /** 获取或者设置对比度，默认：1 */
  contrast: number
  /** 获取或者设置锐度，默认：0.5 */
  sharpen: number
  /** 获取或者设置曝光度，默认：1 */
  exposure: number
  /** 获取或者设置是否自动曝光，默认：false */
  autoExposure: boolean
  /** 获取或者设置亮度阈值，默认：2 */
  brightThreshold: number
  /** 获取或者设置泛光值，默认：1 */
  bloomValue: number
  /** 获取或者设置蓝光修正，默认：0.6 */
  blueCorrection: number
  /** 获取或者设置色温，默认：6500 */
  whiteTemp: number
  /** 获取或者设置色调曲线数量，默认：0.5 */
  toneCurveAmount: number

  /**
   * 设置低分辨率放大到高分辨率的倍数
   * @param upscalecount 放大倍数
   */
  setUpscaleCount(upscalecount: number): void;
}
