/**
 * 该项是填充的画刷样式枚举说明
 * @example
 * let option = SSmap.BrushStyle.SolidPattern;
 */
export enum BrushStyle {
  SolidPattern = '实心图案',
  Dense1Pattern = '密点1图案',
  Dense2Pattern = '密点2图案',
  Dense3Pattern = '密点3图案',
  Dense4Pattern = '密点4图案',
  Dense5Pattern = '密点5图案',
  Dense6Pattern = '密点6图案',
  Dense7Pattern = '密点7图案',
  HorPattern = '水平条纹图案',
  VerPattern = '垂直条纹图案',
  CrossPattern = '交叉图案',
  BDiagPattern = '左下',
  FDiagPattern = '左上',
  DiagCrossPattern = '对角交叉图案',
  LinearGradientPattern = '线性渐变图案',
  RadialGradientPattern = '辐射渐变图案',
  ConicalGradientPattern = '锥体渐变图案',
  TexturePattern = '自定义纹理贴图图案，在polygon3d等对象中，配合onTerrain模式和image属性使用',
}
