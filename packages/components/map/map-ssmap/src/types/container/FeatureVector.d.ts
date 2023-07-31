import type { Feature } from '../base/Feature'

/**
 * 特征类型的向量集合
 * @example
 * let vec = new SSmap.FeatureVector();
 * vec.push_back(feature1);
 * vec.push_back(feature2);
 * //[feature1,feature2];
 */
export class FeatureVector {
  /**
   * 取值
   * @param idx 索引
   */
  get(idx: number): Feature;
  /**
   * 获得向量的大小
   */
  size(): number;
  /**
   * 从末尾添加特征
   * @param feature 需添加的特征
   */
  push_back(feature: Feature): void;
  /**
   * 添加一项
   * @param idx 索引位置
   * @param feature 需添加的特征
   */
  set(idx: number, feature: Feature): void;
}
