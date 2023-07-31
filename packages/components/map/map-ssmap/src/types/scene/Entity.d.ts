import type { Node } from '../base/Node'
import type { EntityVector } from '../container/EntityVector'
import type { GeometryRenderer } from '../render//GeometryRenderer'
import type { Component } from './Component'
import type { Transform } from './Transform'

/**
 * Entity是ECS架构的核心类，是component组件的容器，一个Entity拥有什么样的component组件，就拥有什么样的功能Entity默认只有一个Transform组件,场景是由不同的entity组成，而Entity是由不同的Component组成,Entity有父子层级结构，Scene场景默认有一个根Entity，任何添加到场景的Entity，都会成为根Entity的子Entity
 * @example
 * let entity = new SSmap.Entity();
 * entityl.addComponent(cpn);
 * GlobalViewer.scene.addEntity(entity);
 */
export class Entity extends Node {
  /** 获取或者设置tag，可用于属性拾取，默认："" */
  tag: string
  /** 获取父entity对象，默认：null */
  parentEntity: Entity
  /** 获取所有的子entity合集，该函数有一定的消耗，尽量不要在每帧更新里调用 */
  readonly childEntities: EntityVector
  /** 返回transform组件 */
  readonly transform: Transform
  /** 返回renderer组件 */
  readonly renderer: GeometryRenderer
  /** 返回camera组件 */
  readonly camera: Camera
  /** 返回light组件 */
  readonly light: Light
  /** 返回rigidbody组件 */
  readonly rigidBody: RigidBody
  /** 返回skin组件 */
  readonly skin: Skin
  /** 返回Animator组件 */
  readonly animator: Animator

  /**
   * 添加一个新的component组件，如果该component已经存在，则不会被再次添加 如果component没有父物体，该entity会变成component的父物体
   * @param component 添加的component组件
   */
  addComponent(component: Component): void;
  /** 移除 */
  delete(): void;
  /**
   * 移除component，component被移除并不会被删除释放，需要手动删除释放
   * @param component 添加的component组件
   */
  removeComponent(component: Component): void;
  /** 静态方法，返回场景的根entity，直接SSmap.Entity.root()进行调用 */
  static root(): Entity;
  /**
   * 遍历entity下每个子孙entity
   * @param fp 带Entity入参的函数
   */
  travalHierarchy(fp: (entity: Entity) => void): void;
  /**
   * 遍历获取entity下每个子孙entity的renderer
   * @param fp 带GeometryRenderer入参的函数
   */
  travalRenderers(fp: () => void): void;
}
