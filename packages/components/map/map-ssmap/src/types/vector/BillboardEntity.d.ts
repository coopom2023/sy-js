import { Horizontal } from '../../enums/Horizontal'
import { Vertical } from '../../enums/Vertical'
import type { Feature } from '../base/Feature'
import type { Vector3 } from '../base/Vector3'
import type { VisualEntity } from '../objects/VisualEntity'
import type { BillboardCollection } from './BillboardCollection'

/**
 * 使用自定义图片创建billboard物体。
 * @example
 * let bbEntity = new SSmap.BillboardEntity();
 * bbEntity.position = SSmap.Vector3.create(-2.39296e+06, 5.38694e+06, 2.42807e+06); //2000坐标系
 * bbEntity.scale = 1.0;
 * bbEntity.imageWidth = 50;
 * bbEntity.imageHeight = 35;
 * bbEntity.url = imageUrl; 
 * bbEntity.setCollection(SSmap.BillboardCollection.Instance());
 */
export class BillboardEntity extends VisualEntity {
/** 获取或者设置billboardEntity的图片url，默认："file:///Assets/symbols/images/dot_red_32x32.png" */
  url: string

  /** 获取或者设置位置(笛卡尔坐标值)，默认：(0,0,0) */
  position: Vector3

  /** 获取或者设置billboardEntity的缩放，默认：1 */
  scale: number

  /** 获取或者设置billboardEntity的旋转值(角度)，默认：0 */
  rotation: number

  /** 获取或者设置图片宽度，默认：32 */
  imageWidth: number

  /** 获取或者设置图片高度，默认：32 */
  imageHeight: number

  /** 获取或者设置billboardEntity的垂直对齐方式，默认：CENTER_V */
  vertical: Vertical

  /** 获取或者设置billboardEntity的水平对齐方式，默认：CENTER_H */
  horizontal: Horizontal

  /** 获取或者设置billboardEntity的海拔高度，默认：0 */
  altitude: Horizontal

  /** 获取或者设置billboardEntity的海拔模式，默认：OnTerrain */
  altitudeMethod: Horizontal

  /**
   * 获取billboard物体所在的集合
   */
  collection(): BillboardCollection;

  /**
   * 获取billboard物体所在的集合
   * @param collection 集合
   */
  setCollection(collection: BillboardCollection): void;
	
  /**
   * 静态方法，根据feature获取所在的billboardEntity，直接SSmap.BillboardEntity.getSelect(feauture)进行调用
   * @param feature 特征
   */
  static getSelect(feature: Feature): BillboardEntity;
}
