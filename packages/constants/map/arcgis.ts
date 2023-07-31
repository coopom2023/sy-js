export const ARCGIS_Domain = 'http://services.arcgisonline.com'

/**
 * 影像，不含注记
 * @example
 * viewer.imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
 *   url: ARCGIS_Domain + ARCGIS_Imagery,
 * }))
 */
export const ARCGIS_Imagery = '/ArcGIS/rest/services/World_Imagery/MapServer'

/**
 * 影像 + 交通
 * @example
 * viewer.imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
 *   url: ARCGIS_Domain + ARCGIS_Transportation,
 * }))
 */
export const ARCGIS_Transportation = '/ArcGIS/rest/services/Reference/World_Transportation/MapServer'

/**
 * 地形 + 英文注记
 * @example
 * viewer.imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
 *   url: ARCGIS_Domain + ARCGIS_Topo,
 * }))
 */
export const ARCGIS_Topo = '/arcgis/rest/services/World_Topo_Map/MapServer'
