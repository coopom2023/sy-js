import type { RgbaColor } from '@/types/common'

/** 测量配置 */
export type MeasureAreaOption = {
  /** 是否显示提示信息，默认true */
  showTips?: boolean;
  /** 提示信息内容，默认 左键获取，右键结束 */
  tipsText?: string;
  /** 线宽，默认 2.5 */
  lineWidth?: number;
  /** 线颜色，默认红色 */
  lineColor?: RgbaColor;
  /** 填充颜色 */
  fillColor?: RgbaColor;
  /** 填充透明度，范围 [0, 1] */
  fillAlpha?: number;
  /** 多边形线颜色 */
  color?: RgbaColor;
  /** 多边形线透明度，范围 [0, 1] */
  alpha?: number;
}
