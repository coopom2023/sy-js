/** 位置信息 */
export type Position = {
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 高度 */
  height: number;
}

/** 偏移信息 */
export type Offset = {
  /** 横轴偏移 */
  x: number;
  /** 纵轴偏移 */
  y: number;
  /** 高度偏移 */
  z: number;
}

/** 旋转信息 */
export type Rotation = {
  /** 横轴旋转 */
  x: number;
  /** 纵轴旋转 */
  y: number;
  /** Z轴旋转 */
  z: number;
}

/** 模型配置项 */
export type ModelOption = {
  url: string;
  /** 模型位置 */
  position: Position;
  srs?: any;
  /** 模型偏移 */
  offset?: Offset;
  /** 模型旋转 */
  rotation?: Rotation;
  /** 模型缩放 */
  scale?: number;
  /** 是否定位到模型 */
  location?: boolean;
  /** 是否启用，默认启用 */
  enabled?: boolean;
}
