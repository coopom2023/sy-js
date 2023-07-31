import type { Light } from './Light'

/**
 * 三维场景中的太阳对象。
 * @example
 * let sun = GlobalViewer.scene.sun;
 */
export class Sun extends Light {
  /** 获取或者设置颜色，默认：{127,127m=,127,255} */
  color: Color
  /** 获取或者设置强度，默认：50000 */
  intensity: number
  /** 获取或者设置光环大小，默认：4 */
  haloSize: number
  /** 获取或者设置是否阴影投射，默认：true */
  castShadow: boolean
  /** 获取或者设置阴影偏差，默认：0.1 */
  shadowBias: number
}
