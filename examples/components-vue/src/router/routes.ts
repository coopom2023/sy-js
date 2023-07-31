import type { RouterOptions } from 'vue-router'

export const routes: RouterOptions['routes'] = [
  {
    path: '/base',
    name: 'base',
    component: () => import('../pages/base/index.vue'),
    meta: { displayName: '基础组件' }
  },
  {
    path: '/map',
    name: 'map',
    children: [
      {
        path: 'cesium',
        name: 'map-cesium',
        component: () => import('../pages/map/cesium/index.vue'),
        meta: { displayName: 'Cesium' }
      },
      {
        path: 'leaflet',
        name: 'map-leaflet',
        component: () => import('../pages/map/leaflet/index.vue'),
        meta: { displayName: 'Leaflet' }
      },
      {
        path: 'openlayers',
        name: 'map-openlayers',
        component: () => import('../pages/map/openlayers/index.vue'),
        meta: { displayName: 'OpenLayers' }
      },
      {
        path: 'mapbox',
        name: 'map-mapbox',
        component: () => import('../pages/map/mapbox/index.vue'),
        meta: { displayName: 'MapboxGL' }
      },
      {
        path: 'ssmap',
        name: 'map-ssmap',
        component: () => import('../pages/map/ssmap/index.vue'),
        meta: { displayName: 'SSmap' }
      }
    ],
    meta: { displayName: '地图组件' }
  }
]