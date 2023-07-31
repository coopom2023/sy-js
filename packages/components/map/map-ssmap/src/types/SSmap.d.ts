// import { AltitudeMethod } from '../enums/AltitudeMethod'
import {
  AltitudeMethod,
  FillMode,
  TextureProjectionSceneMode
} from '../enums'
import type {
  Cartesian2,
  Cartesian3,
  Cartesian4,
  Cartographic,
  Color,
  Matrix4,
  Quaternion,
  Rectangle,
  Vector2,
  Vector3
} from './base'
import type { Cartesian3Vector } from './container'
import type { FileSystem, Viewer } from './engine'
import type {
  ImageryLayer,
  TiandituImageryLayer,
  UrlTemplateImageryProvider
} from './globe'
import type { Model } from './model/Model'
import type { Tileset } from './model/Tileset'
import type { ExtrudeEntity } from './objects'
import type { Entity } from './scene/Entity'
import type { RaycastHit } from './scene/RaycastHit'
import type { FrameAction } from './tool/FrameAction'
import type {
  BillboardCollection,
  BillboardEntity,
  Label3D,
  Polyline3D,
  Polygon3D
} from './vector'
// import type { BillboardCollection } from './vector/BillboardCollection'
// import type { BillboardEntity } from './vector/BillboardEntity'
// import type { Polyline3D } from './vector/Polyline3D'
// import type { Polygon3D } from './vector/Polygon3D'

/** SSmap 对象 */
export type SSmap = {
  AltitudeMethod: typeof AltitudeMethod;
  BillboardEntity: typeof BillboardEntity;
  BillboardCollection: typeof BillboardCollection;
  Cartesian2: typeof Cartesian2;
  Cartesian3: typeof Cartesian3;
  Cartesian4: typeof Cartesian4;
  Cartesian3Vector: typeof Cartesian3Vector,
  Color: typeof Color;
  FileSystem: typeof FileSystem;
  FillMode: typeof FillMode;
  FrameAction: typeof FrameAction;
  getGlobalViewer(): Viewer;
  ImageryLayer: typeof ImageryLayer;
  Label3D: typeof Label3D;
  Matrix4: typeof Matrix4;
  Model: typeof Model;
  Rectangle: typeof Rectangle;
  Vector2: typeof Vector2;
  Vector3: typeof Vector3;
  RaycastHit: typeof RaycastHit;
  Polygon3D: typeof Polygon3D;
  Polyline3D: typeof Polyline3D;
  Quaternion: typeof Quaternion;
  Cartographic: typeof Cartographic;
  Tileset: typeof Tileset;
  Entity: typeof Entity;
  ExtrudeEntity: typeof ExtrudeEntity;
  TextureProjectionSceneMode: typeof TextureProjectionSceneMode;
  TiandituImageryLayer: typeof TiandituImageryLayer;
  UrlTemplateImageryProvider: typeof UrlTemplateImageryProvider;
};
