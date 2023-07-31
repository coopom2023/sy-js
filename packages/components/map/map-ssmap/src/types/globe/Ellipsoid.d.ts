import type { Cartesian3 } from '../base/Cartesian3'
import type { Cartographic } from '../base/Cartographic'
import type { Matrix4 } from '../base/Matrix4'

/**
 * 三维椭球体，椭球体上的任意点(x,y,z)符合公式(x / a)^2 + (y / b)^2 + (z / c)^2 = 1。用来表达地球的几何形状，以及WGS84坐标的定义
 * @example
 * let ellipsoid = SSmap.Ellipsoid.WGS84();
 */
export class Ellipsoid {
  /** 获取椭球的半径(x,y,z) */
  radii: Cartesian3
  /** 获取半径的平方 */
  radiiSquared: Cartesian3
  /** 获取半径的四次方 */
  radiiToTheFourth: Cartesian3
  /** 获取半径的倒数 */
  oneOverRadii: Cartesian3
  /** 获取半径平方的倒数 */
  oneOverRadiiSquared: Cartesian3
  /** 最小半径 */
  minimumRadius: number
  /** 最大半径 */
  maximumRadius: number

  /**
  * 卡托坐标转换为笛卡尔坐标
  * @param cartographic 卡托坐标
  */
  cartographicToCartesian(cartographic: Cartographic): Cartesian3;

  /**
  * 笛卡尔坐标转换为卡托坐标
  * @param cartesian 笛卡尔坐标
  */
  cartesianToCartographic(cartesian: Cartesian3): Cartographic;

  /**
  * 在指定位置建立局部坐标系,建立模型和世界坐标之间的转换矩阵
  * @param cartesian 笛卡尔坐标
  */
  eastNorthUpToFixedFrame(cartesian: Cartesian3): Matrix4;

  /**
  * 计算给定点在地球表面的法线
  * @param cartographic 卡托坐标
  */
  geodeticSurfaceNormalCartographic(cartographic: Cartographic): Cartesian3;

  /**
  * 通过乘以将笛卡尔X，Y，Z位置转换为椭圆形缩放的空间
  * @param position 笛卡尔坐标
  */
  transformPositionToScaledSpace(position: Cartesian3): Cartesian3;

  /**
  * 沿地心曲面法线缩放提供的笛卡尔位置这样它就在这个椭球的表面上
  * @param position 笛卡尔坐标
  */
  scaleToGeocentricSurface(position: Cartesian3): Cartesian3;

  /**
  * 获取地表法线和Z轴相交的坐标
  * @param position 笛卡尔坐标
  * @param buffer 可选 检查点是否在椭圆体内部时从椭圆体大小中减去的缓冲区。 在大地情况下，使用公共大地基准，则不需要此缓冲区，因为相交点始终（相对）非常靠近中心。 在WGS84基准中，交点位于最大z = + -42841.31151331382（z轴的0.673％）处。 如果MajorAxis/AxisOfRotation之比大于2的平方根，则交点可能在椭圆体之外。
  */
  getSurfaceNormalIntersectionWithZAxis(position: Cartesian3, buffer: number): Cartesian3;

  /**
  * 在给定位置计算与椭圆表面相切的平面的法线。
  * @param position 笛卡尔坐标
  */
  geodeticSurfaceNormal(position: Cartesian3): Cartesian3;

  /**
  * 沿大地表面法线缩放提供的笛卡尔位置这样它就在这个椭球的表面上。如果位置是在椭圆体的中心，此函数返回undefined。
  * @param position 笛卡尔坐标
  */
  scaleToGeodeticSurface(position: Cartesian3): Cartesian3;
  /**
  * 静态方法，初始化为WGS84标准的Ellipsoid实例，直接SSmap.Ellipsoid.WGS84()进行调用
  */
  static WGS84(): Ellipsoid;
}
