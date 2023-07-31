/**
 * 该项是相机投影类型枚举说明,用于Camera#projectionType
 * @example
 * let option = SSmap.ProjectionType.OrthographicProjection;
 */
export enum ProjectionType {
  OrthographicProjection = '正投投影',
  PerspectiveProjection = '透视投影',
  FrustumProjection = '视锥投影',
  CustomProjection = '自定义投影',
}
