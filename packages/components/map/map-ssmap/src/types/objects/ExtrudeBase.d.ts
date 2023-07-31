import { Pivot } from '../../enums'
import type { Color } from '../base'
import type { Cartesian3Vector } from '../container'
import type { Entity } from '../scene'

/**
 * 拉伸对象的基类，创建后需要手动销毁。
 * @example
 * var outer = new SSmap.Cartesian3Vector();
 * var inner = new SSmap.Cartesian3Vector();
 * outer.push_back(SSmap.Cartesian3.create(x,y,z)) //需多个点
 * inner.push_back(SSmap.Cartesian3.create(x,y,z)) //需多个点
 * let extrudebase =new  SSmap.ExtrudeBase();
 * extrudebase.setOuter(outer);
 * extrudebase.setInner(inner);
 * extrudebase.extrudeHeight = 600.0;
 * extrudebase.color = SSmap.Color.fromRgb(0, 128, 255, 255);
 * extrudebase.create();
 * var ent = extrudeEntity.createEntity();
 * GlobalViewer.scene.addEntity(ent);
 * extrudebase.delete();
 * outer.delete();
 * inner.delete();
 */
export class ExtrudeBase extends Entity {
  /** 获取或者设置拉伸高度，默认：3 */
  extrudeHeight: number
  /** 获取或者设置颜色，默认：{255,255,255,255} */
  color: Color
  /** 获取或者设置透明度，默认：0.9 */
  alpha: number
  /** 获取或者设置是否封闭拉伸体顶部，默认：true */
  closeTop: boolean
  /** 获取或者设置是否双面渲染，默认：false */
  bothSide: boolean
  /** 获取或者设置是否应用水面纹理，默认：true */
  waterShader: boolean
  /** 获取或者设置拉伸体的基点位置 */
  pivot: Pivot
  /** 获取或者设置拉伸体是否按照每个顶点高度进行拉伸（底面不平整），默认：false */
  perPositionHeight: boolean
  /** 获取或者设置基底的海拔高度，默认：0 */
  altitude: number
  /**
   * 设置外轮廓
   * @param pointList 笛卡尔坐标向量集
   */
  setOuter(pointList: Cartesian3Vector): void;
  /**
   * 设置内轮廓(挖洞用)
   * @param pointList 笛卡尔坐标向量集
   */
  setInner(pointList: Cartesian3Vector): void;
  /**
   * 按照当前设置好的参数，创建拉伸体基类对象
   */
  create(): void;
  /**
   * 根据创建好的拉伸体基类对象，创建Entity用于添加到场景中进行渲染
   */
  createEntity(): Entity;
}
