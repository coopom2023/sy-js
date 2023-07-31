import type { BoundingSphere } from './BoundingSphere'
import type { Cartesian4 } from './Cartesian4'
import type { Cartographic } from './Cartographic'
import type { Vector4 } from './Vector4'

/**
 * 制图空间的坐标范围，是以经纬度坐标为参考，可以和球面坐标相互转换
 * @example
 * let rectangle = SSmap.Rectangle.create(west,south,east,north);
 */
export class Rectangle {
  /** 西边经度 */
  west: number
  /** 南边纬度 */
  south: number
  /** 东边经度 */
  east: number
  /** 北边纬度 */
  north: number

  /** 宽 */
  width(): number;
  /** 高 */
  height(): number;
  /** 电脑宽 */
  computeWidth(): number;
  /** 电脑高 */
  computeHeight(): number;
  /** 中心点Cartographic坐标 */
  center(): Cartographic;
  /** 西南角Cartographic坐标 */
  southwest(): Cartographic;
  /** 西北角Cartographic坐标 */
  northwest(): Cartographic;
  /** 东北角Cartographic坐标 */
  northeast(): Cartographic;
  /** 东南角Cartographic坐标 */
  southeast(): Cartographic;
  /**
   * 合并另一个坐标范围
   * @param other 另一个坐标范围
   */
  combine(other: Rectangle): void;
  /**
   * 合并一个坐标点
   * @param c 坐标点
   */
  combinePoint(c): void;

  /**
   * 是否包含坐标点
   * @param cartographic 坐标点
   */
  contains(cartographic: Cartographic): boolean

  /**
   * 是否与另一个坐标范围相交
   * @param other 另一个坐标范围
   */
  intersected(other: Rectangle): boolean

  /**
   * 包围球
   */
  bounds(): BoundingSphere

  /**
   * 转换为Vector4格式
   */
  toVector4(): Vector4

  /**
   * 转换为Cartesian4格式
   */
  toCartesian4(): Cartesian4

  /**
   * 转换为经纬度坐标的坐标范围
   */
  toDegrees(): Rectangle

  /**
   * 转换为弧度坐标的坐标范围
   */
  toRadians(): Rectangle

  /**
   * 静态方法，通过经纬度构造Rectangle，直接SSmap.Rectangle.fromDegrees(w, s, e, n)进行调用
   * @param w 西边经度
   * @param s 南边纬度
   * @param e 东边经度
   * @param n 北边纬度
   */
  static fromDegrees(w: number, s: number, e: number, n: number): Rectangle

  /**
   * 静态方法，通过弧度构造Rectangle，直接SSmap.Rectangle.fromRadians(w, s, e, n)进行调用
   * @param w 西边弧度
   * @param s 南边弧度
   * @param e 东边弧度
   * @param n 北边弧度
   */
  static fromRadians(w: number, s: number, e: number, n: number): Rectangle

  /**
   * 静态方法，获得两个坐标范围的合并范围，直接SSmap.Rectangle.intersection(rectangle, otherRectangle)进行调用
   * @param rectangle 一个坐标范围
   * @param otherRectangle 另一个坐标范围
   */
  static intersection(rectangle: Rectangle, otherRectangle: Rectangle): Rectangle

  /**
   * 静态方法，获得两个Rectangle的相交范围，直接SSmap.Rectangle.simpleIntersection(rectangle, otherRectangle)进行调用
   * @param rectangle 一个坐标范围
   * @param otherRectangle 另一个坐标范围
   */
  static simpleIntersection(rectangle: Rectangle, otherRectangle: Rectangle): Rectangle

  /**
   * 静态方法，创建Rectangle，直接SSmap.Rectangle.create(west,south,east,north)进行调用
   * @param west 西边
   * @param south 南边
   * @param east 东边
   * @param north 北边
   */
  static create(west: number, south: number, east: number, north: number): Rectangle
}
