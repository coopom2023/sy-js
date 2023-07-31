import type { Cartesian3 } from './Cartesian3'
import type { Vector3 } from './Vector3'

/**
 * Cartographic定义了制图空间的经纬度坐标点
 * @example
 * let carto = SSmap.Cartographic.fromDegrees(114.01744008667717,22.582023967806496,263.5682828517043);
 * // 弧度
 * console.log(carto.longitude);
 * let degreeCarto = carto.toDegrees();
 * // 角度
 * console.log(degreeCarto.longitude);
 */
export class Cartographic {
  /** 经度 */
  lon: number
  /** 纬度 */
  lat: number
  /** 经度 */
  longitude: number
  /** 纬度 */
  latitude: number
  /** 高度 */
  height: number

  /** 是否为空 */
  isNull(): bool;
  /** 转为以角度为单位的Cartographic，longitude、latitude取值范围0-360 */
  toDegrees(): Cartographic;
  /** 转为以弧度为单位的Cartographic，longitude、latitude取值范围0-2Π */
  toRadius(): Cartographic;
  /** 转为Cartesian3世界坐标 */
  toCartesian3(): Cartesian3;
  /** 转为Vector3格式世界坐标 */
  toVector3(): Vector3;
  /**
   * 静态方法，以角度为单位的参数构造Cartographic，直接SSmap.Cartographic.fromDegrees(longitude, latitude, height)进行调用
   * @param longitude 经度
   * @param latitude 纬度
   * @param height 高度
   */
  static fromDegrees(longitude: number, latitude: number, height: number): Cartographic;
  /**
   * 静态方法，以Cartesian3为参数构造Cartographic，直接SSmap.Cartographic.fromCartesian(Cartesian3 &cartesian)进行调用
   * @param cartesian Cartesian3坐标
   */
  static fromCartesian(cartesian: Cartesian3): Cartographic;
  /**
   * 静态方法，通过个元素构造Cartographic，直接SSmap.Cartographic.fromElements(lon, lat, h)进行调用
   * @param lon 经度
   * @param lat 纬度
   * @param h 高度，默认值0.0
   */
  static fromElements(lon: number, lat: number, h: number): Cartographic;
  /**
   * 静态方法，创建Cartographic，直接SSmap.Cartographic.create(lon, lat, h)进行调用
   * @param lon 经度
   * @param lat 纬度
   * @param h 高度
   */
  static create(lon: number, lat: number, h: number): Cartographic;
}
