import type { Feature } from '../base/Feature'
import type { Tileset } from './Tileset'

/**
 * 3dtiles的特征对象，用于3dtiles的样式的表达式，配合 TileStyle 使用
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
export class TileFeature extends Feature {
  /** 获取属性对应的tileset对象 */
  readonly tileset: Tileset
}