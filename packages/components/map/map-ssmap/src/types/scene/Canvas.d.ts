/**
 * 三维场景绘制的画布，初始化时会自动生成，不能单独创建
 * @example
 * let canvas = GlobalViewer.canvas;
 * console.log(canvas.width);
 */
export class Canvas {
  /** 左上角x坐标 */
  readonly x: int
  /** 左上角y坐标 */
  readonly y: int
  /** 宽 */
  readonly width: int
  /** 高 */
  readonly height: int
  /** 实际宽度，width+padding */
  readonly clientWidth: int
  /** 实际高度，height+padding */
  readonly clientHeight: int
  /** 是否禁用根事件 */
  readonly disableRootEvents: boolean
}
