import { AlphaMode } from '../../enums/AlphaMode'
import { ShadingModel } from '../../enums/ShadingModel'
import type { Color } from '../base/Color'
import type { Vector2 } from '../base/Vector2'
import type { Vector3 } from '../base/Vector3'
import type { Vector4 } from '../base/Vector4'
import type { Matrix4 } from '../base/Matrix4'
import type { ShaderProgram } from './ShaderProgram'
import type { Texture } from './Texture'
import type { WaterParameters } from './WaterParameters'

/**
 * Material时渲染模块的核心类，渲染材质包含Shader、渲染状态、参数等。
 * @example
 * let Material = new SSmap.Material();
 */
export class Material {
  /** 获取或者设置着色模式，默认：MetallicRoughness */
  shadingModel: ShadingModel
  /** 获取或者设置α模式，默认：不透明 */
  alphaMode: AlphaMode
  /** 获取或者设置透明度，默认：1 */
  opacity: number
  /** 获取或者设置是否透明，默认：false */
  transparent: boolean
  /** 获取或者设置遮罩阈值，默认：0.35 */
  maskThreshold: number
  /** 获取或者设置双面渲染，默认：false */
  bothSided: boolean
  /** 获取或者设置颜色，默认：{255,255,255,255} */
  color: Color
  /** 获取或者设置shader的源码 */
  shaderProgram: ShaderProgram
  /** 获取或者设置纹理 */
  texture: Texture
  /** 获取或者设置粗糙度，默认：0 */
  roughness: number
  /** 获取或者设置金属度，默认：0 */
  metallic: number
  /** 获取或者设置反射率，默认：0 */
  reflectance: number

  /**
   * 设置统一缓冲区对象参数
   * @param name 缓冲名称
   * @param typedarray 字节数组
   */
  setParameterUBO(name: string, typedarray: number[]): void;

  /**
   * 设置Texture参数
   * @param name 缓冲名称
   * @param texture 纹理对象
   */
  setParameterTex(name: string, texture: Texture): void;

  /**
   * 设置浮点参数
   * @param name 缓冲名称
   * @param num 数字
   */
  setParameterFloat(name: string, num: number): void;

  /**
   * 设置二维向量参数
   * @param name 缓冲名称
   * @param vec 二维向量
   */
  setParameterVec2(name: string, vec: Vector2): void;

  /**
   * 设置三维向量参数
   * @param name 缓冲名称
   * @param vec 三维向量
   */
  setParameterVec3(name: string, vec: Vector3): void;

  /**
   * 设置四维向量参数
   * @param name 缓冲名称
   * @param vec 四维向量
   */
  setParameterVec4(name: string, vec: Vector4): void;

  /**
   * 设置四阶矩阵参数
   * @param name 缓冲名称
   * @param matrix 四阶矩阵
   */
  setParameterMat4(name: string, matrix: Matrix4): void;

  /**
   * 设置颜色参数
   * @param name 缓冲名称
   * @param color 颜色
   */
  setParameterColor(name: string, color: Color): void;

  /**
   * 获取材质的水体参数对象
   */
  waterParameters(): WaterParameters;
}
