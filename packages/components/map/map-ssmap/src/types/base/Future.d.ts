/**
 * future类用于模型、图片等需异步加载的对象，在异步加载完成时会触发
 * @example
 * // model中的readyPromise为future类
 * let url = fbxUrl;
 * let srs = 'EPSG:4547';
 * let model = new SSmap.Model(url);
 * model.srs = srs;
 * let entity = new SSmap.Entity();
 * entity.addComponent(model);                 
 * GlobalViewer.scene.addEntity(entity);
 * model.readyPromise.then(function () {
 *   console.log('加载完成')
 * });
 */
export class Future {
  /**
   * then内传入函数后，会在异步加载完成时触发
   * @param fn 函数
   */
  then(fn: Function): void
}
