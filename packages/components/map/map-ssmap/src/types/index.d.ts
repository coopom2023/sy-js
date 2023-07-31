import type { SSmap } from './SSmap'
import type { Module } from './Module'
export * from './common'
export type { ModelOption, Rotation, Offset, Position } from './ModelOption'
export type * from './MeasureAreaOption'
export type * from './LocationInfo'
export type * from './FlyToOption'
export type * from './engine/Viewer'
export type * from './engine/Scene'
export type * from './globe/ImageryLayer'
export type * from './Module'
export type * from './base'
export type * from './global'
export type * from './tool'
export type * from './vector'

export type SSmapWindow = Window & {
  ABORT?: boolean;
  calledRun?: boolean;
  /** SSmap 模块, SSmap 与 Module 是相等的 */
  Module?: Module;
  /** SSmap 对象, SSmap 与 Module 是相等的 */
  SSmap: SSmap;
  Browser?: any;
  exit?: any;
  /** SSmap 初始化场景回调函数 */
  initScene?: () => void;
  /** SSmap 实例对象，globalViewer 与 GlobalViewer 是相等的 */
  globalViewer: any;
  /** SSmap 实例对象，globalViewer 与 GlobalViewer 是相等的 */
  GlobalViewer: any;
}
