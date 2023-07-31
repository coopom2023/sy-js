/**
 * 该项是纹理投影场景模式枚举说明,用于TextureProjection#sceneMode
 * @example
 * let option = SSmap.TextureProjectionSceneMode.TerrainOnly;
 */
export enum TextureProjectionSceneMode {
  TerrainOnly = '只有地形模式-仅覆盖区域范围内的地形',
  ObjectOnly = '对象模式-仅覆盖除地形外的实体对象',
  WholeScene = '全景模式-覆盖区域范围内的所有实体对象',
}
