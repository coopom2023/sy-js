/**
 * Node是系统内部的基类，继承于Object，提供了enabled等属性
 * @example
 * let node = SSmap.Node.fromPtr(ptr);
 */
export class Node {
  /** 该节点是否有效(显示)，默认：true */
  enabled: boolean
  /** 对象名称 */
  objectName: string
  /** 父节点对象，默认：null */
  parent: Node

  /**
   * 静态方法，从内存中创建Node节点，直接SSmap.Node.fromPtr(prt)进行调用
   * @param prt 内存地址
   */
  static fromPtr(prt: number): Node;
}
