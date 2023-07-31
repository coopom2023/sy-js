import type { BoundingRegion } from './BoundingRegion'
import type { BoundingSphere } from './BoundingSphere'
import type { Cartesian3 } from './Cartesian3'
import type { Cartographic } from './Cartographic'
import type { OrientedBoundingBox } from './OrientedBoundingBox'
import type { Plane } from './Plane'
import type { Vector3 } from './Vector3'

/**
 * BoundingVolume包围体，是为了统一BoundingSphere, BoundingBox, BoundingRegion的接口,可以通过这三种方式之一来定义包围体，当用于计算的时候，会自动使用构造体去计算
 * @example
 * let center = SSmap.Vector3.create(x,y,z);
 * let radius = 50;
 * let bs =SSmap.BoundingSphere.create(center,radius);
 * let boundingVolume = SSmap.BoundingVolume.fromBoundingSphere(bs);
 */
export class BoundingVolume {
  /** 中心坐标 */
  center: Vector3
  /** 三维坐标空间的包围球 */
  boundingSphere: BoundingSphere
  /** 方向包围盒OBB */
  orientedBoundingBox: OrientedBoundingBox
  /** 三维球面坐标的空间范围 */
  boundingRegion: BoundingRegion

  /**
   * 到Cartesian3坐标与Cartographic坐标的距离
   * @param positionCartesian Cartesian3坐标
   * @param positionCartographic Cartographic坐标
   */
  distanceTo(positionCartesian: Cartesian3, positionCartographic: Cartographic): number;
  /**
   * 相交平面
   * @param plane 空间平面
   */
  intersectPlane(plane: Plane): any;
  // intersectPlane(plane): Intersect::Result;
  /**
   * 可见性计算
   * @param cullingVolume 裁切视锥
   */
  computeVisibility(cullingVolume: any): any;
  // computeVisibility(cullingVolume: CullingVolume): Intersect::Result;
  /**
   * 通过三维坐标空间的包围球构造BoundingRegion
   * @param sphere 三维坐标空间的包围球
   */
  fromBoundingSphere(sphere: BoundingSphere): BoundingVolume;
  /**
   * 通过方向包围盒OBB构造BoundingVolume
   * @param orientedBoundingBox 方向包围盒OBB
   */
  fromOrientedBoundingBox(orientedBoundingBox: OrientedBoundingBox): BoundingVolume;
  /**
   * 通过三维球面坐标的空间范围构造BoundingVolume
   * @param region 三维球面坐标的空间范围
   */
  fromBoundingRegion(region: BoundingRegion): BoundingVolume;
}
