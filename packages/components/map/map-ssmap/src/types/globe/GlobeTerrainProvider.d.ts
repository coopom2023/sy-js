/**
 * 地球地形接口对象
 * @example
 * let globe = Globalviewer.scene.globe;
 * globe.setTerrainProviderUrl('terrain_url').then(function() {
 *   let terrainProvider = globe.terrainProvider;
 *   terrainProvider.setHeader('name', 'value');
 *   terrainProvider.requestWaterMask = false;
 * });
 */
export class GlobeTerrainProvider {
  /** 获取或者设置是否请求顶点向量，默认：true */
  requestVertexNormals: boolean
  /** 获取或者设置是否请求水面，默认：true */
  requestWaterMask: boolean

  /**
   * 设置地形服务的header
   * @param name header的键
   * @param value header的值
   */
  setHeader(name: string, value: string): void;
}
