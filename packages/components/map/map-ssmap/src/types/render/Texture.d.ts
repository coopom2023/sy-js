import { TextureTarget } from '../../enums/TextureTarget'
import { TextureFormat } from '../../enums/TextureFormat'
import type { TextureImage } from './TextureImage'

/**
 * Texture时渲染模块的核心类，提供操作OpenGL纹理的封装。
 * @example
 * let tex = new SSmap.Texture();
 */
export class Texture {
  /** 返回对象目标的类型 */
  readonly target: TextureTarget
  /** 返回对象当前的纹理格式 */
  readonly format: TextureFormat
  /** 获取或者设置纹理的宽度 */
  width: number
  /** 获取或者设置纹理的高度 */
  height: number
  /** 获取或者设置纹理的深度，默认：1 */
  depth: number
  /** 获取或者设置纹理的层数，默认：1 */
  layers: number

  /**
   * 添加纹理图像数据
   * @param image 纹理图像
   */
  addTextureImage(image: TextureImage): boolean;
}
