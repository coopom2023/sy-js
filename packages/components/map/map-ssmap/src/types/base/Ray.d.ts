import type { Vector3 } from './Vector3'

/**
 * 三维空间的射线，由一个发射点和一个方向组成，可用于拾取操作的检测计算
 * @example
 * let origin = SSmap.Vector3.create(x,y,z);
 * let direction = SSmap.Vector3.create(x,y,z);
 * let ray = SSmap.Ray.create(origin,direction);
 */
export class Ray {
  /** 起点 */
  origin: Vector3
  /** 方向 */
  direction: Vector3
  
  /**
   * 静态方法，创建Ray，直接SSmap.Ray.create(origin,direction)进行调用
   * @param origin 射线源坐标
   * @param direction 方向向量
   */
  static create(origin: Vector3, direction: Vector3): Ray;
}
