import type { Cartesian3 } from '../base/Cartesian3'
import type { Cartographic } from '../base/Cartographic'
import type { Future } from '../base/Future'
import type { Ray } from '../base/Ray'
import type { Rectangle } from '../base/Rectangle'
import type { Vector3 } from '../base/Vector3'

/**
 * 相机控制器，默认左键平移，右键环视，滚轮缩放，中键旋转
 * @example
 * let cameraCtrl = GlobalViewer.scene.mainCamera.cameraController();
 */
export class CameraController {
  /** 获取或者设置是否允许鼠标输入修改相机位置和方向，默认：true */
  enableInputs: boolean
  /** 获取或者设置是否允许相机缩放，默认：true */
  enableZoom: boolean
  /** 获取或者设置是否允许相机旋转，默认：true */
  enableRotate: boolean
  /** 获取或者设置是否允许相机倾斜，默认：true */
  enableTilt: boolean
  /** 获取或者设置是否允许相机环视，默认：true */
  enableLook: boolean
  /** 获取或者设置是否允许相机平移，默认：true */
  enablePan: boolean
  /** 获取或者设置是否允许相机进入地下，默认：false */
  enableUnderGround: boolean
  /** 获取或者设置测试与地形碰撞前相机必须达到的最小高度，默认：15000 */
  minimumCollisionTerrainHeight: boolean
  /** 获取相机更新后的世界坐标 */
  readonly positionWC: Vector3
  /** 获取相机更新后的x轴方向 */
  readonly rightWC: Vector3
  /** 获取相机更新后的y轴方向 */
  readonly directionWC: Vector3
  /** 获取相机更新后的z轴方向 */
  readonly upWC: Vector3
  /** 获取相机更新后的Cartographic坐标 */
  readonly positionCartographic: Cartographic
  /** 获取相机的朝向，默认：0 */
  readonly heading: number
  /** 获取相机的俯仰角，默认：-Math.PI/2 */
  readonly pitch: number
  /** 获取相机的翻滚角，默认：0 */
  readonly roll: number

  /**
 * 从相机向一个屏幕点(x, y)发射一条射线 (相机拾取)
 * @param x 屏幕点的X坐标
 * @param y 屏幕点的Y坐标
 */
  getPickRay(x: number, y: number): Ray;

  /**
   * 飞到目标点
   * @param destination 目标点
   * @param heading 相机的转向角（弧度）
   * @param pitch 相机的俯仰角（弧度）
   * @param roll 相机的翻滚角（弧度）
   */
  setView(destination: Cartesian3, heading: number, pitch: number, roll: number): void;

  /**
   * 相机围绕axis轴旋转
   * @param axis 围绕轴
   * @param angle 旋转角度 (弧度)
   */
  rotate(axis: Vector3, angle: number): void;

  /**
   * 相机围绕自身中心点向上旋转
   * @param angle 旋转角度 (弧度)
   */
  rotateUp(angle: number): void;

  /**
   * 相机围绕自身中心点向下旋转
   * @param angle 旋转角度 (弧度)
   */
  rotateDown(angle: number): void;

  /**
   * 相机围绕自身中心点向右旋转
   * @param angle 旋转角度 (弧度)
   */
  rotateRight(angle: number): void;

  /**
   * 相机围绕自身中心点向左旋转
   * @param angle 旋转角度 (弧度)
   */
  rotateLeft(angle: number): void;

  /**
   * 相机沿着dir方向平移
   * @param dir 平移的方向
   * @param amount 平移量
   */
  move(dir: Vector3, amount: number): void;

  /**
   * 相机沿着y轴方向平移
   * @param amount 平移量
   */
  moveForward(amount: number): void;

  /**
   * 相机沿着y轴反方向平移
   * @param amount 平移量
   */
  moveBackward(amount: number): void;

  /**
   * 相机沿着z轴方向平移
   * @param amount 平移量
   */
  moveUp(amount: number): void;

  /**
   * 相机沿着z轴反方向平移
   * @param amount 平移量
   */
  moveDown(amount: number): void;

  /**
   * 相机沿着x轴方向平移
   * @param amount 平移量
   */
  moveRight(amount: number): void;

  /**
   * 相机沿着x轴反方向平移
   * @param amount 平移量
   */
  moveLeft(amount: number): void;

  /**
   * 相机的每一个方向(x、y、z)分别围绕axis轴旋转
   * @param axis 围绕轴
   * @param angle 旋转角度 (弧度)
   */
  look(axis: Vector3, angle: number): void;

  /**
   * 相机围绕x轴旋转
   * @param angle 旋转角度 (弧度)
   */
  lookUp(angle: number): void;

  /**
   * 相机围绕x轴反方向旋转
   * @param angle 旋转角度 (弧度)
   */
  lookDown(angle: number): void;

  /**
   * 相机围绕z轴旋转
   * @param angle 旋转角度 (弧度)
   */
  lookRight(angle: number): void;

  /**
   * 相机围绕z轴反方向旋转
   * @param angle 旋转角度 (弧度)
   */
  lookLeft(angle: number): void;

  /**
   * 相机沿着y轴反方向平移
   * @param amount 平移量
   */
  zoomIn(amount: number): void;

  /**
   * 相机沿着y轴方向平移
   * @param amount 平移量
   */
  zoomOut(amount: number): void;

  /**
   * 重置相机
   */
  reset(): void;

  /**
   * 飞到目标点
   * @param destination 制图空间的目标点
   * @param duration 飞行时间，单位为秒
   * @param heading 最终状态的转向角，单位为度
   * @param pitch 最终状态的俯仰角，单位为度
   * @param roll 最终状态的翻滚角，单位为度
   */
  flyTo(destination: Vector3, duration: number, heading: number, pitch: number, roll: number): Future;

  /**
   * 飞到目标点
   * @param destination 制图空间的目标点
   * @param duration 飞行时间，单位为秒
   * @param heading 最终状态的转向角，单位为度
   * @param pitch 最终状态的俯仰角，单位为度
   * @param roll 最终状态的翻滚角，单位为度
   */
  flyToCartographic(destination: Cartographic, duration: number, heading: number, pitch: number, roll: number): Future;

  /**
   * 飞到矩形范围
   * @param destination 制图空间的目标矩形范围
   * @param duration 飞行时间，单位为秒
   * @param heading 最终状态的转向角，单位为度
   * @param pitch 最终状态的俯仰角，单位为度
   * @param roll 最终状态的翻滚角，单位为度
   */
  flyToRectangle(destination: Rectangle, duration: number, heading: number, pitch: number, roll: number): Future;

  /**
   * 拾取, 同样适用于地下模式的拾取
   * @param x 屏幕坐标的X值
   * @param y 屏幕坐标的Y值
   */
  pickGlobe(x: number, y: number): Cartesian3;
}
