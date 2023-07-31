import type { SSmapWindow, Viewer } from '../types'

type ExtrudeEntityOption = {
  /** 坐标点 */
  pointArr: any;
  /** 实体的拉伸高度 */
  height: number;
  /** 透明度 */
  alpha?: number;
  /** 颜色 */
  color: any,
  /** 名称 */
  name: string;
  /** 实体的海拔高度 */
  altitude?: number;
  /** id */
  id: string;
}


export function extrudeEntityCreate(viewer: Viewer, opt: ExtrudeEntityOption) {
  const win = window as unknown as SSmapWindow
  const geometry = new win.SSmap.Cartesian3Vector()
  opt.pointArr.forEach((item: any) => {
    geometry.push_back(item)
  })
  const extrudeEntity = new win.SSmap.ExtrudeEntity()
  extrudeEntity.setOuter(geometry)
  // 几何体的高度
  extrudeEntity.extrudeHeight = opt.height
  // alpha透明度不能设置为1.0
  extrudeEntity.alpha = opt.alpha == undefined || opt.alpha >= 1 ? 0.99 : opt.alpha
  extrudeEntity.color = opt.color
  extrudeEntity.altitude = opt.altitude == undefined ? 96 : opt.altitude
  extrudeEntity.create()
  const entity = extrudeEntity.createEntity()
  viewer.scene.addEntity(entity)
  // entity.name = opt.name
  // if (opt.id) {
  //   entity.id = opt.id
  // }
  extrudeEntity.delete()
  geometry.delete()
  return entity
}
