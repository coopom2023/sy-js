/**
 * 该项是海拔模式枚举说明
 * @example
 * let option = SSmap.AltitudeMethod.Absolute;
 */
export enum AltitudeMethod {
  OnTerrain = '贴地（随瓦块更新）',
  Absolute = '绝对高度(直线（无曲线跟随）, 取所有点的最高值， 有遮挡)',
  RelativeToTerrain = '贴地(直线， 有曲面跟随)',
  OnBuilding = '贴建筑',
}
