import type { Cartesian2 } from './Cartesian2'

/**
 * 二维空间的坐标点或矢量
 * @example
 * let vec2 = SSmap.Vector2.create(x,y);
 */
export class Vector2 {
  /** 横坐标 */
  x: number
  /** 纵坐标 */
  y: number

  /**
   * 归一化，同方向的单位坐标点
   */
  normalize(): Vector2;
  /**
   * 转为Cartesian2格式
   */
  toCartesian2(): Cartesian2;
  /**
   * 静态方法，通过个元素构造Vector2，直接SSmap.Vector2.fromElements(x ,y)进行调用
   * @param x x坐标
   * @param y y坐标
   */
  static fromElements(x: number, y: number): Vector2;
  /**
   * 静态方法，创建Vector2，直接SSmap.Vector2.fromElements(x ,y)进行调用
   * @param x x坐标
   * @param y y坐标
   */
  static create(x: number, y: number): Vector2;
}
