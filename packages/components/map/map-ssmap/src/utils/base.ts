import type { FlyToOption, LocationInfo, SSmapWindow, Viewer } from '../types'

const config = {
  terrainUrl: 'https://www.dataarche.com:8080/MultiScreenData/dem/sz',
  authorizedUrl: 'https://www.dataarche.com:8062/authentic/license?t=2023-03-21T11:09:37.152',
  /** Arcgis影像(DOM) type = mapServer */
  arcGisImageryUrl: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
  /** 深圳市白模 type = tileset */
  tilesetSZLayerUrl: 'https://www.dataarche.com:8080/MultiScreenData/tileset/sz-tileset/tileset.json',
}

/** 指定 shaders.pak 和 font.rcc 位置 */
export function baseAssetsUrl(viewer: Viewer, url?: string) {
  const win = window as unknown as SSmapWindow
  // viewer.setBaseUrl(url == undefined ? '/map/ssmap/' : url)
  // window.SSmap.FileSystem.setGlobalFont('/map/ssmap/assets/font/msyh.ttc')
  viewer.setBaseUrl(url == undefined ? '/sdkcode/' : url)
  win.SSmap.FileSystem.setGlobalFont('/sdkcode/assets/font/msyh.ttc')
  win.SSmap.FileSystem.setFont('微软雅黑')
  // window.SSmap.FileSystem.saveRenderImage(1920, 1080, "renderimage", "PNG");
}

/** 认证地图, 数生sdk鉴权 */
export function baseAuthorize(viewer: Viewer, url?: string) {
  viewer.setAuthorizedUrl(url == undefined ? config.authorizedUrl : url)
}

/** 加载Arcgis影像(DOM) type = mapServer */
export function baseArcGisImagery(viewer: Viewer, url?: string) {
  viewer.scene.globe.lightingEnabled = true
  return viewer.scene.globe.addArcGisMapServerImageryLayer(url || config.arcGisImageryUrl)
}

/** 加载地形数据，默认 高程数据DEM */
export function baseTerrain(viewer: Viewer, url?: string) {
  return viewer.scene.globe.setTerrainProviderUrl(url || config.terrainUrl)
}

/** 移除地形，设为默认地形 */
export function baseTerrainRemove(viewer: Viewer) {
  return viewer.scene.globe.setDefaultTerrain()
}

/** 加载tiles，默认 深圳3dtiles */
export function baseTileset(viewer: Viewer, url?: string) {
  const win = window as unknown as SSmapWindow
  const tileset = new win.SSmap.Tileset(url || config.tilesetSZLayerUrl)
  tileset.clipLevelOfDetail = true
  const entity = new win.SSmap.Entity()
  entity.addComponent(tileset)
  viewer.scene.addEntity(entity)
  return {
    entity,
    tileset,
  }
}

/** 获取当前位置信息 */
export function baseLocationInfo(viewer: Viewer): LocationInfo {
  const cameraCtrl = viewer.scene.mainCamera.cameraController()
  const pcg = cameraCtrl.positionCartographic
  const deg = pcg.toDegrees()
  // 弧度转角度
  const heading = (cameraCtrl.heading * 180 / Math.PI) % 360
  const pitch = cameraCtrl.pitch * 180 / Math.PI
  const roll = cameraCtrl.roll * 180 / Math.PI
  const info: LocationInfo = {
    longitude: deg.lon,
    latitude: deg.lat,
    height: deg.height,
    heading,
    pitch,
    roll
  }
  return info
}

/** 飞行到位置 */
export function baseFlyTo(viewer: Viewer, option: FlyToOption) {
  const win = window as unknown as SSmapWindow
  const cameraController = viewer.scene.mainCamera.cameraController()
  const position = win.SSmap.Cartographic.fromDegrees(option.longitude, option.latitude, option.height)
  cameraController.flyTo(position.toVector3(), option.duration, option.heading, option.pitch, option.roll)
}

/** 飞到深圳区域 */
export function baseFlyToShenZhen(viewer: Viewer) {
  const win = window as unknown as SSmapWindow
  const cameraController = viewer.scene.mainCamera.cameraController()
  const position = win.SSmap.Cartographic.fromDegrees(114.054494, 22.540745, 1300)
  cameraController.flyTo(position.toVector3(), 5, 0, -90, 0)
}
