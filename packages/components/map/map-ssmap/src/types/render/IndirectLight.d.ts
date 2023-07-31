import type { Light } from '../scene/Light'

/**
 * 三维场景中的环境光对象。
 * @example
 * let indirectLight = GlobalViewer.scene.indirectLight;
 */
export class IndirectLight extends Light {
  /** 获取或者设置强度，默认：30000 */
  intensity: number
  /** 获取或者设置漫反射强度，默认：1 */
  diffuseIntensity: number
  /** 获取或者设置高光强度，默认：1 */
  specularIntensity: number
  /** 获取或者设置角度,0-360，默认：120 */
  rotation: number
}
