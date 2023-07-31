import { AntiAliasing } from '../../enums/AntiAliasing'
import type { Color } from '../base/Color'
import type { ImageFuture } from '../base/ImageFuture'
import type { AmbientOcclusion } from '../render/AmbientOcclusion'
import type { PostProcess } from '../render/PostProcess'
import type { PostRendering } from '../render/PostRendering'

/**
 * RenderSystem是Engine的一个子系统，属于ECS架构中的System的一部分，负责所有渲染相关任务的调度和运行。
 * @example
 * let rSystem = GlobalViewer.renderSystem;
 */
export class RenderSystem {
  /** 获取或者设置是否接受光照，默认：true */
  lightingEnabled: boolean
  /** 获取或者设置反锯齿方式，默认值：TAA */
  antiAliasing: AntiAliasing
  /** 获取屏幕空间环境光遮挡SSAO的参数控制对象 */
  readonly ssao: AmbientOcclusion

  /**
   * 返回HDR渲染的后期调色参数控制对象
   */
  postRendering(): PostRendering;

  /**
   * 离线渲染到图像，该函数是后台渲染，要等待返回信号再获取图像,最大图像尺寸为 16384 x 16384
   * @param width 图像的宽度
   * @param height 图像的高度
   */
  renderToImage(width: number, height: number): ImageFuture;

  /**
   * 离线天际线渲染到图像，该函数是后台渲染，要等待返回信号再获取图像,最大图像尺寸为 16384 x 16384
   * @param width 图像的宽度
   * @param height 图像的高度
   * @param lineWidth 天际线的宽度
   * @param lineColor 天际线的颜色
   */
  renderSkyline(width: number, height: number, lineWidth: number, lineColor: Color): ImageFuture;

  /**
   * 添加后期处理对象
   * @param postProcess 后期处理对象
   */
  addPostProcess(postProcess: PostProcess): void;
}
