import type { ByteArray } from '../base/ByteArray'
import type { Node } from '../base/Node'

/**
 * Buffer是渲染模块的核心类，是对OpenGL中的Buffer的封装，提供接口在GPU中创建一块缓存，比如顶点缓存、索引缓存、Shader变量缓存等
 * @example
 * let bArray = new SSmap.ByteArray(4*32);
 * let buffer = new SSmap.Buffer.setData(bArray);
 * // or
 * // console.log(earcutArray);
 * // var originIndices = earcut(earcutArray,null,3); //耳切法进行三角化，返回顶点索引
 * // console.log('oriIndices:'+originIndices);
 * // var indices = new Uint16Array(originIndices.length);
 * // for(var j = 0;j<originIndices.length;j++) {
 * //   indices[j] = originIndices[j];
 * // }
 * // var indexBuffer = SSmap.Buffer.createIndexBuffer(indices,2);
 */
export class Buffer extends Node {
  /**
   * 设置Buffer的用户填充数据
   * @param bArray 用户填充数据
   */
  setData(bArray: ByteArray): void;
  /**
   * 静态方法，创建顶点缓存，直接SSmap.Buffer.createVertexBuffer(data,strideInBytes)进行调用
   * @param data 顶点数组
   * @param strideInBytes 单个顶点数据的字节数
   */
  static createVertexBuffer(data: number[], strideInBytes: number): Buffer;
  /**
   * 静态方法，创建索引缓存，直接SSmap.Buffer.createIndexBuffer(data,strideInBytes)进行调用
   * @param data 索引数组
   * @param strideInBytes 单个索引数据的字节数
   */
  static createIndexBuffer(data: number[], strideInBytes: number): Buffer;
}
