import type { LocationInfo } from './LocationInfo'

/** 飞行配置项 */
export type FlyToOption = LocationInfo & {
  /** 飞行时间，单位秒 */
  duration: number;
}
