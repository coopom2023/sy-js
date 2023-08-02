import { blue, cyan, green, magenta, red, reset, yellow } from 'kolorist'

const maps = [
  {
    name: 'cesium',
    display: 'Cesium',
    color: blue,
  },
  {
    name: 'leaflet',
    display: 'Leaflet',
    color: cyan,
  },
  {
    name: 'openlayers',
    display: 'OpenLayers',
    color: green,
  },
  {
    name: 'mapbox',
    display: 'MapboxGL',
    color: magenta,
  },
  {
    name: 'ssmap',
    display: 'SSmap',
    color: red,
  },
  // {
  //   name: 'supermap_iclient',
  //   display: 'SuperMap iClient',
  //   color: reset,
  // },
  // {
  //   name: 'supermap_iclient3d',
  //   display: 'SuperMap iClient 3D',
  //   color: yellow,
  // },
]

export const layers = [
  {
    name: 'zgdt-csb',
    display: '中国地图彩色版',
    color: blue,
  },
  {
    name: 'zgdt-csywb',
    display: '中国地图彩色英文版（含POI）',
    color: blue,
  },
  {
    name: 'zgdt-nsb',
    display: '中国地图暖色版',
    color: cyan,
  },
  {
    name: 'zgdt-hsb',
    display: '中国地图灰色版',
    color: green,
  },
  {
    name: 'zgdtlsb',
    display: '中国地图蓝黑版',
    color: magenta,
  },
  {
    name: 'tdt-dx-cgcs2000',
    display: '天地图-地形（CGCS2000）',
    color: red,
  },
  {
    name: 'tdt-dx-mkt',
    display: '天地图-地形（球面墨卡托）',
    color: red,
  },
  {
    name: 'tdt-yx-cgcs2000',
    display: '天地图-影像（CGCS2000）',
    color: reset,
  },
  {
    name: 'tdt-yx-mkt',
    display: '天地图-影像（球面墨卡托）',
    color: reset,
  },
  {
    name: 'tdt-sl-cgcs2000',
    display: '天地图-矢量（CGCS2000）',
    color: yellow,
  },
  {
    name: 'tdt-sl-mkt',
    display: '天地图-矢量（球面墨卡托）',
    color: yellow,
  },
]

export default maps
