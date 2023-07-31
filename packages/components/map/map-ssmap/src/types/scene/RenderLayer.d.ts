import { RenderStyle } from '../../enums'
import type { Node } from '../base'

/**
 * 
 */
export class RenderLayer extends Node {
  /** 获取或者设置颜色，默认值{200，200，200，255} */
  color: Color
  /** 获取或者设置渲染样式，枚举类型，改变该属性会调用 changStyle() 虚函数，默认值 ：TextureStyle */
  renderStyle: RenderStyle
}
