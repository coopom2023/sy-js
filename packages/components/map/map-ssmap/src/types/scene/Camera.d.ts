import { ProjectionType } from '../../enums/ProjectionType'
import type { BoundingSphere } from '../base/BoundingSphere'
import type { Cartesian2 } from '../base/Cartesian2'
import type { Cartographic } from '../base/Cartographic'
import type { Future } from '../base/Future'
import type { Matrix4 } from '../base/Matrix4'
import type { Ray } from '../base/Ray'
import type { Rectangle } from '../base/Rectangle'
import type { Vector3 } from '../base/Vector3'
import type { Component } from './Component'
import type { CameraController } from './CameraController'

/**
 * 相机对象。
 * @example
 * let camera = GlobalViewer.scene.mainCamera;
 * carmera.flyTo(SSmap.Cartographic.fromDegrees(lon,lat,height),2, 0, -90, 0).then(function(){
 *   console.log('飞行完成！');
 * })
 * // or 
 * // let camera = new SSmap.Camera();
 */
export class Camera extends Component {
  /** 获取或者设置相机的投影类型，默认：PerspectiveProjection */
  projectionType: ProjectionType
  /** 获取或者设置光圈，默认：16 */
  aperture: number
  /** 获取或者设置快门速度，默认：0.00800000037997961 */
  shutterSpeed: number
  /** 获取或者设置灵敏度，默认：100 */
  sensitivity: number
  /** 获取或者设置近裁切距离，默认：1 */
  nearPlane: number
  /** 获取或者设置远裁切距离，默认：16777216 */
  farPlane: number
  /** 获取或者设置水平视锥角度，单位为度(degree)，默认：65 */
  fov: number
  /** 获取或者设置水平视锥角度，单位为度(degree)，和fov相同，默认：65 */
  fieldOfView: number
  /** 获取垂直视锥角度，单位为度(degree)，默认：65 */
  readonlyfovy: number
  /** 获取或者设置视口（宽度/高度）比例，默认：1 */
  aspectRatio: number
  /** 获取或者设置在摄像机坐标系中的左边空间距离（近裁切面），默认：-0.5 */
  left: number
  /** 获取或者设置在摄像机坐标系中的右边空间距离（近裁切面），默认：0.5 */
  right: number
  /** 获取或者设置在摄像机坐标系中的下部边空间距离（近裁切面），默认：-0.5 */
  bottom: number
  /** 获取或者设置在摄像机坐标系中的上部空间距离（近裁切面），默认：0.5 */
  top: number

  /**
   * 获取当前的摄像机变换矩阵，从世界坐标系到摄像机坐标系的变换矩阵
   */
  viewMatrix(): Matrix4;

  /**
   * 获取当前的摄像机的投影变换矩阵
   */
  projectionMatrix(): Matrix4;

  /**
   * 获取当前的摄像机的视口正投变换矩阵
   */
  viewportOrthographic(): Matrix4;

  /**
   * 同viewMatrix()，获取当前的摄像机变换矩阵，从世界坐标系到摄像机坐标系的变换矩阵
   */
  worldToCameraMatrix(): Matrix4;

  /**
   * 获取从当前摄像机坐标系到世界坐标系的变换矩阵
   */
  cameraToWorldMatrix(): Matrix4;

  /**
   * 获取包围球在视口中的像素大小
   * @param boundingSphere 包围球
   * @param drawingBufferWidth 视口宽度
   * @param drawingBufferHeight 视口高度
   */
  getPixelSize(boundingSphere: BoundingSphere, drawingBufferWidth: number, drawingBufferHeight: number): number;

  /**
   * 获取三维空间的点经过投影变换后，在视口中的像素大小
   * @param drawingBufferWidth 视口宽度
   * @param drawingBufferHeight 视口高度
   * @param distance 距离摄像机近裁切面的空间距离
   */
  getPixelDimensions(drawingBufferWidth: number, drawingBufferHeight: number, distance: number): Cartesian2;

  /**
   * 计算当前视口的矩形
   */
  computeViewRectangle(): Rectangle;

  /**
   * 计算从摄像机位置到屏幕点的射线
   * @param x 屏幕点的X坐标
   * @param y 屏幕点的Y坐标
   */
  screenPointToRay(x: number, y: number): Ray;

  /**
   * 计算屏幕点对应的世界坐标
   * @param position 屏幕点，Z值为深度值
   */
  screenToWorldPoint(position: Vector3): Vector3;

  /**
   * 计算世界坐标点在视口屏幕上的坐标
   * @param position 屏幕点，Z值为深度值
   */
  worldToScreenPoint(position: Vector3): Vector3;

  /**
   * 获取摄像机的控制对象
   */
  cameraController(): CameraController;

  /**
   * 飞到目标点
   * @param destination 制图空间的目标点
   * @param duration 飞行时间，单位为秒
   * @param heading 最终状态的转向角，单位为度
   * @param pitch 最终状态的俯仰角，单位为度
   * @param roll 最终状态的翻滚角，单位为度
   */
  flyTo(destination: Cartographic, duration: number, heading: number, pitch: number, roll: number): Future;

}
