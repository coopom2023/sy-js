/**
 * FileSystem是文件系统入口，通过SSmap.FileSystem来获取创建好的FileSystem实例对象.当该对象被创建后，可调用setGlobalFont，setFont，saveFile等函数
 * @example
 * let url = window.document.location.href;
 * let baseUrl = url.substring(0, url.lastIndexOf('/')+1);
 * SSmap.FileSystem.setGlobalFont(baseUrl+"assets/font.rcc");
 * SSmap.FileSystem.setFont("微软雅黑")
 * SSmap.FileSystem.saveRenderImage(1920, 1080, "renderimage", "PNG");
 */
export class FileSystem {
  /**
   * 静态方法，设置全局字体, 默认雅黑,直接SSmap.FileSystem.setGlobalFont(fontUrl)进行调用
   * @param fontUrl 字体文件font.rcc路径
   */
  static setGlobalFont(fontUrl: string): void;
  /**
   * 静态方法，设置字体,直接SSmap.FileSystem.setFont(fontName)进行调用
   * @param fontName 字体的完整名称
   */
  static setFont(fontName: string): void;
  /**
   * 静态方法，截取当前场景图片，并提供下载链接,直接SSmap.FileSystem.saveRenderImage(width,height,name,format)进行调用
   * @param width 图片宽度
   * @param height 图片高度
   * @param name 图片名称
   * @param format 图片格式("PNG","JPEG")
   */
  static saveRenderImage(width: number, height: number, name: string, format: string): void;
}
