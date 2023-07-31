import type { Node } from '../base/Node'
import type { Material } from './Material'

/**
 * PostProcess是后期处理对象，配合ShaderProgram可自定义实现后期特效。
 * @example
 * let postProcess = new SSmap.PostProcess();
 */
export class PostProcess extends Node {
  /**
   * 材质对象
   */
  material: Material
}
