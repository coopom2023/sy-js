/**
 * 环境光遮蔽的对象。
 * @example
 * let ao = GlobalViewer.renderSystem.ssao;
 */
export class AmbientOcclusion {
  /** 获取或者设置环境光遮蔽是否开启，默认：true */
  enabled: boolean
  /** 获取或者设置质量，默认：2 */
  quality: number
  /** 获取或者设置半径，默认：2 */
  radius: number
  /** 获取或者设置数量，默认：2.200000047683716 */
  amount: number
  /** 获取或者设置渐入时间，默认：0.6570000052452087 */
  fadeIn: number
}
