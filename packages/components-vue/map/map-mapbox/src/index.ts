export type MapMapBoxProps = {
  /** mapbox token */
  accessToken: string;
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
}

export type MapMapBoxEmits = {
  /** 加载成功事件 */
  (e: 'load', map: mapboxgl.Map): void
}
