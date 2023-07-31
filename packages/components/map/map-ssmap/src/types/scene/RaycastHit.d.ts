import type { Vector3 } from '../base/Vector3'
import type { Material } from '../render/Material'
import type { Component } from './Component'
import type { Entity } from './Entity'

/**
 * 射线探测命中后返回的对象,与Ray一起使用，详见Scene的调用示例。
 * @example
 * var hit = new SSmap.RaycastHit();
 */
export class RaycastHit extends Component {
  /** 获取射线发出点到击中点的距离 */
  readonly distance: number
  /** 获取射线击中实体的点坐标 */
  readonly point: Vector3
  /** 获取射线的法线 */
  readonly normal: Vector3
  /** 获取击中实体的材质 */
  readonly material: Material
  /** 获取击中的实体 */
  readonly entity: Entity

  /**
   * 按照当前设置好的参数，创建六边形对象
   */
  create(): boolean;
  /**
   * 设置系统字体
   * @param fontName 字体的完整名称
   */
  setFont(fontName: string): void;
}
