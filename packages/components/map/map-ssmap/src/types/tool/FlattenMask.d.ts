/**
 * 三维场景中的遮罩，3dtiles会直接压平，地形可通过设置高度向下开挖。
 * @example
 * let list = [];
 * list.push(SSmap.Vector3.create(x,y,z));
 * let mask = new SSmap.FlattenMask();
 * // maskHeight 只对地形生效
 * mask.maskHeight = 10;
 * mask.setPoints(list);
 * tileset.addFlattenMask(mask);
 * // or
 * // GlobalViewer.scene.globe.addFlattenMask(mask);
 */
export class FlattenMask {

}
