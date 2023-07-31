/**
 * 该项是着色模式枚举说明，用于Material#shadingModel
 * @example
 * let option = SSmap.ShadingModel.Unlit;
 */
export enum ShadingModel {
  MetallicRoughness = '金属粗糙',
  SpecularGlossiness = '镜面',
  Subsurface = '地下',
  Water = '水面',
  Unlit = '不发光',
  UserShader = '用户材质',
}
