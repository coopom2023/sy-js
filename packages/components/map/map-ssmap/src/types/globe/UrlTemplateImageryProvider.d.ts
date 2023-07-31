import type { ImageryProvider } from './ImageryProvider'

/**
 * 根据URL模板地址，提供影像切片服务。
 * @example
 * var imageryProvider = new SSmap.UrlTemplateImageryProvider(
 *   url,    // url
 *   true,   // useWebMercator
 *   maxLevel,     // maximumLevel
 *   minLevel,      // minimumLevel
 *   256,    // tileWidth
 *   256,    // tileHeight
 *   true    // hasAlphaChannel
 * );
 * // 自定义瓦片计算方式，使用此方法时，不会自动计算url中的xyz
 * //  imageryProvider.setUrlFunctor(function (x, y, level) {
 * //    var url = "http://xxxx/OGC/Map/SZ_VEC_W4490_bld3d_2021/rest/w_shenzhen3d_2021/EPSG:4490/EPSG:4490:" + (level - 9) + "/" + y + "/" + x +   "?format=image%2Fpng";
 * //    //consolg.log("url" + url);
 * //    //imageryProvider.setImageUrl(x, y, level, url);
 * //    return url;
 * //  })
 * 
 * var imageryLayer = new SSmap.ImageryLayer(imageryProvider, rectangle);
 * 
 * Utils.imageLayer = imageryLayer;
 * globe.addImageryLayer(imageryLayer);
 */
export class UrlTemplateImageryProvider extends ImageryProvider {
  /**
   * 设置请求过程中执行的函数
   * @param fn 带(x,y,level)入参的函数，分别对应影像的x,y和层级
   */
  setUrlFunctor(fn: (x: number, y: number, level: number) => void): void
  /**
   * 设置图片url
   * @param x 图片X编号
   * @param y 图片Y编号
   * @param level 图片层级
   * @param url 图片的url
   */
  setImageUrl(x: number, y: number, level: number, url: string): void
  /**
   * 实例
   * @param url 影像图片地址
   * @param useWebMercator 是否使用墨卡托
   * @param maximumLevel 最大图片层级
   * @param minimumLevel 最小图片层级
   * @param tileWidth 贴片宽度
   * @param tileHeight 贴片高度
   * @param hasAlphaChannel 是否包含透明通道
   */
  constructor(url: string, useWebMercator: boolean, maximumLevel: number, minimumLevel: number, tileWidth: number, tileHeight: number, hasAlphaChannel: boolean)
}
