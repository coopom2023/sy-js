import type { Node } from '../base/Node'
import type { GeometryAttribute } from './GeometryAttribute'

/**
 * Geometry是对几何体顶点数据以及索引数据的封装，是由索引缓存（Buffer）和一组几何属性（GeometryAttribute）组成，提供给GeometryRenderer使用。如果几何属性列表中包含有GeometryAttribute::defaultPositionAttributeName属性，就能够被自动计算包围盒。
 * @example
 * // 创建集合体
 * let geometry = new SSmap.Geometry();
 * geometry.addAttribute(posAttr);
 */
export class Geometry extends Node {
  /**
   * 获取或者设置索引缓存对象
   */
  indexBuffer: Buffer
  
  /**
   * 添加几何属性对象，添加的顺序必须与Shader里绑定的顺序一致
   * @param attribute 几何属性
   */
  addAttribute(attribute: GeometryAttribute): boolean;
}
