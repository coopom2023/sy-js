/**
 * ImageryProvider描述ImageryLayer是如何从url服务器上获取影像数据的，提供了影像数据的范围、瓦片大小、坐标系统等信息，同时提供影像数据请求等功能。
 */
export class ImageryProvider {
  /**
   * 设置请求头
   * @param name 请求头的名称
   * @param value 请求头的值
   */
  setHeader(name: string, value: string): boolean;
}
