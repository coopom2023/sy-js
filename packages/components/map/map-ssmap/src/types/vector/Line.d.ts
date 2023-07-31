import { AltitudeMethod } from '../../enums/AltitudeMethod'
import { AnimationType } from '../../enums/AnimationType'
import type { Color } from '../base/Color'
import type { Vector3 } from '../base/Vector3'
import type { VisualEntity } from '../objects/VisualEntity'

/**
 * 线基础类 (polygline 或者 polygon的无填充模式),一般不直接调用。
 */
export class Line extends VisualEntity {
  /** 获取或者设置线的颜色，默认：{255,255,255,255} */
  color: Color
  /** 获取或者设置线的高亮颜色，默认：{255,0,0,255} */
  highLightColor: Color
  /** 获取或者设置线的透明度，默认：0.9 */
  alpha: number
  /** 获取或者设置线是否为虚线，默认：false */
  dash: boolean
  /** 获取或者设置线的动画类型，默认：HorizontalFlow */
  animationType: AnimationType
  /** 获取或者设置线的动画播放周期时间(单位ms)，默认：2000 */
  animationTimer: number
  /** 获取或者设置虚线的颜色，默认：{255,255,255,0},(透明) */
  gapColor: Color
  /** 获取或者设置实线线长，默认：16 */
  dashLength: number
  /** 设置实线与虚线的长度比例, 例如255(0xff): 实线与虚线1 : 1, 65520 (0xfff0), 实线与虚线 3: 1, 每一位为一个单位长度，默认：0xfff0 */
  dashPattern: number

  /**
   * 获取Line的贴图url
   */
  imageUrl(): string;

  /**
   * 设置Line的贴图url
   * @param url 贴图url
   */
  setImageUrl(url: string): void;

  /**
   * 获取Line的海拔高度
   */
  altitude(): number;

  /**
   * 设置Line的海拔高度
   * @param alti 海拔高度
   */
  setAltitude(alti: number): void;

  /**
   * 获取Line的海拔模式
   */
  altitudeMethod(): AltitudeMethod;

  /**
   * 设置Line的海拔模式
   * @param altiMethod 海拔模式
   */
  setAltitudeMethod(altiMethod: AltitudeMethod): void;

  /**
   * 获取Line的宽度值
   */
  width(): number;

  /**
   * 设置Line的宽度值
   * @param width 宽度值
   */
  setWidth(width: number): void;

  /**
   * 获取插值点的最小距离
   */
  minDistance(): number;

  /**
   * 设置插值点的最小距离
   * @param dist 插值点的最小距离
   */
  setMinDistance(dist: number): void;

  /**
   * 增加一个坐标点
   * @param point 笛卡尔坐标值
   */
  addPoint(point: Vector3): void;

  /**
   * 移除最后一个点
   */
  removeLast(): void;

  /**
   * 绘制
   */
  draw(): void;

  /**
   * 重绘, 修改颜色，线宽，材质之后调用
   */
  redraw(): void;

  /**
   * 虚函数，子类中作实现。增加一个临时点, 画线到此点
   * @param point 笛卡尔坐标值
   */
  lineTo(point: Vector3): void;

  /**
   * 结束, 之后不能增加点到line中, 除非使用modify进行强行修改
   */
  end(): void;

  /**
   * 强制修改，根据当前的属性重新生成线
   */
  modify(): void;

  /**
   * 点的数量
   */
  numOfPoints(): number;

  /**
   * 获取纹理的重复次数
   */
  repeat(): number;

  /**
   * 设置纹理的重复次数
   * @param count 重复次数
   */
  setRepeat(count: number): void;
}