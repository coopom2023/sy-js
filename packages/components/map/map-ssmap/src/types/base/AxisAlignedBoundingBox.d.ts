import type { Cartesian3Vector } from '../container/Cartesian3Vector'
import type { Matrix4 } from './Matrix4'
import type { Vector3 } from './Vector3'

/**
 * 轴对齐包围盒AABB
 * @example
 * let min = SSmap.Vector3.create(x, y, z);
 * let max = SSmap.Vector3.create(x, y, z);
 * let aabb = SSmap.AxisAlignedBoundingBox.create(min, max);
 */
export class AxisAlignedBoundingBox {
  /** 最小坐标点 */
  minimum: Vector3
  /** 最大坐标点 */
  maximum: Vector3
  /** 指定中心点，如果不指定，中心点会被自动计算 */
  center: Vector3

  /**
   * 轴长度
   * @param point 坐标点
   */
  extent(point: Vector3): Vector3;
  /**
   * 将四阶矩阵转换到包围球中
   * @param m 四阶矩阵
   */
  transform(m: Matrix4): void;
  /**
   * 是否包含坐标点
   * @param point 坐标点
   */
  contains(point: Vector3): boolean;
  /**
   * 静态方法，通过点数据构造AxisAlignedBoundingBox，直接SSmap.AxisAlignedBoundingBox.fromPoints(points)进行调用
   * @param point 点数据
   */
  static fromPoints(points: Cartesian3Vector): AxisAlignedBoundingBox;
  /**
   * 静态方法，创建AxisAlignedBoundingBox，直接SSmap.AxisAlignedBoundingBox.create(min,max)进行调用
   * @param min 较小的对角点坐标
   * @param max 较大的对角点坐标
   */
  static create(min: Vector3, max: Vector3): AxisAlignedBoundingBox;
}
