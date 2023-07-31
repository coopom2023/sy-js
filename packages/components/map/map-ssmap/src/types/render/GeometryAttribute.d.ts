import type { Node } from '../base/Node'
import type { Buffer } from './Buffer'

/**
 * GeometryAttribute描述如何从Buffer中读取数据，绑定到OpenGL渲染管线中的顶点数据单元。最常见的顶点数据包含Position, Normal, TexCoord数据属性。
 * @example
 * var vertexBuffer = SSmap.Buffer.createVertexBuffer(vertexArray, stripSize);
 * var posAttr = SSmap.GeometryAttribute.createPositionAttribute(vertexBuffer, 0, 3);
 */
export class GeometryAttribute extends Node {
  /**
   * 静态方法，按照当前设置好的参数，创建几何属性对象，直接SSmap.GeometryAttribute.create()进行调用
   */
  static create(): GeometryAttribute;
  /**
   * 静态方法，创建Position顶点数据属性，直接SSmap.GeometryAttribute.createPositionAttribute(buffer,offsetBytes,components)进行调用
   * @param buffer 创建Position顶点数据属性
   * @param offsetBytes 在顶点数据缓存中的字节偏移量
   * @param components 顶点属性的通道数量
   */
  static createPositionAttribute(buffer: Buffer, offsetBytes: number, components: number): GeometryAttribute;
  /**
   * 静态方法，创建Normal顶点数据属性，直接SSmap.GeometryAttribute.createNormalAttribute(buffer,offsetBytes,components)进行调用
   * @param buffer 创建Position顶点数据属性
   * @param offsetBytes 在顶点数据缓存中的字节偏移量
   * @param components 顶点属性的通道数量
   */
  static createNormalAttribute(buffer: Buffer, offsetBytes: number, components: number): GeometryAttribute;
  /**
   * 静态方法，创建Tangent顶点数据属性，直接SSmap.GeometryAttribute.createTangentAttribute(buffer,offsetBytes,components)进行调用
   * @param buffer 创建Position顶点数据属性
   * @param offsetBytes 在顶点数据缓存中的字节偏移量
   * @param components 顶点属性的通道数量
   */
  static createTangentAttribute(buffer: Buffer, offsetBytes: number, components: number): GeometryAttribute;
  /**
   * 静态方法，创建TexCoord顶点数据属性，直接SSmap.GeometryAttribute.createTexCoordAttribute(buffer,offsetBytes,components)进行调用
   * @param buffer 创建Position顶点数据属性
   * @param offsetBytes 在顶点数据缓存中的字节偏移量
   * @param components 顶点属性的通道数量
   */
  static createTexCoordAttribute(buffer: Buffer, offsetBytes: number, components: number): GeometryAttribute;
}
