import type { SSmapType } from '@sy-js/components'
export { SSmapUtils } from '@sy-js/components'

export type MapSSmapsProps = {
  /**
   * 数生地图文件地址，默认直接使用数生服务，需代理 https://examples.dataarche.com/sdkcode/
   * @example
   * '/sdkcode': {
   *   target: 'https://examples.dataarche.com',
   *   changeOrigin: true,
   * }
   */
  path?: string;
  /**
   * 是否初始化，默认true
   */
  init?: boolean;
}

export type MapSSmapEmits = {
  /** 加载成功事件 */
  (e: 'load', viewer: SSmapType.Viewer): void
}

export type { SSmapType }
