import type { Cartesian4 } from './Cartesian4'

/**
 * 四维坐标点
 * @example
 * let vec4 = SSmap.Vector4.create(x,y,z,w);
 */
export class Vector4 {
  /** 第一个参数 */
  x: number
  /** 第二个参数 */
  y: number
  /** 第三个参数 */
  z: number
  /** 第四个参数 */
  w: number

  /** 转为Cartesian4格式 */
  toCartesian4(): Cartesian4;
  /**
   * 静态函数，通过四个元素构造Vector4，直接SSmap.Vector4.fromElements(xpos, ypos, zpos, wpos)进行调用
   * @param xpos x值
   * @param ypos y值
   * @param zpos z值
   * @param wpos w值
   */
  static fromElements(xpos: number, ypos: number, zpos: number, wpos: number): Vector4;
  /**
   * 静态函数，创建Vector4，直接SSmap.Vector4.create(xpos, ypos, zpos, wpos)进行调用
   * @param xpos x值
   * @param ypos y值
   * @param zpos z值
   * @param wpos w值
   */
  static create(xpos: number, ypos: number, zpos: number, wpos: number): Vector4;
}
