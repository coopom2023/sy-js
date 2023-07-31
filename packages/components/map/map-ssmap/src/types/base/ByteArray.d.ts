/**
 * 字节数组
 * @example
 * let byteArray = SSmap.ByteArray(4*32);
 */
export class ByteArray {
  /**
   * 返回指向字节数组第一位的内存地址
   */
  data(): number;
  /**
   * 静态方法，创建ByteArray,直接SSmap.ByteArray.create(length)进行调用
   * @param length 要创建的字节数组长度
   */
  static create(length: number): ByteArray;
  /**
   * 静态方法，从指针(内存数组)创建，直接SSmap.ByteArray.fromPtr(ptr)进行调用
   * @param ptr 指向内存的地址
   */
  static fromPtr(ptr: number): ByteArray;
  /**
   * 静态方法，定型数组，直接SSmap.ByteArray.typedArray(ptr)进行调用
   * @param ptr 指向内存的地址
   */
  static typedArray(ptr: number): ByteArray;
}
