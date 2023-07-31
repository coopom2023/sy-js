// /** 经度范围 */
// type LongitudeRange = NumericRange<-180, 180>
// /** 纬度范围 */
// type LatitudeRange = NumericRange<-90, 90>

/** 位置信息 */
export type LocationInfo = {
  /** 经度, 范围 [-180, 180] */
  longitude: number;
  /** 纬度, 范围 [-90, 90] */
  latitude: number;
  /** 高度，单位米 */
  height: number;
  /** 转向角，单位度 */
  heading: number;
  /** 俯仰角，单位度 */
  pitch: number;
  /** 翻滚角，单位度 */
  roll: number;
}