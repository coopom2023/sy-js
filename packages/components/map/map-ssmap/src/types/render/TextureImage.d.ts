import { PixelFormat } from '../../enums/PixelFormat'
import { TextureFormat } from '../../enums/TextureFormat'
import { PixelType } from '../../enums/PixelType'
import { Component } from '../scene/Component'

/**
 * TextureImage是对纹理图像数据的封装，属于cpu端的图像数据。数据可以是从外部文件加载，也可以从内存中创建，或者由QImage填充。
 * @example
 * var texImage = new SSmap.TextureImage();
 */
export class TextureImage extends Component {
  /** 获取或者设置图像的宽度 */
  width: number
  /** 获取或者设置图像的高度 */
  height: number
  /** 获取或者设置图像的深度，默认：1 */
  depth: number
  /** 获取或者设置图像的层数，默认：1 */
  layers: number
  /** 获取或者设置图像的MipMap数量，默认：1 */
  mipLevels: number
  /** 获取或者设置图像的格式，默认：RGBA8_UNorm */
  textureFormat: TextureFormat
  /** 获取或者设置图像的像素格式，默认：RGBA */
  pixelFormat: PixelFormat
  /** 获取或者设置图像的像素类型，默认：UInt8 */
  pixelType: PixelType
}
