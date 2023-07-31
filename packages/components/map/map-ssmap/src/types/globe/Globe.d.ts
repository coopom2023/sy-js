import type { Cartesian3 } from '../base/Cartesian3'
import type { Cartographic } from '../base/Cartographic'
import type { Color } from '../base/Color'
import type { Future } from '../base/Future'
import type { Ellipsoid } from './Ellipsoid'
import type { GlobeTerrainProvider } from './GlobeTerrainProvider'
import type { ImageryLayer } from './ImageryLayer'

/**
 * Globe提供了地球渲染的功能，可以自定义地形、多层影像叠加，拾取等功能
 * @example
 * let glob = GlobalViewer.scene.globe;
 */
export class Globe {
  /** 获取或者设置地球的显隐，默认：true */
  show: boolean
  /** 获取或者设置地球的透明度,0.0-1.0，默认：1 */
  opacity: number
  /** 获取或者设置地球的基础颜色，默认：{0,0,0,255} */
  baseColor: Color
  /** 获取或者设置地球的是否受光，默认：true */
  lightingEnabled: boolean
  /** 获取椭球Ellipsoid对象 */
  ellipsoid: Ellipsoid
  /** 获取或者设置GlobeTerrainProvider对象 */
  terrainProvider: GlobeTerrainProvider

  /**
   * 设置地形
   * @param url 地形文件的url(到文件夹，会自动读取文件夹下的layer.json文件)
   */
  setTerrainProviderUrl(url: string): Future;
  /** 设置默认地形，全球0高度的地形 */
  setDefaultTerrain(): void;
  /**
   * 添加ImageryLayer影像图层
   * @param layer 影像图层
   */
  addImageryLayer(layer: ImageryLayer): void;
  /**
   * 移除ImageryLayer影像图层
   * @param layer 影像图层
   */
  removeImageryLayer(layer: ImageryLayer): void;
  /**
   * 添加ArcGisMapServer服务
   * @param uri ArcGisMapServer服务uri
   */
  addArcGisMapServerImageryLayer(uri: string): ImageryLayer;
  /**
   * 添加wms、wmts服务（uri需在QGIS中加载服务后，取source）
   * @param uri wms、wmts服务uri
   */
  addWmsImageryLayer(uri: string): ImageryLayer;
  /**
   * 获取cartographic坐标点的地形海拔高度
   * @param cartographic 需要获取海拔高度的经纬度坐标
   * @param includeTerrainSurface 是否计算三维模型地表层的高度
   */
  getHeight(cartographic: Cartographic, includeTerrainSurface: boolean): number;
  /**
   * 发射一条射线,拾取坐标
   * @param ray 射线
   * @param result 场景中射线交点的坐标
   */
  pick(ray: Ray, result: Cartesian3): boolean;
  /**
   * 添加地形遮罩
   * @param mask 遮罩
   */
  addFlattenMask(mask: FlattenMask): void;
  /**
   * 移除地形遮罩
   * @param mask 遮罩
   */
  removeFlattenMask(mask: FlattenMask): void;
  /** 重载地球 */
  reload(): void;
}
