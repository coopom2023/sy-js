/**
 * 三维空间平面，表达了三维空间中一个无限大的平面，由一个三维点和一个方向矢量组成
 * @example
 * let normal = SSmap.Vector3.create(x, y, z);
 * let distance = 2000;
 * let plane = SSmap.Plane.create(normal, distance);
 */
export class Plane {
  /** 法线 */
  normal: Vector3
  /** 方向 */
  distance: Vector3

  /**
   * 静态方法，创建Plane，直接SSmap.Plane.create(normal,distance)进行调用
   * @param normal 法线
   * @param distance 距离
   */
  static create(normal: Vector3, distance: number): Plane;
}
