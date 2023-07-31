/** 颜色范围 */
export type RgbaColorRange = NumericRange<0, 255>

/** rgba颜色 */
export type RgbaColor = {
  /** 红色 */
  red: RgbaColorRange;
  /** 绿色 */
  green: RgbaColorRange;
  /** 蓝色 */
  blue: RgbaColorRange;
  /** 透明度 */
  alpha: RgbaColorRange;
}

/** rgb颜色 */
export type RgbColor = {
  /** 红色 */
  red: RgbaColorRange;
  /** 绿色 */
  green: RgbaColorRange;
  /** 蓝色 */
  blue: RgbaColorRange;
}
