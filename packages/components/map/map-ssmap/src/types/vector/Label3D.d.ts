import { AltitudeMethod, Horizontal, Vertical } from '../../enums'
import type { Cartesian2, Color, Feature, Vector3 } from '../base'
import type { VisualEntity } from '../objects/VisualEntity'
import type { BillboardCollection } from './BillboardCollection'
import type { Billboard } from './Billboard'

/**
 * 三维场景中的单一标签，由图片和文字组成。
 * @example
 * let label3d = new SSmap.Label3D();
 * label3d.position = SSmap.Cartographic.fromDegrees(114.06684143836947, 22.55949606964763, 405.03039819798914).toVector3(); 
 * 
 * label3d.frameUrl = frameUrl;
 * label3d.url = imageUrl;
 * label3d.text = "Test";
 * label3d.background = SSmap.Color.fromRgb(0, 0, 200, 200);
 * label3d.imageWidth = 20;
 * label3d.imageHeight = 20; 
 * label3d.fontSize = 14;
 * label3d.mix = true;
 * label3d.setAltitude(106.03 + i * 20);
 * label3d.setAltitudeMethod(SSmap.AltitudeMethod.Absolute);
 * label3d.lineColor = SSmap.Color.fromRgb(0, 0, 200, 200);
 * label3d.setLineToGround(true);
 * label3d.setCollection(SSmap.BillboardCollection.Instance());
 */
export class Label3D extends VisualEntity {
  /** 获取或者设置Label3D的笛卡尔坐标 */
  position: Vector3
  /** 获取或者设置Label3D的背景颜色，默认：{0,0,0,0} */
  background: Color
  /** 获取或者设置Label3D的字体颜色，默认：{255,255,255,255} */
  fontColor: Color
  /** 获取或者设置Label3D的描边颜色，默认：{0,0,0,255} */
  strokeColor: Color
  /** 获取或者设置Label3D的字体大小，默认：16 */
  fontSize: number
  /** 获取或者设置Label3D的文本粗体，默认：false */
  fontBold: boolean
  /** 获取或者设置Label3D的文本斜体，默认：false */
  fontItalic: boolean
  /** 获取或者设置Label3D的文本下划线，默认：false */
  fontUnderline: boolean
  /** 获取或者设置图片宽度 */
  imageWidth: number
  /** 获取或者设置图片高度 */
  imageHeight: number
  /** 获取或者设置整个标签的宽度 */
  labelWidth: number
  /** 获取或者设置整个标签的高度 */
  labelHeight: number
  /** 获取或者设置Label3D的偏移，默认：{0,0} */
  offset: Cartesian2
  /** 获取或者设置Label3D的图文混排，默认：false */
  mix: boolean
  /** 获取或者设置Label3D的垂直对齐方式，默认：CENTER_V */
  vertical: Vertical
  /** 获取或者设置Label3D的水平对齐方式，默认：CENTER_H */
  horizontal: Horizontal
  /** 获取或者设置Label3D文本的垂直对齐方式，默认：TOP */
  textVertical: Vertical
  /** 获取或者设置Label3D文本的水平对齐方式，默认：CENTER_H */
  textHorizontal: Horizontal
  /** 获取或者设置Label3D外边框的宽度值，默认：10 */
  frameWidth: number
  /** 获取或者设置Label3D整体的缩放值，默认：1 */
  scale: number
  /** 获取或者设置Label3D的垂地线的颜色，默认：{255,0,0,255} */
  lineColor: Color
  /** 获取或者设置Label3D的边框图片url */
  frameUrl: string
  /** 获取或者设置Label3D文本的字体，默认："Microsoft YaHei" */
  font: string
  /** 获取或者设置Label3D的文本内容 */
  text: string
  /** 获取或者设置Label3D的图片url */
  url: string

  /**
   * 获取Label3D的海拔高度
   */
  altitude(): number

  /**
   * 设置Label3D的海拔高度
   * @param alti 海拔高度
   */
  setAltitude(alti: number): void

  /**
   * 获取Label3D的海拔模式
   */
  altitudeMethod(): AltitudeMethod

  /**
   * 设置Label3D的海拔模式
   * @param altiMethod 海拔模式
   */
  setAltitudeMethod(altiMethod: AltitudeMethod): void

  /**
   * 获取Label3D所在的集合
   */
  collection(): BillboardCollection

  /**
   * 获取Label3D所在的集合
   * @param collection 集合
   */
  setCollection(collection: BillboardCollection): void

  /**
   * 获取图片所创建的billboard
   */
  iconBB(): Billboard

  /**
   * 获取文本所创建的billboard
   */
  textBB(): Billboard

  /**
   * 获取当前是否开启了垂直地面线
   */
  lineToGround(): bool

  /**
   * 设置垂直地面线是否开启
   * @param lineToGround 地面线
   */
  setLineToGround(lineToGround: any): void

  /**
   * 静态方法，根据feature获取所在的Label3D，直接SSmap.Label3D.getSelect(feauture)进行调用
   * @param feature 特征
   */
  static getSelect(feature: Feature): Label3D
}
