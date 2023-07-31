import type { Vector3 } from './Vector3'
import type { Vector4 } from './Vector4'
import type { Quaternion } from './Quaternion'
import type { Matrix3 } from './Matrix3'

/**
 * 双精度浮点4阶矩阵，用于不同坐标系间的变换计算,内部数组采用column-major的排列方式
 * @example
 * // 初始化一个四阶矩阵，然后通过setRow和setColumn方法设值
 * let matrix4 = SSmap.Matrix4.create();
 * // 设置第0行的数值为1,2,3,4
 * matrix4.setRow(0,SSmap.Vector4.create(1,2,3,4));
 */
export class Matrix4 {
  /**
   * 获得对应行的数据
   * @param index 行数
   */
  row(index: number): Vector4;

  /**
   * 设置对应行的数据
   * @param index 行数
   * @param value 写入的数据
   */
  setRow(index: number, value: Vector4): void;

  /**
   * 获得对应列的数据
   * @param index 列数
   */
  column(index: number): Vector4;

  /**
   * 设置对应列的数据
   * @param index 列数
   * @param value 写入的数据
   */
  setColumn(index: number, value: Vector4): void;

  /**
   * 是否可变
   */
  isIdentity(): boolean;

  /**
   * 设置可变
   */
  setToIdentity(): void;

  /**
   * 转换
   */
  translation(): Vector3;

  /**
   * 设置转换向量
   * @param translation 转换向量
   */
  setTranslation(translation: Vector3): void;

  /**
   * 旋转矩阵
   */
  rotationMatrix(): Matrix3;

  /**
   * 比例向量
   * @param vector 平移向量
   */
  scale(vector: Vector3): void;

  /**
   * 矩阵取反
   */
  inverted(): Matrix4;

  /**
   * 逆变换
   */
  inverseTransformation(): Matrix4;

  /**
   * 转置
   */
  transposed(): Matrix4;

  /**
   * 组成，通过各个组成部分改变数据
   * @param position 位置
   * @param orientation 方向
   * @param scale 大小
   */
  compose(position: Vector3, orientation: Quaternion, scale: Vector3): void;

  /**
   * 分解，将数据分成部分获取
   * @param position 位置
   * @param orientation 方向
   * @param scale 大小
   */
  decompose(position: Vector3, orientation: Quaternion, scale: Vector3): void;

  /**
   * 优化
   */
  optimize(): void;

  /**
   * map
   * @param point point
   */
  map(point: Vector3): Vector3;

  /**
   * mapVector
   * @param vector vector
   */
  mapVector(vector: Vector3): Vector3;

  /**
   * 静态方法，两四阶矩阵相乘，直接SSmap.Matrix4.multiply(left, right)进行调用
   * @param left 第一个四阶矩阵
   * @param right 另一个四阶矩阵
   */
  static multiply(left: Matrix4, right: Matrix4): Matrix4;

  /**
   * 静态方法，四阶矩阵与三维向量相乘，直接SSmap.Matrix4.multiplyByVector3(matrix, vector)进行调用
   * @param matrix 四阶矩阵
   * @param vector 三维向量
   */
  static multiplyByVector3(matrix: Matrix4, vector: Vector3): Vector3;

  /**
   * 静态方法，四阶矩阵与四维向量相乘，直接SSmap.Matrix4.multiplyByVector4(matrix, vector)进行调用
   * @param matrix 四阶矩阵
   * @param vector 四维向量
   */
  static multiplyByVector4(matrix: Matrix4, vector: Vector4): Vector4;

  /**
   * 静态方法，通过平移向量转换构造Matrix4，直接SSmap.Matrix4.fromTranslation(translation)进行调用
   * @param translation 平移向量
   */
  static fromTranslation(translation: Vector3): Matrix4;

  /**
   * 静态方法，通过比例向量构造Matrix4，直接SSmap.Matrix4.fromScale(scale)进行调用
   * @param scale 比例向量
   */
  static fromScale(scale: Vector3): Matrix4;

  /**
   * 静态方法，通过旋转矩阵和平移向量构造Matrix4，直接SSmap.Matrix4.fromRotationTranslation(rotation, translation)进行调用
   * @param rotation 旋转矩阵
   * @param translation 平移向量
   */
  static fromRotationTranslation(rotation: Matrix3, translation: Vector3): Matrix4;

  /**
   * 静态方法，通过转换、旋转、比例构造Matrix4，直接SSmap.Matrix4.fromTranslationRotationScale(translation, rotation, scale)进行调用
   * @param translation 转换向量
   * @param rotation 旋转矩阵
   * @param scale 比例向量
   */
  static fromTranslationRotationScale(translation: Vector3, rotation: Matrix3, scale: Vector3): Matrix4;

  /**
   * 静态方法，通过计算视图窗口转换构造Matrix4，直接SSmap.Matrix4.computeViewportTransformation(x, y, width, height, nearDepthRange, farDepthRange)进行调用
   * @param x x
   * @param y y
   * @param width 宽
   * @param height 高
   * @param nearDepthRange 近深度范围，默认值为0
   * @param farDepthRange 远深度范围，默认值为1
   */
  static computeViewportTransformation(x: number, y: number, width: number, height: number, nearDepthRange: number, farDepthRange: number): Matrix4;

  /**
   * 静态方法，通过计算透视偏移中心构造Matrix4，直接SSmap.Matrix4.computePerspectiveOffCenter(left, right, bottom, top, nearPlane, farPlane)进行调用
   * @param left 左边
   * @param right 右边
   * @param bottom 下边
   * @param top 上边
   * @param nearPlane 近裁剪面
   * @param farPlane 远裁剪面
   */
  static computePerspectiveOffCenter(left: number, right: number, bottom: number, top: number, nearPlane: number, farPlane: number): Matrix4;

  /**
   * 静态方法，通过计算无限透视偏移中心构造Matrix4，直接SSmap.Matrix4.computeInfinitePerspectiveOffCenter(left, right, bottom, top, nearPlane)进行调用
   * @param left 左边
   * @param right 右边
   * @param bottom 下边
   * @param top 上边
   * @param nearPlane 近裁剪面
   */
  static computeInfinitePerspectiveOffCenter(left: number, right: number, bottom: number, top: number, nearPlane: number): Matrix4;

  /**
   * 静态方法，创建Matrix4，直接SSmap.Matrix4.create()进行调用,初始化一个所有值为0的矩阵
   */
  static create(): Matrix4;
}
