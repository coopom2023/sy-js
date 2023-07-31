/**
 * 字符串类型的键值对映射集合
 * @example
 * let strMap = new SSmap.StringMap();
 * strMap.set("name", "背景图片");
 * strMap.set("pos", "蛇口红树湾");
 */
export class StringMap {
  /**
   * 取值
   * @param key 键
   */
  get(key: number): string;
  /**
   * 获得映射键列表
   */
  keys(): string[];
  /**
   * 获得映射的大小
   */
  size(): number;
  /**
   * 添加一项
   * @param key 键
   * @param value 值
   */
  set(key: string, value: string): void;
}
