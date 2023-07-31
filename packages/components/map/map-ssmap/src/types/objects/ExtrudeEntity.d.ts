import type { ExtrudeBase } from './ExtrudeBase'

/**
 * 拉伸垂直地面物体，创建后需要手动销毁。
 * @example
 * var outer = new SSmap.Cartesian3Vector();
 * outer.push_back(SSmap.Cartesian3.create(x,y,z)) //需多个点
 * var extrudeEntity = new SSmap.ExtrudeEntity();
 * extrudeEntity.setOuter(outer);
 * extrudeEntity.extrudeHeight = 20.0;
 * extrudeEntity.color = SSmap.Color.fromRgb(0, 255, 1, 255);
 * extrudeEntity.roofMap = roofImageUrl;
 * extrudeEntity.wallMap = wallImageUrl;  //GR_APT2W.jpg  Roof3.jpg
 * extrudeEntity.create();
 * 
 * var ent = extrudeEntity.createEntity();
 * Utils.extrudeEntity = ent;
 * scene.addEntity(ent);
 * extrudeEntity.delete();
 * outer.delete();
 */
export class ExtrudeEntity extends ExtrudeBase {
  /** 获取或者设置围墙贴图缩放比例，默认：{1,1} */
  wallTextureScale: Vector2
  /** 获取或者设置顶部贴图缩放比例，默认：{1,1} */
  roofTextureScale: Vector2
  /** 获取或者设置围墙贴图 */
  wallMap: string
  /** 获取或者设置顶部贴图 */
  roofMap: string
}
