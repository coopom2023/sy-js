import type { Canvas } from '../scene/Canvas'
import type { Scene } from '../engine/Scene'
import type { InputSystem } from './InputSystem'
import type { RenderSystem } from './RenderSystem'
import type { TimeSystem } from './TimeSystem'

/**
 * Viewer是系统的入口模块，通过GlobalViewer来获取创建好的Viewer实例对象.当该对象被创建后，Engine, Widget, Scene等对象可通过相应的API获取。
 * @example
 * let viewer = GlobalViewer;
 * // or
 * // let viewer = SSmap.getGlobalViewer();
 * viewer.addEventListener('update',function(delta){
 *   console.log('delta time is :'+delta);
 * });
 */
export class Viewer {
  /** 获取或设置画布元素 */
  canvasEl: HTMLCanvasElement
  /** 获取Canvas画布 */
  readonly canvas: Canvas
  /** 获取Scene场景对象 */
  readonly scene: Scene
  /** 获取时间系统对象，用于设置时间，调整光照 */
  readonly timeSystem: TimeSystem
  /** 获取输入系统对象，用于获取鼠标位置 */
  readonly inputSystem: InputSystem
  /** 获取渲染系统对象，用于调整后期渲染参数 */
  readonly renderSystem: RenderSystem
  
  /**
   * 指定shaders.pak和font.rcc的位置，默认在底层库同级的assets/目录下
   * @param url shaders.pak的url
   */
  setBaseUrl(url: string): void;
  /**
   * 添加监听器
   * @param type 监听事件类型，有效的类型有：update, mousedown, mouseup, mousemove,用于帧监听
   * @param fn 监听函数，带一个参数delta,获得每帧的时间间隔
   */
  addEventListener(type: string, fn: any): void;
  /**
   * 移除监听器
   * @param type 监听事件类型，有效的类型有：update, mousedown, mouseup, mousemove,用于帧监听
   */
  removeEventListener(type: string): void;
  /**
   * 退出整个场景地球
   */
  quit(): void;
  /**
   * 设置认证服务Url，需要才能正常使用引擎
   * @param url 认证服务的Url
   */
  setAuthorizedUrl(url: string): void;
}
