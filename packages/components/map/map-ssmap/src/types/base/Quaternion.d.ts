import type { Matrix3 } from './Matrix3'
import type { Vector3 } from './Vector3'
import type { Vector4 } from './Vector4'

/**
 * 四元数，表达一个物体在三维空间中绕任意周旋转任意角度,有关函数中涉及角度的参数都是以度（degree）为单位,使用四元数表达旋转最大的优势是两个四元数可以进行插值
 * @example
 * let qua = SSmap.Quaternion.fromEulerAngles(0, 0, 0);
 */
export class Quaternion {
  /** 第一个参数 */
  x: number
  /** 第二个参数 */
  y: number
  /** 第三个参数 */
  z: number
  /** 标量 */
  w: number
  /** 标量 */
  scalar: number
  /** 旋转轴 */
  vector: Vector3

  /** 是否为空 */
  isNull(): boolean;
  /** 是否可变 */
  isIdentity(): boolean;
  /** 归一化，同方向的单位四元数 */
  normalize(): Quaternion;
  /** 反向四元数 */
  inverted(): Quaternion;
  /** 共轭四元数 */
  conjugated(): Quaternion;
  /**
   * 旋转矢量
   * @param vector vector
   */
  rotatedVector(vector: Vector3): Vector3;
  /** 转换为Vector4格式 */
  toVector4(): Vector4;
  /** 转为欧拉角度 */
  toEulerAngles(): Vector3;
  /** 转为旋转矩阵 */
  toRotationMatrix(): Matrix3;
  /**
   * 获得旋转轴
   * @param xAxis x方向向量
   * @param yAxis y方向向量
   * @param zAxis z方向向量
   */
  getAxes(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): void;
  /**
   * 静态方法，通过轴及角度构造Quaternion，直接SSmap.Quaternion.fromAxisAndAngle(vector, angle)进行调用
   * @param vector 轴的方向坐标
   * @param angle 角度
   */
  static fromAxisAndAngle(vector: Vector3, angle: number): Quaternion;
  /**
   * 静态方法，通过欧拉角构造Quaternion，直接SSmap.Quaternion.fromEulerAngles(pitch, yaw, roll)进行调用
   * @param pitch x方向欧拉角
   * @param yaw y方向欧拉角
   * @param roll z方向欧拉角
   */
  static fromEulerAngles(pitch: number, yaw: number, roll: number): Quaternion;
  /**
   * 静态方法，通过旋转矩阵构造Quaternion，直接SSmap.Quaternion.fromRotationMatrix(rot3x3)进行调用
   * @param rot3x3 旋转矩阵
   */
  static fromRotationMatrix(rot3x3: Matrix3): Quaternion;
  /**
   * 静态方法，通过各方向向量构造Quaternion，直接SSmap.Quaternion.fromAxes(xAxis, yAxis, zAxis)进行调用
   * @param xAxis x方向向量
   * @param yAxis y方向向量
   * @param zAxis z方向向量
   */
  static fromAxes(xAxis, yAxis, zAxis): Quaternion;
  /**
   * 静态方法，通过朝向和向上的向量进行构造，直接SSmap.Quaternion.fromDirection(direction, up)进行调用
   * @param direction direction
   * @param up up
   */
  static fromDirection(direction: Vector3, up: Vector3): Quaternion;
  /**
   * 静态方法，从一个点到另一个点的旋转四元数，直接SSmap.Quaternion.rotationTo(from,to)进行调用
   * @param from 起始点
   * @param to 目标点
   */
  static rotationTo(from: Vector3, to: Vector3): Quaternion;
  /**
   * 静态方法，返回两个表示旋转的四元数之间的球面线性插值(使用与插值范围较大时)，直接SSmap.Quaternion.slerp(q1, q2, t)进行调用
   * @param q1 第一个四元数
   * @param q2 另一个四元数
   * @param t 比例系数
   */
  static slerp(q1: Quaternion, q2: Quaternion, t: number): Quaternionl;
  /**
   * 静态方法，返回两个表示旋转的四元数之间的归一化线性插值(返回单位四元数)，直接SSmap.Quaternion.nlerp(q1, q2, t)进行调用
   * @param q1 第一个四元数
   * @param q2 另一个四元数
   * @param t 比例系数
   */
  static nlerp(q1, q2, t): Quaternion;
  /**
   * 静态方法，创建Quaternion，直接SSmap.Quaternion.create(scalar,x,y,z)进行调用
   * @param scalar 标量部分
   * @param x 向量部分的x
   * @param y 向量部分的y
   * @param z 向量部分的z
   */
  static create(scalar,x,y,z): Quaternion;
}
