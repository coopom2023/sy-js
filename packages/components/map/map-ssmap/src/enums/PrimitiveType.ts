/**
 * 该项是图元类型枚举说明,用于GeometryRenderer#primitiveType
 * @example
 * let option =SSmap.PrimitiveType.PointList;
 */
export enum PrimitiveType {
  PointList = '每一个顶点数据渲染成一个点',
  LineList = '每2个顶点数据渲染成一条线',
  LineLoop = '每2个顶点数据渲染成一条线，最后一个顶点和第一个顶点渲染成一条线',
  LineStrip = '按0-1, 1-2, 2-3 ...的方式渲染成线',
  TriangleList = '每3个顶点数据渲染成一个三角面',
  TriangleStrip = '按0-1-2, 1-3-2, 2-3-4, 3-5-4 ...的方式渲染三角面',
  TriangleFan = '按0-1-2, 0-2-3, 0-3-4 ...的方式渲染三角面',
}
