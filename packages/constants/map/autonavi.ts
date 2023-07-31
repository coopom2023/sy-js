export const AUTONAVI_Domain = 'http://webrd02.is.autonavi.com'

/**
 * 矢量 + 注记
 * @example
 * viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
 *   url: AUTONAVI_Domain + AUTONAVI_appmaptile
 * }))
 */
export const AUTONAVI_appmaptile = '/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'

/**
 * 影像 + 注记
 * @example
 * viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
 *   url: AUTONAVI_Domain + AUTONAVI_appmaptile
 * }))
 */
export const AUTONAVI_appmaptile10 = '/appmaptile?lang=zh_cn&size=10&scale=10&style=8&x={x}&y={y}&z={z}'
