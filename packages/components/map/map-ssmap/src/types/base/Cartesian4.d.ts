/**
 * Cartesian4定义了四维元素组，可以和Vector4相互转换
 * @example
 * let car4 = SSmap.Cartesian4.create(x,y,z,w);
 */
export class Cartesian4 {
  /** 第一个参数 */
  x: number
  /** 第二个参数 */
  y: number
  /** 第三个参数 */
  z: number
  /** 第四个参数 */
  w: number

  /** 到原点的距离 */
  magnitude(): number;
  /** 到原点的距离的平方 */
  magnitudeSquared(): number;
  /** 归一化，同方向的单位四维元素组 */
  normalize(): Cartesian4;
  /** 转为Vector4格式 */
  toVector4(): Vector4;
  /**
   * 静态方法，通过个元素构造Cartesian4，直接SSmap.Cartesian4.fromElements(x, y, z, w)进行调用
   * @param x x值
   * @param y y值
   * @param z z值
   * @param w w值
   */
  static fromElements(x: number, y: number, z: number, w: number): Cartesian4;
  /**
   * 静态函数，创建Cartesian4，直接SSmap.Cartesian4.create(x, y, z, w)进行调用
   * @param x x值
   * @param y y值
   * @param z z值
   * @param w w值
   */
  static create(x: number, y: number, z: number, w: number): Cartesian4;
}
