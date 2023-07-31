import type { Color } from '../base/Color'
import type { Node } from '../base/Node'
import type { TileFeature } from './TileFeature'

/**
 * 用于3dtiles的样式的表达式，配合 TileFeature 使用
 * @example
 * let style = new SSmap.TilesetStyle();
 * style.show = function(feature){
 *   let name = feature.getProperty("visible");
 *   return name.indexOf("yes")>=0;
 * }
 * style.color = function(feature){
 *   let height = feautre.getProperty("height");
 *   return Number(height) >=100.0?SSmap.Color.fromRgb(255,0,0,255):SSmap.Color.fromRgb(0,255,0,255);
 * }
 * let tileset = new SSmap.Tileset(url);
 * tileset.style = style;
 * tileset.markStyleDirty();
 */
export class TilesetStyle extends Node {
  /** 设置显隐的函数(入参为TileFeature,返回为bool),默认：true */
  show(tileFeature: TileFeature): boolean

  /** 设置颜色的函数(入参为TileFeature,返回为Color) */
  color(tileFeature: TileFeature): Color

  /** 设置饱和度的函数(入参为TileFeature,返回为number),默认：1 */
  saturation(tileFeature: TileFeature): number

  /** 设置对比度的函数(入参为TileFeature,返回为number)，默认：1 */
  contrast(tileFeature: TileFeature): number

  /** 设置亮度的函数(入参为TileFeature,返回为number)，默认：1 */
  brightness(tileFeature: TileFeature): number

  /** 设置gamma校正的函数(入参为TileFeature,返回为number)，默认：1 */
  gamma(tileFeature: TileFeature): number

  /** 设置是否使用颜色模式的函数(入参为TileFeature,返回为bool)，默认：false(使用纹理) */
  useOverrideColor(tileFeature: TileFeature): boolean

  /** 设置颜色模式下，颜色的函数(入参为TileFeature,返回为Color)，默认：{255,255,255,255}白色 */
  overrideColor(tileFeature: TileFeature): Color

  /** 设置是否强制替换材质的函数(入参为TileFeature,返回为bool)，默认：false(不替换材质) */
  useOverrideMaterial(tileFeature: TileFeature): boolean

  /** 设置粗糙度的函数(入参为TileFeature,返回为number),默认：1 */
  roughness(tileFeature: TileFeature): number

  /** 设置金属度的函数(入参为TileFeature,返回为number)，默认：0 */
  metallic(tileFeature: TileFeature): number
}
