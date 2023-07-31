import type { Vector3 } from './Vector3'
import type { Cartographic } from './Cartographic'

/**
 * Cartesian3定义了三维空间的坐标点，类似于Vector3，可以和Vector3相互转换
 * @example
 * let car3 = SSmap.Cartesian3.create(x,y,z);
 */
export class Cartesian3 {
  /** x坐标 */
  x: number
  /** y坐标 */
  y: number
  /** z坐标 */
  z: number

  /** 归一化，同方向的单位坐标点 */
  normalize(): Cartesian3;
  /** 到原点的距离 */
  magnitude(): number;
  /** 到原点的距离的平方 */
  magnitudeSquared(): number;
  /** 长度 */
  length(): number;
  /** 长度的平方 */
  lengthSquared(): number;
  /** 转为Vector3格式 */
  toVector3(): Vector3;
  /** 转为Cartographic格式 */
  toCartographic(): Cartographic;
  /**
   * 静态方法，两个坐标间的距离，直接SSmap.Cartesian3.distance(other)进行调用
   * @param other 另一个Cartesian3
   */
  static distance(other: Cartesian3): number;
  /**
   * 静态方法，两个坐标点乘，直接SSmap.Cartesian3.dot(right)进行调用
   * @param right 另一个Cartesian3
   */
  static dot(right: Cartesian3): number;
  /**
   * 静态方法，两个坐标叉乘，两个坐标点乘，直接SSmap.Cartesian3.cross(right)进行调用
   * @param right 另一个Cartesian3
   */
  static cross(right: Cartesian3): number;
  /**
   * 静态方法，两个向量之间的线性插值，按照数字t在start到end之间插值，直接SSmap.Cartesian3.lerp(start, end, t)进行调用
   * @param start 一个Cartesian3
   * @param end 另一个Cartesian3
   * @param t 移动时间占总时间的比例
   */
  static lerp(start: Cartesian3, end: Cartesian3, t: number): Cartesian3;
  /**
   * 静态方法，以角度为单位的参数构造Cartesian3，直接SSmap.Cartesian3.fromDegrees(longitude, latitude, height)进行调用
   * @param longitude 经度
   * @param latitude 纬度
   * @param height 高度，默认值0
   */
  static fromDegrees(longitude: number, latitude: number, height: number): Cartesian3;
  /**
   * 静态方法，以弧度为单位的参数构造Cartesian3，直接SSmap.Cartesian3.fromRadians(longitude, latitude, height)进行调用
   * @param longitude 经度
   * @param latitude 纬度
   * @param height 高度，默认值0
   */
  static fromRadians(longitude: number, latitude: number, height: number): Cartesian3;
  /**
   * 静态方法，以Cartographic为参数构造Cartesian3，直接SSmap.Cartesian3.fromCartographic(cartographic)进行调用
   * @param cartographic Cartographic坐标
   */
  static fromCartographic(cartographic: Cartographic): Cartesian3;
  /**
   * 静态方法，通过个元素构造Cartesian3，直接SSmap.Cartesian3.fromElements(x, y, z)进行调用
   * @param x x坐标
   * @param y y坐标
   * @param z z坐标
   */
  static fromElements(x: number, y: number, z: number): Cartesian3;
  /**
   * 静态方法，创建Cartesian3，直接SSmap.Cartesian3.create(x,y,z)进行调用
   * @param x x坐标
   * @param y y坐标
   * @param z z坐标
   */
  static create(x: number, y: number, z: number): Cartesian3;
}
