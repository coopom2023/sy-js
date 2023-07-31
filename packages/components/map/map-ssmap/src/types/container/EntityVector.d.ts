import type { Entity } from '../scene/Entity'

/**
 * Entity类型的向量集合
 * @example
 * let vec = new SSmap.EntityVector();
 * vec.push_back(entity1);
 * vec.push_back(entity2);
 * // [entity1,entity2];
 */
export class EntityVector {
  /**
   * 取值
   * @param idx 索引
   */
  get(idx: number): Entity;
  /** 获得向量的大小 */
  size(): number;
  /**
   * 从末尾添加Entity
   * @param entity 需添加的Entity
   */
  push_back(entity: Entity): void;
  /**
   * 添加一项
   * @param idx 索引位置
   * @param entity 需添加的Entity
   */
  set(idx: number, entity: Entity): void;
}
