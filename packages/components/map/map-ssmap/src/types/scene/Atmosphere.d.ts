import type { Component } from './Component'

/**
 * 三维场景中的大气对象。
 * @example
 * let atmosphere = GlobalViewer.scene.atmosphere;
 */
export class Atmosphere extends Component {
  /** 获取或者设置大气层的显隐，默认：true */
  show: boolean
  /** 获取或者设置大气层的强度,默认：8 */
  intensity: number
  /** 获取或者设置大气层的离散量，默认：1 */
  inscatterAmount: number
  /** 获取或者设置大气层的云层透明度，默认：0.5 */
  cloudOpacity: number
  /** 获取或者设置大气层的云层强度，默认：1 */
  cloudIntensity: number
}
