import type { Cartesian3 } from './Cartesian3'
import type { Cartographic } from './Cartographic'

/** 
 * 三维空间的点或矢量
 * @example let vec3 = SSmap.Vector3.create(x,y,z);
 */
export class Vector3 {
  /** 横坐标 */
  x: number
  /** 纵坐标 */
  y: number
  /** 高度坐标 */
  z: number

  /** 归一化，同方向的单位向量点 */
  normalize(): Vector3;
  /** 到原点的距离 */
  magnitude(): number;
  /** 到原点的距离的平方 */
  magnitudeSquared(): number;
  /** 长度 */
  length(): number;
  /** 长度的平方 */
  lengthSquared(): number;
  /**
   * 到点的距离
   * @param point 点的坐标
   */
  distance(point: Vector3): number;
  /**
   * 到点的距离
   * @param point 点的坐标
   */
  distanceToPoint(point: Vector3): number;
  /** 三维向量点最小值 */
  minimumComponent(): number;
  /** 三维向量点最大值 */
  maximumComponent(): number;
  /** 克隆构造一个相同数值的Vector3 */
  clone(): Vector3;
  /** 转为Cartesian3格式 */
  toCartesian3(): Cartesian3;
  /** 转为Cartographic格式 */
  toCartographic(): Cartographic;
  /**
   * 静态方法，比较两个Vector3值是否相等，直接SSmap.Vector3.equals(a,b)进行调用
   * @param a 第一个Vector3
   * @param b 另一个Vector3
   */
  static equals(a: Vector3, b: Vector3): boolean;
  /**
   * 静态方法，比较两个Vector3值是否在误差范围内相等，直接SSmap.Vector3.equalsEpsilon(a, b, absoluteEpsilon)进行调用
   * @param a 第一个Vector3
   * @param b 另一个Vector3
   * @param absoluteEpsilon 允许的误差
   */
  static equalsEpsilon(a: Vector3, b: Vector3, absoluteEpsilon: number): boolean;
  /** 移除 */
  delete(): void;
  /**
   * 静态方法，两个向量点乘，直接SSmap.Vector3.dot(v1,v2)进行调用
   * @param v1 第一个Vector3
   * @param v2 另一个Vector3
   */
  static dot(v1: Vector3, v2: Vector3): number;
  /**
   * 静态方法，两个向量叉乘，直接SSmap.Vector3.cross(v1,v2)进行调用
   * @param v1 第一个Vector3
   * @param v2 另一个Vector3
   */
  static cross(v1: Vector3, v2: Vector3): Vector3;
  /**
   * 静态方法，返回两个向量中较小的向量，直接SSmap.Vector3.min(v1,v2)进行调用
   * @param v1 第一个Vector3
   * @param v2 另一个Vector3
   */
  static min(v1: Vector3, v2: Vector3): Vector3;
  /**
   * 静态方法，返回两个向量中较大的向量，直接SSmap.Vector3.max(v1,v2)进行调用
   * @param v1 第一个Vector3
   * @param v2 另一个Vector3
   */
  static max(v1: Vector3, v2: Vector3): Vector3;
  /**
   * 静态方法，两个向量之间的线性插值，按照数字t在start到end之间插值,直接SSmap.Vector3.lerp(start, end, t)进行调用
   * @param start 一个Vector3
   * @param end 另一个Vector3
   * @param t 移动时间占总时间的比例
   */
  static lerp(start: Vector3, end: Vector3, t: number): Vector3;
  /**
   * 静态方法，所有维度取绝对值的，返回新的Vector3，直接SSmap.Vector3.abs(a)进行调用
   * @param a 一个Vector3
   */
  static abs(a: Vector3): Vector3;
  /**
   * 静态方法，返回两个向量中较小的向量，直接SSmap.Vector3.minimumByComponent(v1,v2)进行调用
   * @param a 一个Vector3
   * @param b 另一个Vector3
   */
  static minimumByComponent(a: Vector3, b: Vector3): Vector3;
  /**
   * 静态方法，返回两个向量中较大的向量，直接SSmap.Vector3.maximumByComponent(v1,v2)进行调用
   * @param a 一个Vector3
   * @param b 另一个Vector3
   */
  static maximumByComponent(a: Vector3, b: Vector3): Vector3;
  /**
   * 静态方法，取反，直接SSmap.Vector3.negate(a)进行调用
   * @param a 一个Vector3
   */
  static negate(a: Vector3): Vector3;
  /**
   * 静态方法，a + b，直接SSmap.Vector3.add(a,b)进行调用
   * @param a 一个Vector3
   * @param b 另一个Vector3
   */
  static add(a: Vector3, b: Vector3): Vector3;
  /**
   * 静态方法，a - b，直接SSmap.Vector3.subtract(a,b)进行调用
   * @param a 一个Vector3
   * @param b 另一个Vector3
   */
  static subtract(a: Vector3, b: Vector3): Vector3;
  /**
   * 静态方法，a中的x,y,z分别乘b的x,y,z，直接SSmap.Vector3.multiplyComponents(a,b)进行调用
   * @param a 一个Vector3
   * @param b 另一个Vector3
   */
  static multiplyComponents(a: Vector3, b: Vector3): Vector3;
  /**
   * 静态方法，a中的x，y，z均乘以scalar，直接SSmap.Vector3.multiplyByScalar(a, scalar)进行调用
   * @param a 一个Vector3
   * @param scalar 一个值
   */
  static multiplyByScalar(a: Vector3, scalar: number): Vector3;
  /**
   * 静态方法，a中的x,y,z分别除以b的x,y,z，直接SSmap.Vector3.divideComponents(a, b)进行调用
   * @param a 一个Vector3
   * @param b 另一个Vector3
   */
  static divideComponents(a: Vector3, b: Vector3): Vector3;
  /**
   * 静态方法，a中的x，y，z均触以scalar，直接SSmap.Vector3.divideByScalar(a, scalar)进行调用
   * @param a 一个Vector3
   * @param scalar 一个值
   */
  static divideByScalar(a: Vector3, scalar: number): Vector3;
  /**
   * 静态方法，通过个元素构造Vector3，直接SSmap.Vector3.fromElements(x ,y ,z)进行调用
   * @param x x坐标
   * @param y y坐标
   * @param z z坐标
   */
  static fromElements(x: number, y: number, z: number): Vector3;
  /**
   * 静态方法，构造Vector3，直接SSmap.Vector3.create(x ,y ,z)进行调用
   * @param x x坐标
   * @param y y坐标
   * @param z z坐标
   */
  static create(x: number, y: number, z: number): Vector3;
}
