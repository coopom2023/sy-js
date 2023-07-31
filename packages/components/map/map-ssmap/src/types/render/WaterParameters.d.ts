import type { Node } from '../base/Node'

/**
 * 材质中的水体参数控制对象。
 */
export class WaterParameters extends Node {
  /** 获取或者设置水体颜色 */
  waterColor: Color
  /** 获取或者设置水体颜色系数 */
  waterColorFactor: number
  /** 获取或者设置水体反射颜色 */
  specularColor: Color
  /** 获取或者设置水体反射颜色系数 */
  specularFactor: number
  /** 获取或者设置反射凹凸比例 */
  reflectionBumpScale: number
  /** 获取或者设置折射凹凸比例 */
  refractionBumpScale: number
  /** 获取或者设置凹凸平铺数量 */
  bumpTilling: number
  /** 获取或者设置凹凸细节平铺数量 */
  bumpDetailTilling: number
  /** 获取或者设置法线比例 */
  normalsScale: number
  /** 获取或者设置细节法线比例 */
  detailNormalsScale: number
  /** 获取或者设置水体泡沫软相交系数 */
  foamSoftIntersectionFactor: number
  /** 获取或者设置水体泡沫数量 */
  foamAmount: number
  /** 获取或者设置水体泡沫纹理平铺数量 */
  foamTilling: number
  /** 获取或者设置水体软相交系数 */
  softIntersectionFactor: number
  /** 获取或者设置菲涅尔光泽度 */
  fresnelGloss: number
  /** 获取或者设置折射 */
  refraction: number
  /** 获取或者设置波浪角度 */
  flowAngle: number
  /** 获取或者设置波浪速度 */
  flowSpeed: number
}
