/**
 * FeatureFutureFuture相同，区别在于传入的函数可以带一个Feature的参数
 * @example
 * // 假设entity中有StringFuture类型的属性
 * entity.f.then(function(feature) {
 *   console.log('feature size is:' + feature.propertyNames().size());
 * });
 */
export class FeatureFuture {
  /**
   * then内传入函数后，会在异步加载完成时触发
   * @param fn 带Feature入参的函数
   */
  then(fn: Function): void
}
