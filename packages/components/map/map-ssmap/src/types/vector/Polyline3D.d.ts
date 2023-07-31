import type { Vector3 } from '../base/Vector3'
import type { Feature } from '../base/Feature'
import type { Line } from './Line'

/**
 * 3D线物体
 * @example
 * var polyline = new SSmap.Polyline3D(); //创建画线对象      
 * polyline.alpha = 0.9;               //透明度
 * //or
 * polyline.setAltitudeMethod(SSmap.AltitudeMethod.Absolute); //Absolute
 * polyline.setAltitude(70);
 * 
 * //添加画线所需要的点
 * polyline.addPoint(SSmap.Vector3.create(-2401102.17803038, 5381837.221917883, 2431322.4088967624));
 * polyline.addPoint(SSmap.Vector3.create(-2401217.6519644577, 5382036.858405292, 2430770.1142349862));
 * polyline.addPoint(SSmap.Vector3.create(-2402878.7401228216, 5381281.544949363, 2430800.6906644125));
 * polyline.addPoint(SSmap.Vector3.create(-2402770.937031862, 5381018.617677656, 2431484.598601653));
 * polyline.addPoint(SSmap.Vector3.create(-2402302.095332233, 5381063.218309714, 2431846.686779186));
 * polyline.addPoint(SSmap.Vector3.create(-2401703.776193555, 5381301.782318114, 2431909.346477503));
 * polyline.setWidth(10);             //线宽
 * polyline.color = SSmap.Color.fromRgb(255, 0, 0, 255); //设置线颜色
 * 
 * //发光和动画组合, 纹理贴图+动画组合(Repeat在有纹理时有效), 贴图优先级高于发光
 * polyline.setGlowMaterial(true); //发光
 * polyline.animationRun = true;   //动画
 * polyline.animationTimer = 3000; //动画一个周期的时间(ms), 控制动画速度
 * polyline.setRepeat(20);     //纹理动画的重复数量(箭头一类动画)
 * polyline.setImageUrl(imageUrl);
 * 
 * polyline.draw();    //绘制
 * polyline.end();     //end之后不能添加点
 */
export class Polyline3D extends Line {
  /** 获取或者设置线的动画播放周期时间(单位ms)，默认：2000 */
  animationTimer: number

  /** 获取或者设置线的动画，默认：false */
  animationRun: boolean

  /** 获取或者设置线的深度检测，默认：true */
  depthTest: boolean

  /** 获取或者设置自发光强度，默认：0.5 */
  glowPower: number

  /** 获取或者设置锥度强度，默认：1 */
  taperPower: number

  /**
   * 获取线的宽度值
   */
  width(): number;

  /**
   * 设置线的宽度值
   * @param width 宽度值
   */
  setWidth(width: number): void;

  /**
   * 增加一个坐标点
   * @param point 笛卡尔坐标值
   */
  addPoint(point: Vector3): void;

  /**
   * 移除最后一个点
   */
  removeLast(): void;

  /**
   * 绘制
   */
  draw(): void;

  /**
   * 重绘, 修改颜色，线宽，材质之后调用
   */
  redraw(): void;

  /**
   * 增加一个临时点, 画线到此点
   * @param point 笛卡尔坐标值
   */
  lineTo(point: Vector3): void;

  /**
   * 结束, 之后不能增加点到线中, 除非使用modify进行强行修改
   */
  end(): void;

  /**
   * 强制修改，根据当前的属性重新生成线
   */
  modify(): void;

  /**
   * 点的数量
   */
  numOfPoints(): number;

  /**
   * 静态方法，根据feature获取所在的Polyline3D，直接SSmap.Polyline3D.getSelect(feauture)进行调用
   * @param feature 特征
   */
  static getSelect(feature: Feature): Polyline3D;

  /**
   * 静态方法，根据feature高亮所在的线段，直接SSmap.Polyline3D.getSelect(feauture)进行调用
   * @param feature 特征
   * @param highLight 是否高亮
   */
  static setHighLight(feature: Feature, highLight: boolean): void;
}
