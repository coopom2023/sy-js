import type { Color } from '../base/Color'
import type { Feature } from '../base/Feature'
import type { FeatureFuture } from '../base/FeatureFuture'
import type { Ray } from '../base/Ray'
import type { Vector3 } from '../base/Vector3'
import type { FeatureVector } from '../container/FeatureVector'
import type { Globe } from '../globe/Globe'
import type { Atmosphere } from '../scene/Atmosphere'
import type { Camera } from '../scene/Camera'
import type { Canvas } from '../scene/Canvas'
import type { Entity } from '../scene/Entity'
import type { Fog } from '../scene/Fog'
import type { RaycastHit } from '../scene/RaycastHit'
import type { Skybox } from '../scene/Skybox'
import type { Sun } from '../scene/Sun'
import type { UndergroundPrimitive } from '../scene/UndergroundPrimitive'
import type { IndirectLight } from '../render/IndirectLight'

/**
 * 场景对象。
 * @example
 * let scene = GlobalViewer.scene;
 * var ray = scene.mainCamera.screenPointToRay(e.x, e.y);
 * var hit = new SSmap.RaycastHit();
 * let result = null;
 * if (scene.raycast(ray, hit)) {
 *   console.log('hit');
 *   // 获取射和实体的交点
 *   result = hit.point.toCartographic();
 * }
 * hit.delete();
 */
export class Scene {
  /** 获取Canvas画布 */
  readonly canvas: Canvas
  /** 获取场景中的根实对象 */
  readonly rootEntity: Entity
  /** 获取场景中的主相机对象 */
  readonly mainCamera: Camera
  /** 获取场景中的天空盒对象 */
  readonly skybox: Skybox
  /** 获取场景中的太阳对象 */
  readonly sun: Sun
  /** 获取场景中的环境光对象 */
  readonly indirectLight: IndirectLight
  /** 获取场景中的大气层对象 */
  readonly atmosphere: Atmosphere
  /** 获取场景中的雾对象 */
  readonly fog: Fog
  /** 获取场景中的地球对象 */
  readonly globe: Globe
  /** 获取场景中的地下格网对象 */
  readonly undergroundPrimitive: UndergroundPrimitive

  /**
   * 添加实体
   * @param entity 实体对象
   */
  addEntity(entity: Entity): void;

  /**
   * 发射一条能拾取的射线，拾取成功返回true，失败返回false
   * @param ray 射线
   * @param hit 射线击中实体后的返回对象
   */
  raycast(ray: Ray, hit: RaycastHit): boolean;

  /**
   * 获取鼠标点击位置的世界坐标
   */
  getWorldPositionByMouse(): Vector3;

  /**
   * 异步获取鼠标点击位置的Feature
   * @param x x
   * @param y y
   */
  pickFeature(x: number, y: number): FeatureFuture;

  /**
   * 获取鼠标点击实体的特征
   */
  getFeatureByMouse(): Feature;

  /**
   * 通过id获取对应的Feature集合
   * @param id id索引
   */
  getFeaturesById(id: string): FeatureVector;

  /**
   * 获取当前选中的特征
   */
  selectedFeature(): Feature;

  /**
   * 设置当前选中的特征
   * @param feature 特征
   */
  setSelectedFeature(feature: Feature): void;

  /**
   * 获取选中特征的颜色
   */
  featureSelectedColor(): Color;

  /**
   * 设置选中特征的颜色
   * @param color 特征
   */
  setFeatureSelectedColor(color: Color): void;
}
