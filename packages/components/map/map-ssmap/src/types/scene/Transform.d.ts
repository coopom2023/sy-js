import type { Cartographic } from '../base/Cartographic'
import type { Matrix4 } from '../base/Matrix4'
import type { Vector3 } from '../base/Vector3'
import type { Quaternion } from '../base/Quaternion'
import type { Component } from './Component'

/**
 * Transform组件提供物体在三维空间中定位、旋转、缩放功能。一般不直接创建，而是在其它对象创建时自动创建，然后通过transform属性直接获取
 * @example
 * let entity  = new SSmap.Entity();
 * let trans = entity.transform;
 */
export class Transform extends Component {
  /** 获取或者设置物体当前的Cartographic坐标 */
  cartographic: Cartographic
  /** 获取或者设置物体当前的相对变换矩阵（相对于父物体） */
  matrix: Matrix4
  /** 获取或者设置物体的世界变换矩阵 */
  worldMatrix: Matrix4
  /** 获取或者设置物体当前的相对坐标(相对于父物体) */
  translation: Vector3
  /** 获取或者设置物体当前的相对坐标(相对于父物体) */
  position: Vector3
  /** 获取或者设置物体当前的世界坐标 */
  worldPosition: Vector3
  /** 获取或者设置物体当前的相对方位四元组（相对于父物体） */
  rotation: Quaternion
  /** 获取或者设置物体当前的X方向的欧拉角（相对于父物体） */
  rotationX: number
  /** 获取或者设置物体当前的Y方向的欧拉角（相对于父物体） */
  rotationY: number
  /** 获取或者设置物体当前的Z方向的欧拉角（相对于父物体） */
  rotationZ: number
  /** 获取或者设置物体当前的相对方位欧拉角（相对于父物体） */
  eulerAngles: Vector3
  /** 获取物体当前的X方向矢量（世界坐标） */
  readonly xaxis: Vector3
  /** 获取物体当前的Y方向矢量（世界坐标） */
  readonly yaxis: Vector3
  /** 获取物体当前的Z方向矢量（世界坐标） */
  readonly zaxis: Vector3
  /** 获取物体当前的X方向矢量（世界坐标） */
  readonly right: Vector3
  /** 获取物体当前的Y方向矢量（世界坐标） */
  readonly forward: Vector3
  /** 获取物体当前的Z方向矢量（世界坐标） */
  readonly up: Vector3
  /** 获取或者设置物体当前的相对整体缩放值（相对于父物体） */
  scale: number
  /** 获取或者设置物体当前的相对缩放值（相对于父物体） */
  scale3D: Vector3

  /**
   * 令物体的Y轴指向center点
   * @param center 世界坐标点
   */
  lookAt(center: Vector3): void;
  /**
   * 设置物体位置，旋转角度，缩放值
   * @param translation 物体位置（世界坐标）
   * @param rotation 旋转角四元组
   * @param scale 相对缩放值
   */
  setTransform(translation: Vector3, rotation: Quaternion, scale: Vector3): void;
  /**
   * 设置物体的XYZ方向矢量值（世界坐标）
   * @param xAxis X方向矢量，世界坐标系
   * @param yAxis Y方向矢量，世界坐标系
   * @param zAxis Z方向矢量，世界坐标系
   */
  setAxes(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3): void;
  /** 获取由本地坐标系到世界坐标系的变换矩阵 */
  localToWorldMatrix(): Matrix4;
  /** 获取由世界坐标系到本地坐标系的变换矩阵 */
  worldToLocalMatrix(): Matrix4;
}
