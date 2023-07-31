import type { Cartesian3 } from '../base/Cartesian3'

/**
 * Cartesian3类型的向量集合
 * @example
 * let vec = new SSmap.Cartesian3Vector();
 * vec.push_back(cartesian1);
 * vec.push_back(cartesian2);
 * //[cartesian1,cartesian2];
 */
export class Cartesian3Vector {
  /** 移除 */
  delete(): void;
  /**
   * 取值
   * @param idx 索引
   */
  get(idx: numnber): Cartesian3;
  /**
   * 获得向量的大小
   */
  size(): number;
  /**
   * 从末尾添加笛卡尔坐标
   * @param cartesian 需添加的笛卡尔坐标
   */
  push_back(cartesian: Cartesian3): void;
  /**
   * 添加一项
   * @param idx 索引
   * @param cartesian 需添加的笛卡尔坐标
   */
  set(idx: number, cartesian: Cartesian3): void;
}
