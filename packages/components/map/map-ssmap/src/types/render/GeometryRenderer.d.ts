import { GeometryRendererType } from '../../enums/GeometryRendererType'
import { PrimitiveType } from '../../enums/PrimitiveType'
import type { Component } from '../scene/Component'
import type { BoundingVolume } from '../base/BoundingVolume'
import type { Buffer } from './Buffer'
import type { Geometry } from './Geometry'
import type { Material } from './Material'

/**
 * GeometryRenderer是对几何体（Geometry）进行渲染的信息合集，包括用什么材质，渲染几何体的哪一部分顶点数据，图元方式（点、线、面），渲染顺序等。
 * @example
 * // 创建几何渲染器
 * var renderer = new SSmap.GeometryRenderer();
 * // 投射阴影
 * renderer.castShadow = true;
 * // 符号类型渲染
 * renderer.type = SSmap.GeometryRendererType.Symbol;
 * // openGL PrimitiveType： 线带
 * renderer.primitiveType = SSmap.PrimitiveType.LineStrip;
 * renderer.geometry = geometry;
 * renderer.material = material;  
 * var entity = new SSmap.Entity();
 * entity.addComponent(renderer);
 * scene.addEntity(entity);
 */
export class GeometryRenderer extends Component {
  /** 获取或者设置几何渲染顺序类型，默认：Opaque */
  type: GeometryRendererType
  /** 获取或者设置图元类型，默认：TriangleList */
  primitiveType: PrimitiveType
  /** 获取或者设置渲染的Instance数量，默认：0 */
  instanceCount: number
  /** 获取或者设置渲染的图元数量，默认：0 */
  primitiveCount: number
  /** 获取或者设置渲染的顶点或索引偏移值，默认：0 */
  indexOffset: number
  /** 获取或者设置渲染的开始Instance值，默认：0 */
  firstInstance: number
  /** 获取或者设置渲染的开始顶点或索引值，默认：0 */
  firstVertex: number
  /** 获取或者设置是否投射阴影，默认：false */
  castShadow: boolean
  /** 获取或者设置是否接受阴影，默认：false */
  receiveShadow: boolean
  /** 获取或者设置物体的包围体（世界坐标系） */
  boundingVolume: BoundingVolume
  /** 获取或者设置渲染用的Instance属性对象 */
  instanceBuffer: Buffer
  /** 获取或者设置渲染用的几何体 */
  geometry: Geometry
  /** 获取或者设置渲染用的材质 */
  material: Material
}
