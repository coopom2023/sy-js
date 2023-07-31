import Map from 'ol/Map.js'

export type MapOpenLayersProps = {
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

export type MapOpenLayersEmits = {
  (e: 'load', map: Map): void;
}
