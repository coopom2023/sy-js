import type { Vector3 } from './Vector3'

/**
 * 双精度浮点3阶矩阵
 * @example
 * // 初始化一个三阶矩阵，然后通过setRow和setColumn方法设值
 * let matrix3 = SSmap.Matrix3.create();
 * // 设置第0行的数值为1,2,3
 * matrix3.setRow(0,SSmap.Vector3.create(1,2,3));
 */
export class Matrix3 {
  /**
   * 获得对应行的数据
   * @param index 行数
   */
  row(index: number): Vector3;
  /**
   * 设置对应行的数据
   * @param index 行数
   * @param value 写入的数据
   */
  setRow(index: number, value: Vector3): void;
  /**
   * 获得对应列的数据
   * @param index 列数
   */
  column(index: number): Vector3;
  /**
   * 设置对应列的数据
   * @param index 列数
   * @param value 写入的数据
   */
  setColumn(index: number, value: Vector3): void;
  /** 是否可变 */
  isIdentity(): boolean;
  /** 设置可变 */
  setToIdentity(): void;
  /** 转置 */
  transposed(): Matrix3;
  /**
   * 静态方法，两三阶矩阵相乘，直接SSmap.Matrix3.multiply(left, right)进行调用
   * @param left 第一个三阶矩阵
   * @param right 另一个三阶矩阵
   */
  static multiply(left: Matrix3, right: Matrix3): Matrix3;
  /**
   * 静态方法，三阶矩阵与三维向量相乘，直接SSmap.Matrix3.multiplyByVector3(matrix, vector)进行调用
   * @param matrix 三阶矩阵
   * @param vector 三维向量
   */
  static multiplyByVector3(matrix: Matrix3, vector: Vector3): Vector3;
  /**
   * 静态方法，通过各方向向量构造Matrix3，直接SSmap.Matrix3.fromAxes(xAxis, yAxis, zAxis)进行调用
   * @param xAxis x方向向量
   * @param yAxis y方向向量
   * @param zAxis z方向向量
   */
  static fromAxes(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): Matrix3;
  /** 静态方法，创建Matrix3，直接SSmap.Matrix3.create()进行调用，初始化一个所有值为0的矩阵 */
  static create(): Matrix3;
}
