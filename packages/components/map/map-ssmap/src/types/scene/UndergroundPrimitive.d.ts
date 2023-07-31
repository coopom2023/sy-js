import type { Component } from './Component'

/**
 * 地下网格平面，是一个无限大的网格，会随着摄像机的位置自动延伸。
 * @example
 * let ugp = GlobalViewer.scene.undergroundPrimitive;
 */
export class UndergroundPrimitive extends Component {
  /** 获取或者设置高度，默认：-1000 */
  height: number
  /** 获取或者设置相机可见高度，默认：2000 */
  visibleCameraHeight: number
  /** 获取或者设置网格数，默认：600 */
  primitiveCount: number
}
