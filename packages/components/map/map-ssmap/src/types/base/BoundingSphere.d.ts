import type { Cartesian3Vector } from '../container/Cartesian3Vector'
import type { AxisAlignedBoundingBox } from './AxisAlignedBoundingBox'
import type { Matrix4 } from './Matrix4'
import type { OrientedBoundingBox } from './OrientedBoundingBox'
import type { Vector3 } from './Vector3'

/**
 * BoundingSphere定义了三维坐标空间的包围球,可用与摄像机视锥快速裁切计算
 * @example
 * let center = SSmap.Vector3.create(x,y,z);
 * let radius = 50;
 * let bs =SSmap.BoundingSphere.create(center,radius);
 */
export class BoundingSphere {
  /** 中心坐标 */
  center: Vector3
  /** 半径 */
  radius: number

  /**
   * 是否包含另一个BoundingSphere
   * @param other 另一个包围球
   */
  contains(other: BoundingSphere): boolean;
  /**
   * 合并另一个BoundingSphere
   * @param other 另一个包围球
   */
  merge(other: BoundingSphere): void;
  /**
   * 扩大到包含一个点
   * @param point 点位坐标
   */
  expand(point: Vector3): void;
  /**
   * 将四阶矩阵转换到包围球中
   * @param matrix 四阶矩阵
   */
  transform(matrix: Matrix4): void;
  /**
   * 计算到平面间隔
   * @param position 位置坐标
   */
  distanceTo(position: Vector3): number;
  /**
   * 静态方法，通过方向包围盒OBB构造BoundingSphere，直接SSmap.BoundingSphere.fromOrientedBoundingBox(orientedBoundingBox)进行调用
   * @param orientedBoundingBox 方向包围盒OBB
   */
  static fromOrientedBoundingBox(orientedBoundingBox: OrientedBoundingBox): BoundingSphere;
  /**
   * 静态方法，通过轴对齐包围盒AABB构造BoundingSphere，直接SSmap.BoundingSphere.fromAxisAlignedBoundingBox(aabb)进行调用
   * @param aabb 轴对齐包围盒AABB
   */
  static fromAxisAlignedBoundingBox(aabb: AxisAlignedBoundingBox): BoundingSphere;
  /**
   * 静态方法，通过点数据构造BoundingSphere，直接SSmap.BoundingSphere.fromPoints(points)进行调用
   * @param points 	点数据
   */
  static fromPoints(points: Cartesian3Vector): BoundingSphere;
  /**
   * 静态方法，创建BoundingSphere，直接SSmap.BoundingSphere.create(center,radius)进行调用
   * @param center 中心坐标
   * @param radius 半径
   */
  static create(center: Vector3, radius: number): BoundingSphere;
}
