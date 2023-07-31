import { AltitudeMethod } from '../../enums/AltitudeMethod'
import { Horizontal } from '../../enums/Horizontal'
import { Vertical } from '../../enums/Vertical'
import type { Cartesian2 } from '../base/Cartesian2'
import type { Cartesian3 } from '../base/Cartesian3'
import type { Cartesian4 } from '../base/Cartesian4'
import type { Color } from '../base/Color'

/**
 * Billboard广告牌的基础属性类
 * @example
 * let bb = new SSmap.Billboard();
 */
export class Billboard {
  /** 获取或者设置billboard的图片url，默认："" */
  url: string
  
  /** 获取或者设置billboard宽度，默认：0 */
  width: number
  
  /** 获取或者设置billboard高度，默认：0 */
  height: number
  
  /** 获取或者设置billboard的缩放，默认：1 */
  scale: number
  
  /** 获取或者设置billboard的旋转值(角度)，默认：0 */
  rotation: number
  
  /** 获取或者设置billboard的坐标平移数值，默认：(0,0) */
  translate: Cartesian2
  
  /** 获取或者设置billboard的笛卡尔坐标值，默认：(0,0,0) */
  position: Cartesian3
  
  /** 获取或者设置billboard的颜色，默认：(255,255,255,255) */
  color: Color
  
  /** 获取或者设置billboard原点的垂直对齐方式，默认：BASELINE */
  verticalOrigin: Vertical
  
  /** 获取或者设置billboard原点的水平对齐方式，默认：CENTER_H */
  horizontalOrigin: Horizontal

  /**
   * 获取半透明的范围,返回Cartesian4(近距离的值（x）,近距离的范围（y）和远距离的值（z），远距离的范围（w）)
   */
  translucencyByDistance(): Cartesian4;

  /**
   * 设置半透明的范围
   * @param dist 半透明的范围(近距离的值（x）,近距离的范围（y）和远距离的值（z），远距离的范围（w）)
   */
  setTranslucencyByDistance(dist: Cartesian4): void;

  /**
   * 获取显示范围区间,Cartesian2(近距离的范围（x）,远距离的范围（y）)
   */
  distanceDisplayCondition(): Cartesian2;

  /**
   * 设置显示范围区间
   * @param dist 显示范围区间(近距离的范围（x）,远距离的范围（y））
   */
  setDistanceDisplayCondition(dist: Cartesian2): void;

  /**
   * 获取缩放的距离数值,返回Cartesian4(近距离的值（x）,近距离的缩放值（y）和远距离的值（z），远距离的缩放值（w）)
   */
  scaleByDistance(): Cartesian4;

  /**
   * 设置缩放的距离数值
   * @param dist 缩放的距离数值Cartesian4(近距离的值（x）,近距离的缩放值（y）和远距离的值（z），远距离的缩放值（w）)
   */
  setScaleByDistance(dist: Cartesian4): void;

  /**
   * 获取billboard的海拔高度
   */
  altitude(): number;

  /**
   * 设置billboard的海拔高度
   * @param alti 海拔高度
   */
  setAltitude(alti: number): void;

  /**
   * 获取billboard的海拔模式
   */
  altitudeMethod(): AltitudeMethod;

  /**
   * 设置billboard的海拔模式
   * @param altiMethod 海拔模式
   */
  setAltitudeMethod(altiMethod: AltitudeMethod): void;
}
