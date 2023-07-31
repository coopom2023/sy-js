import type { Future } from '../base/Future'
import type { Matrix4 } from '../base/Matrix4'
import type { Rectangle } from '../base/Rectangle'
import type { Component } from '../scene/Component'
import type { TilesetStyle } from './TilesetStyle'

/**
 * 3dtileset对象，用于加载3dtiles模型
 * @example
 * let tileset= new SSmap.Tileset(url);
 * var entity = new SSmap.Entity();
 * entity.addComponent(tilesetLayer);
 * GlobalViewer.scene.addEntity(entity);
 */
export class Tileset extends Component {
  /** 获取3dtiles的url */
  readonly url: string

  /** 异步加载完成的结果 */
  readyPromise: Future

  /** 获取3dtiles的矩形范围 */
  readonly rectangle: Rectangle

  /** 获取或者设置3dtiles的四维矩阵 */
  modelMatrix: Matrix4

  /** 获取或者设置3dtiles是否以流模式加载，默认：true */
  streamingMode: boolean

  /** 获取或者设置3dtiles是否跳过LOD节点加载，默认：true */
  skipLevelOfDetail: boolean

  /** 获取或者设置3dtiles是否裁切LOD，默认：true */
  clipLevelOfDetail: boolean

  /** 获取或者设置3dtiles不显示低于某级的LOD，默认：0 */
  skipLevelOfRenderable: number

  /** 获取或者设置3dtiles的几何误差比例，默认：1 */
  geometricErrorScale: number

  /** 获取或者设置3dtiles是否重新计算法线，默认：false */
  genMeshNormals: boolean

  /** 获取或者设置3dtiles样式的表达式 */
  style: TilesetStyle

  /** 获取或者设置3dtiles的最大内存使用量，默认：512(MB)，可增到1024 */
  maximumMemoryUsage: number

  /** 获取或者设置3dtiles是否只读取ID属性，默认：false */
  readIDPropertyOnly: boolean

  /**
   * 实例
   * @param url tile地址
   */
  constructor(url: string)
}
