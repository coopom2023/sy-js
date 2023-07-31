import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom'
import Cesium from '../pages/map/cesium'
import Leaflet from '../pages/map/leaflet'
import Mapbox from '../pages/map/mapbox'
import OpenLayers from '../pages/map/openlayers'
import SSmap from '../pages/map/ssmap'

// eslint-disable-next-line react-refresh/only-export-components
const Base = lazy(() => import('../pages/base'))

type CurrentRouteObject = Omit<RouteObject, 'children'> & {
  children?: CurrentRouteObject[];
  meta?: Record<string, string>
}

export const routes: CurrentRouteObject[] = [
  {
    path: '/base',
    // lazy: () => import('../pages/base')
    element: <Base />,
    meta: { displayName: '基础组件' }
  },
  {
    path: "/map",
    children: [
      {
        path: 'cesium',
        // lazy: () => import('../pages/map/leaflet'),
        element: <Cesium />,
        meta: { displayName: 'Cesium' }
      },
      {
        path: 'leaflet',
        // lazy: () => import('../pages/map/leaflet'),
        element: <Leaflet />,
        meta: { displayName: 'Leaflet' }
      },
      {
        path: 'openlayers',
        element: <OpenLayers />,
        meta: { displayName: 'OpenLayers' }
      },
      {
        path: 'mapbox',
        // lazy: () => import('../pages/map/mapbox'),
        element: <Mapbox />,
        meta: { displayName: 'MapboxGL' }
      },
      {
        path: 'ssmap',
        // lazy: () => import('../pages/map/ssmap'),
        element: <SSmap />,
        meta: { displayName: 'SSmap' }
      }
    ],
    meta: { displayName: '地图组件' }
  }
]
