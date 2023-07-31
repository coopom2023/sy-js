import type { ImageryLayer, Viewer } from '../types'

const wmtsUrl = 'crs=EPSG:3857&format=image/jpeg&layers=World_Imagery&styles=default&tileMatrixSet=default028mm&url=https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/WMTS'

/** 加载wmts底图 */
export function addWmtsLayer(viewer: Viewer) {
  return viewer.scene.globe.addWmsImageryLayer(wmtsUrl)
}

/** 移除wmts底图 */
export function removeWmtsLayer(viewer: Viewer, layer: ImageryLayer) {
  viewer.scene.globe.removeImageryLayer(layer)
}
