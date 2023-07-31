import type { Future } from '../base/Future'
import type { Quaternion } from '../base/Quaternion'
import type { Vector3 } from '../base/Vector3'
import type { Component } from '../scene/Component'

/**
 * Model对象用于加载fbx/obj/gltf/glb等模型数据
 * @example
 * let baseUrl = window.document.location.href.substring(0, url.lastIndexOf('/')+1);
 * 
 * let url = fbxUrl;
 * let offset = SSmap.Vector3.create(0, 0, 0);
 * let scale = SSmap.Vector3.create(1.0,1.0,1.0);
 * let aXis = SSmap.Vector3.create(1,0,0);
 * let rotation = SSmap.Quaternion.fromAxisAndAngle(aXis, -90); //x轴旋转-90度
 * let srs = "EPSG:4547";
 * 
 * let model = new SSmap.Model(url,);
 * model.offset = offset;
 * model.scale = scale;
 * model.rotation = rotation;
 * model.srs = srs;  //如果有坐标系，可直接设置坐标系
 * 
 * //如果无坐标系，可直接设置坐标信息
 * //let pos = SSmap.Cartographic.fromDegrees(114.0239461, 22.6123102,100);
 * //model.transform.cartographic=pos;
 * 
 * 
 * //通过entity以component的方式添加到rootEntity的子节点中，场景才会进行渲染
 * var entity = new SSmap.Entity();
 * entity.addComponent(model);                 
 * GlobalViewer.scene.addEntity(entity);
 * 
 * model.readyPromise.then(function () {
 *   console.log('加载完成')
 *   GlobalViewer.scene.mainCamera.cameraController().flyToCartographic(
 *       SSmap.Cartographic.fromDegrees(114.0239461, 22.6123102,200),
 *       2, //飞行时间，单位s 
 *       0, //heading
 *       -45, //pitch
 *       0  //roll
 *   );
 * });
 */
export class Model extends Component {
  /** 获取模型的url */
  readonly url: string
  
  /** 获取或者设置模型xyz轴的偏移，默认(0,0,0) */
  offset: Vector3
  
  /** 获取或者设置模型的在xyz轴的缩放比例，默认(1.0,1.0,1.0) */
  scale: Vector3
  
  /** 获取或者设置模型的旋转，类型为欧拉角四元数 */
  rotation: Quaternion
  
  /** 获取或者设置模型的坐标系，如"EPSG:4547" */
  srs: string
  
  /** 获取模型异步加载完成时的成果，具体使用看示例 */
  readyPromise: Future

  /**
   * 实例
   * @param url 模型地址
   */
  constructor(url: string)
}
