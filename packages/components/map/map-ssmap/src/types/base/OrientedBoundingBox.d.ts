import type { Ellipsoid } from '../globe/Ellipsoid'
import type { AxisAlignedBoundingBox } from './AxisAlignedBoundingBox'
import type { Cartesian3 } from './Cartesian3'
import type { Matrix3 } from './Matrix3'
import type { Matrix4 } from './Matrix4'
import type { Rectangle } from './Rectangle'
import type { Vector3 } from './Vector3'

/**
 * 方向包围盒OBB，不同于AxisAlignedBoundingBox（AABB）,OrientedBoundingBox是可旋转的，而不会改变它的大小形状
 * @example
 * let center = SSmap.Vector3.create(x, y, z);
 * let halfAxes = SSmap.Matrix3.create( column0Row0,column1Row0,column2Row0,
 * column0Row1,column1Row1,column2Row1,
 * column0Row2,column1Row2,column2Row2);
 * let plane = SSmap.OrientedBoundingBox.create(center,halfAxes);
 */
export class OrientedBoundingBox {
  /** 中心坐标 */
  center: Vector3
  /** 半轴 */
  halfAxes: Matrix3

  /** 半轴矩阵的第一行数据 */
  dirU(): Vector3;
  /** 半轴矩阵的第二行数据 */
  dirV(): Vector3;
  /** 半轴矩阵的第三行数据 */
  dirW(): Vector3;
  /** 大小 */
  size(): Vector3;
  /** 矩阵 */
  matrix(): Matrix4;
  /** 坐标范围 */
  rectangle(): Rectangle;
  /** 轴对齐包围盒AABB */
  localAABB(): AxisAlignedBoundingBox;
  /**
   * 到cartesian坐标的距离
   * @param cartesian cartesian坐标
   */
  distanceTo(cartesian: Vector3): number;
  /**
   * 到cartesian坐标的距离的平方
   * @param cartesian cartesian坐标
   */
  distanceSquaredTo(cartesian: Vector3): number;
  /**
   * 静态方法，通过坐标范围构造OrientedBoundingBox，直接SSmap.OrientedBoundingBox.fromRectangle(rectangle, minimumHeight, maximumHeight, ellipsoid)进行调用
   * @param rectangle 坐标范围
   * @param minimumHeight 高度最小值
   * @param maximumHeight 高度最大值
   * @param ellipsoid 椭球体
   */
  static fromRectangle(rectangle: Rectangle, minimumHeight: number, maximumHeight: number, ellipsoid: Ellipsoid): OrientedBoundingBox;
  /**
   * 静态方法，通过轴对齐包围盒AABB构造OrientedBoundingBox，直接SSmap.OrientedBoundingBox.fromCartesianAABB(cartesian, box)进行调用
   * @param cartesian cartesian坐标
   * @param box 轴对齐包围盒AABB
   */
  static fromCartesianAABB(cartesian: Cartesian3, box: AxisAlignedBoundingBox): OrientedBoundingBox;
  /**
   * 静态方法，创建OrientedBoundingBox，直接SSmap.OrientedBoundingBox.create(center,halfAxes)进行调用
   * @param center 中心点
   * @param halfAxes 半轴矩阵
   */
  static create(center: Vector3, halfAxes: Matrix3): OrientedBoundingBox;
}
