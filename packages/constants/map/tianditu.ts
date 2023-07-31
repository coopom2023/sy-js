/**
 * 天地图 API 密钥
 */
const TK_KEY = ''

// const baseUrl = 'http://t{0-7}.tianditu.gov.cn'
// 使用本地代理
const baseUrl = ''

// 更多天地图底图： https://map.tianditu.gov.cn/
// const VEC_C = 'http://t1.tianditu.com/vec_c/wmts?layer=vec&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk='
// const CVA_C = 'http://t1.tianditu.com/cva_c/wmts?layer=cva&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk='
// const IMG_W = 'https://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&transparent=true&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk='

export const TDT_DataServer_Domain = 'https://t{s}.tianditu.gov.cn'

/**
 * 天地图 DataServer 服务
 * @example
 * viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
 *   url: TDT_DataServer_Domain + TDT_DataServer.img_w + TK_KEY,
 *   subdomains,
 * }))
 * 
 * viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
 *   url: TDT_DataServer_Domain + TDT_DataServer.cia_w + TK_KEY,
 *   subdomains,
 * }))
 */
export const TDT_DataServer = {
  /** CGCS2000-经纬度投影: 矢量底图 */
  vec_c: `${baseUrl}/DataServer?T=vec_c&x={x}&y={y}&l={z}&tk=${TK_KEY}`,
  /** CGCS2000-经纬度投影: 矢量图文字标注 */
  cva_c: `${baseUrl}/DataServer?T=cva_c&x={x}&y={y}&l={z}&tk=${TK_KEY}`,
  /** CGCS2000-经纬度投影: 影像底图 */
  img_c: `${baseUrl}/DataServer?T=img_c&x={x}&y={y}&l={z}&tk=${TK_KEY}`,
  /** CGCS2000-经纬度投影: 影像图文字标注 */
  cia_c: `${baseUrl}/DataServer?T=cia_c&x={x}&y={y}&l={z}&tk=${TK_KEY}`,
  /** CGCS2000-经纬度投影: 地形图 */
  ter_c: `${baseUrl}/DataServer?T=ter_c&x={x}&y={y}&l={z}&tk=${TK_KEY}`,
  /** CGCS2000-经纬度投影: 地形图文字标注 */
  cta_c: `${baseUrl}/DataServer?T=cta_c&x={x}&y={y}&l={z}&tk=${TK_KEY}`,

  /** CGCS2000-球面墨卡托投影: 矢量底图 */
  vec_w: `${baseUrl}/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=${TK_KEY}`,
  /** CGCS2000-球面墨卡托投影: 矢量图文字标注 */
  cva_w: `${baseUrl}/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=${TK_KEY}`,
  /** CGCS2000-球面墨卡托投影: 影像底图 */
  img_w: `${baseUrl}/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${TK_KEY}`,
  /** CGCS2000-球面墨卡托投影: 影像图文字标注 */
  cia_w: `${baseUrl}/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=${TK_KEY}`,
  /** CGCS2000-球面墨卡托投影: 地形图 */
  ter_w: `${baseUrl}/DataServer?T=ter_w&x={x}&y={y}&l={z}&tk=${TK_KEY}`,
  /** CGCS2000-球面墨卡托投影: 地形图文字标注 */
  cta_w: `${baseUrl}/DataServer?T=cta_w&x={x}&y={y}&l={z}&tk=${TK_KEY}`,
}

export const TDT_WMTS_Domain = 'http://t{s}.tianditu.com'

/**
 * WMTS服务
 * @example
 * viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
 *   url: TDT_WMTS_Domain + TDT_WMTS_Server.img_w + TK_KEY,
 *   subdomains: ''0', '1', '2', '3', '4', '5', '6', '7'',
 *   layer: 'tdtimgwlayer',
 *   style: 'default',
 *   format: 'image/jpeg',
 *   tileMatrixSetID: 'GoogleMapsCompatible',
 * }))
 * 
 * viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
 *   url: TDT_WMTS_Domain + TDT_WMTS_Server.cia_w + TK_KEY,
 *   subdomains: ''0', '1', '2', '3', '4', '5', '6', '7'',
 *   layer: 'tdtciawlayer',
 *   style: 'default',
 *   format: 'image/jpeg',
 *   tileMatrixSetID: 'GoogleMapsCompatible',
 * }))
 */
export const TDT_WMTS_Server = {
  // CGCS2000-球面墨卡托投影
  /** 影像 */
  img_w: '/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=',
  /** 影像注记 */
  cia_w: '/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=',
  /** 地形注记 */
  cta_w: '/cta_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cta&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=',
  /** 矢量注记 */
  cva_w: '/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=',
  /** 地形 */
  ter_w: '/ter_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=ter&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=',
  /** 矢量 */
  vec_w: '/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=',

  // CGCS2000-经纬度投影
  /** 影像 */
  img_c: '/img_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=',
  /** 影像注记 */
  cia_c: '/cia_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=',
  /** 地形注记 */
  cta_c: '/cta_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cta&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=',
  /** 矢量注记 */
  cva_c: '/cva_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=',
  /** 地形 */
  ter_c: '/ter_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=ter&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=',
  /** 矢量 */
  vec_c: '/vec_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=',
}
