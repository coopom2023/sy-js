import type { Component } from '../scene/Component'

/**
 * 帧动画组件
 * @example
 * var frameAction = new SSmap.FrameAction();
 * frameAction.onTriggered(function (deltaSeconds){
 *   //每一帧都会运行
 *   console.log('actionframe : ' + deltaSeconds);
 * });
 * scene.rootEntity.addComponent(frameAction); 
 */
export class FrameAction extends Component {
  /**
   * 每一帧都会触发该函数
   * @param fp 带number入参的函数
   */
  onTriggered(fp: (seconds: number) => void): void;
}
