/**
 * ImageFuture和Future相同，区别在于传入的函数可以带一个Image的参数
 * @example
 * // 假设entity中有ImageFuture类型的属性
 * entity.f.then(function(image){
 *   console.log("image's width is:"+image.width);
 * });
 */
export class ImageFuture {
  /**
   * then内传入函数后，会在异步加载完成时触发
   * @param fn 带Image入参的函数
   */
  then(fn: Function): void;
}
