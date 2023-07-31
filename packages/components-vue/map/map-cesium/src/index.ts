import type { Viewer } from 'cesium'

export type MapCesiumProps = {
  /** 天地图服务key */
  tdtKey: string;
  /**
   * 天地图服务器地址，默认本地，需开启代理
   * @example
   * '/DataServer': {
   *   target: 'http://t0.tianditu.gov.cn',
   *   changeOrigin: true,
   * }
   */
  tdtServer?: string;
  /** 是否飞到深圳 */
  flyToSZ?: boolean;
}

export type MapCesiumEmits = {
  /** 加载成功事件 */
  (e: 'load', map: Viewer): void
}
