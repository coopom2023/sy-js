import type { VisualEntity } from '../objects/VisualEntity'
import type { Billboard } from './Billboard'

/**
 * billboard 合集，把合集内的billboard做统一处理，压缩后传给shader，在shader中进行处理。
 * @example
 * let bbCollection = SSmap.BillboardCollection.Instance();
 * //或者
 * let bbCollection1 = new SSmap.BillboardCollection();
 */
export class BillboardCollection extends VisualEntity {
  /**
   * 把一个billboard加入合集中
   * @param bb BillBoard对象
   */
  add(bb: Billboard): number;
  /**
   * 合集中移除一个billboard
   * @param bb BillBoard对象
   */
  remove(bb: Billboard): void;
  /**
   * 移除合集中所有的billboard
   */
  removeAll(): number;
  /**
   * 返回合集是否设置了深度检测
   */
  depthTest(): boolean;
  /**
   * 设置合集是否进行深度检测
   * @param depthTest 深度检测
   */
  setDepthTest(depthTest: boolean): void;
  /**
   * 静态方法，获取BillboardCollection的实例,直接SSmap.BillboardCollection.Instance()进行调用
   */
  static Instance(): BillboardCollection;
}
