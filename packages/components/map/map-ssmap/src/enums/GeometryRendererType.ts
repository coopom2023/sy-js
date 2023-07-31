/**
 * 该项是渲染顺序类型枚举说明,用于GeometryRenderer#type
 * @example
 * let option = SSmap.GeometryRendererType.PreProcess;
 */
export enum GeometryRendererType {
  PreProcess =	'正式渲染前，进行一些前期计算，如影像图的校正',
  Environment =	'渲染环境，如星空背景（Skybox）、太阳、大气层等',
  Globe =	'渲染地球',
  Opaque =	'渲染场景中不透明的物体',
  Translucent =	'渲染场景中透明的物体',
  GeometryProjection =	'渲染几何投影',
  Symbol =	'渲染标签类物体，如地标、线等',
  TextureProjection =	'渲染纹理投影',
  PostProcess =	'场景渲染完成后，进行特效渲染，后期调色等',
  GUI =	'2D界面渲染',
}
