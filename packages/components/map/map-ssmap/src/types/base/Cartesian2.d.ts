import type { Vector2 } from './Vector2'

/**
 * Cartesian2定义二维空间的坐标点，和Vector2类相似，可以和Vector2相互转换
 * @example
 * let car2 = SSmap.Cartesian2.create(x,y);
 */
export class Cartesian2 {
  /** 横坐标 */
  x: number
  /** 纵坐标 */
  y: number

  /**
 * 是否为空
 */
  isNull(): boolean;

  /**
   * 到原点的距离
   */
  distance(): number;

  /**
   * 到原点的距离的平方
   */
  distanceSquared(): number;

  /**
   * 到原点的距离
   */
  magnitude(): number;

  /**
   * 到原点的距离的平方
   */
  magnitudeSquared(): number;

  /**
   * 克隆构造一个相同数值的Cartesian2
   */
  clone(): Cartesian2;

  /**
   * 转为Vector2格式
   */
  toVector2(): Vector2;

  /**
   * 静态方法，点乘，直接SSmap.Cartesian2.multiplyComponents(right)进行调用
   * @param right 另一个点的位置坐标
   */
  static multiplyComponents(right: Cartesian2): Cartesian2;

  /**
   * 静态方法，乘以一个数值，直接SSmap.Cartesian2.multiplyByScalar(scalar)进行调用
   * @param scalar 数值
   */
  static multiplyByScalar(scalar: number): Cartesian2;

  /**
   * 静态方法，除以一个Cartesian2，直接SSmap.Cartesian2.divideComponents(right)进行调用
   * @param right 另一个点的位置坐标
   */
  static divideComponents(right: Cartesian2): Cartesian2;

  /**
   * 静态方法，除以一个数值，直接SSmap.Cartesian2.divideByScalar(scalar)进行调用
   * @param scalar 数值
   */
  static divideByScalar(scalar: number): Cartesian2;

  /**
   * 静态方法，加一个Cartesian2，直接SSmap.Cartesian2.add(right)进行调用
   * @param right 另一个点的位置坐标
   */
  static add(right: Cartesian2): Cartesian2;

  /**
   * 静态方法，减一个Cartesian2，直接SSmap.Cartesian2.subtract(right)进行调用
   * @param right 另一个点的位置坐标
   */
  static subtract(right: Cartesian2): Cartesian2;

  /**
   * 静态方法，取反，直接SSmap.Cartesian2.negate()进行调用
   */
  static negate(): Cartesian2;

  /**
   * 静态方法，绝对值，直接SSmap.Cartesian2.abs()进行调用
   */
  static abs(): Cartesian2;

  /**
   * 静态方法，通过个元素构造Cartesian2，直接SSmap.Cartesian2.fromElements(x ,y)进行调用
   * @param x x坐标
   * @param y y坐标
   */
  static fromElements(x: number, y: number): Cartesian2;

  /**
   * 静态方法，创建Cartesian2d，直接SSmap.Cartesian2.create(x,y)进行调用
   * @param x x坐标
   * @param y y坐标
   */
  static create(x: number, y: number): Cartesian2;
}
