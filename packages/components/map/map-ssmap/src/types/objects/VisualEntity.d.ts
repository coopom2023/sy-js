import { AltitudeMethod } from '../../enums/AltitudeMethod'
import type { Feature } from '../base/Feature'
import type { Vector2 } from '../base/Vector2'
import type { Vector4 } from '../base/Vector4'
import type { Entity } from '../scene/Entity'
import type { StringMap } from '../container/StringMap'

/**
 * 点线面等对象的基础类
 * @example
 * let entity = new SSmap.VisualEntity();
 * entity.addComponent(cpn);
 * GlobalViewer.scene.addEntity(entity);
 */
export class VisualEntity extends Entity {
  /** 透明度 */
  alpha: number
  /** 获取脏标识，true:需要更新， false:无需更新 */
  dirty(): boolean;
  /**
   * 设置脏标识
   * @param dirty 脏标识，true:需要更新， false:无需更新
   */
  setDirty(dirty: boolean): boolean;
  /**
   * 获取VisualEntity的海拔高度
   */
  altitude(): number;
  /**
   * 设置VisualEntity的海拔高度
   * @param alti 海拔高度
   */
  setAltitude(alti: number): void;
  /**
   * 获取VisualEntity的海拔模式
   */
  altitudeMethod(): AltitudeMethod;
  /**
   * 设置VisualEntity的海拔模式
   * @param altiMethod 海拔模式
   */
  setAltitudeMethod(altiMethod: AltitudeMethod): void;
  /**
   * 获取缩放的距离数值,返回Vector4(近距离的值（x）,近距离的缩放值（y）和远距离的值（z），远距离的缩放值（w）)
   */
  scaleByDistance(): Vector4;
  /**
   * 设置缩放的距离数值
   * @param dist 缩放的距离数值Vector4(近距离的值（x）,近距离的缩放值（y）和远距离的值（z），远距离的缩放值（w）)
   */
  setScaleByDistance(dist: Vector4): void;
  /**
   * 获取半透明的范围,返回Vector4(近距离的值（x）,近距离的范围（y）和远距离的值（z），远距离的范围（w）)
   */
  translucencyByDistance(): Vector4;
  /**
   * 设置半透明的范围
   * @param dist 半透明的范围(近距离的值（x）,近距离的范围（y）和远距离的值（z），远距离的范围（w）)
   */
  setTranslucencyByDistance(dist: Vector4): void;
  /**
   * 获取可视距离的范围（区间内可见）,返回Vector2(近距离的值（x）,远距离的值（y）)
   */
  distanceDisplayCondition(): Vector2;
  /**
   * 设置可视距离的范围（区间内可见）
   * @param dist 可视距离的范围(近距离的值（x）,远距离的值（y））
   */
  setDistanceDisplayCondition(dist: Vector2): void;
  /**
   * 添加属性
   * @param key 属性的键
   * @param value 属性的值
   */
  addProperty(key: string, value: string): void;
  /**
   * 添加属性集合
   * @param properyMap 属性集合(键值均为string的映射表)
   */
  setProperties(properyMap: StringMap): void;
  /**
   * 设置特征
   * @param feature 特征
   */
  setFeature(feature: Feature): void;
}
