import type { Node } from '../base/Node'

/**
 * Component是ECS架构的基础类，是其它功能模块组件的基类，实现了一些基本函数，该类本身并不会实体化,不会直接调用
 */
export class Component extends Node {
  /** 获取该Component依附的entity */
  entity: Entity
  /** 获取entity中的transform组件 */
  transform: Transform
  /** 获取entity中的renderer组件 */
  renderer: GeometryRenderer
  /** 获取entity中的camera组件 */
  camera: Camera
  /** 获取entity中的animation组件 */
  animator: Animator

  /**
   * 添加component组件
   * @param component component组件
   */
  addComponent(component: Component): void;
  /**
   * 移除
   */
  delete(): void;
}
