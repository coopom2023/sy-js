import type { Node } from './Node'

/**
 * 特征对象，用于拾取
 */
export class Feature extends Node {
  /**
   * 获取Feature的包围体
   */
  readonly boundingVolume: BoundingVolume

  /**
   * 是否包含某个属性
   * @param name 属性名称
   */
  hasProperty(name: string): boolean;

  /**
   * 获取属性值列表
   */
  propertyNames(): StringVector;
  /**
   * 添加属性项
   * @param name 属性名称
   * @param value 属性值
   */
  setProperty(name: string, value: string): void;
  /**
   * 获取属性值
   * @param name 属性名称
   */
  getProperty(name: string): string;
}
