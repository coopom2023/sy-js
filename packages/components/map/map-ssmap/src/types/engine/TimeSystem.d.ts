/**
 * 时间系统，在创建时开始运行，提供获取系统运行时间功能
 * @example
 * let timeSystem = GlobalViewer.timeSystem;
 */
export class TimeSystem {
  /** 获取从系统开始运行的时间 */
  readonly timeSeconds: number
  /** 获取上一帧的间隔时间 */
  readonly deltaSeconds: number

  /**
   * 设置年
   * @param year 年
   */
  setYear(year: number): void;

  /**
 * 设置月
 * @param year 月
 */
  setMonth(month: number): void;

  /**
   * 设置日
   * @param year 日
   */
  setDay(day: number): void;

  /**
   * 设置小时
   * @param year 小时
   */
  setHour(hour: number): void;

  /**
   * 设置分钟
   * @param year 分钟
   */
  setMinute(minute: number): void;

  /**
   * 设置秒
   * @param year 秒
   */
  setSecond(second: number): void;
}
