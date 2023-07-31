import type { Cartesian3 } from './Cartesian3'
import type { Cartographic } from './Cartographic'
import type { OrientedBoundingBox } from './OrientedBoundingBox'

/**
 * BoundingRegion定义了三维球面坐标的空间范围
 * @example
 * let rectangle = SSmap.Rectangle.create(w, s, e, n);
 * let minHeight = 10;
 * let maxHeight = 500;
 * let br =SSmap.BoundingRegion.create(rectangle, minHeight, maxHeight);
 */
export class BoundingRegion {
  /** 坐标范围 */
  rectangle: Rectangle
  /** 高度最小值 */
  minimumHeight: number
  /** 高度最大值 */
  maximumHeight: number

  /**
   * 是否包含坐标点
   * @param cartographic 坐标点
   */
  contains(cartographic: Cartographic): boolean;
  /**
   * 合并另一个空间范围
   * @param o 另一个空间范围
   */
  combine(o: BoundingRegion): void;
  /**
   * 到Cartesian3坐标与Cartographic坐标的距离
   * @param positionCartesian Cartesian3坐标
   * @param positionCartographic Cartographic坐标
   */
  distanceTo(positionCartesian: Cartesian3, positionCartographic: Cartographic): number;
  /**
   * 静态方法，通过方向包围盒OBB构造BoundingRegion，直接SSmap.BoundingRegion.fromOrientedBoundingBox(orientedBoundingBox)进行调用
   * @param orientedBoundingBox 方向包围盒OBB
   */
  static fromOrientedBoundingBox(orientedBoundingBox: OrientedBoundingBox): BoundingRegion;
  /**
   * 静态方法，创建BoundingRegion，直接SSmap.BoundingRegion.create(rectangle,minHeight,maxHeight)进行调用
   * @param rectangle 范围矩形
   * @param minHeight 最小高度
   * @param maxHeight 最大高度
   */
  static create(rectangle: Rectangle, minHeight: number, maxHeight: number): BoundingRegion;
}
