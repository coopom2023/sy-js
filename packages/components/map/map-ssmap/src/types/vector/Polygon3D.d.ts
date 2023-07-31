import { AltitudeMethod } from '../../enums/AltitudeMethod'
import { AntiTextureRep } from '../../enums/AntiTextureRep'
import { TextureProjectionSceneMode } from '../../enums/TextureProjectionSceneMode'
import { BrushStyle } from '../../enums/BrushStyle'
import { FillMode } from '../../enums/FillMode'
import type { Color } from '../base/Color'
import type { Feature } from '../base/Feature'
import type { Vector2 } from '../base/Vector2'
import type { Vector3 } from '../base/Vector3'
import type { Line } from './Line'

/**
 * 3D多边形物体, 有线和填充两种模式
 * @example
 * let polygon3d = new SSmap.Polygon3D(); //创建画面对象
 * polygon3d.color = SSmap.Color.fromRgb(0, 240, 120, 128);//颜色
 * polygon3d.alpha = 0.5;      //透明度
 * polygon3d.fillAlpha = 0.9;  //填充透明度
 * polygon3d.setFillColor(SSmap.Color.fromRgb(33, 123, 183, 255)); //填充颜色
 * polygon3d.fillStyle = SSmap.BrushStyle.TexturePattern;  //SolidPattern or TexturePattern
 * 
 * polygon3d.addPoint(SSmap.Vector3.create(-2401407.954, 5382591.947, 2429380.474));
 * polygon3d.addPoint(SSmap.Vector3.create(-2401490.6719, 5382552.657, 2429385.5099));
 * polygon3d.addPoint(SSmap.Vector3.create(-2401492.175, 5382588.7119, 2429305.993));
 * polygon3d.addPoint(SSmap.Vector3.create(-2401416.810, 5382619.619, 2429308.5397));
 * polygon3d.addProperty("多边形", "多边形属性测试");
 * polygon3d.setAltitude(30);
 * polygon3d.setAltitudeMethod(SSmap.AltitudeMethod.Absolute); //绝对模式
 * 
 * polygon3d.fillMode = SSmap.FillMode.FillImage;             //设置填充方式 NoFill, FillColor, FillImage
 * polygon3d.image = imageUrl;    //使用纹理贴图
 * polygon3d.setRepeat(10);                           //纹理重复次数
 * 
 * //SSmap.AltitudeMethod.OnTerrain时有效. TerrainOnly: 覆盖地面 WholeScene: 覆盖范围内的所有场景
 * //polygon3d.setSceneMode(SSmap.TextureProjectionSceneMode.TerrainOnly); 
 * polygon3d.draw();   //绘制
 * polygon3d.end();    //end之后不能添加点
 */
export class Polygon3D extends Line {
/** 获取或者设置polygon填充面的透明度，默认：0.9 */
  fillAlpha: number

  /** 获取或者设置polygon填充面的填充样式，默认：SolidPattern */
  fillStyle: BrushStyle

  /** 获取或者设置polygon填充面的填充模式：无填充, 填充颜色, 填充图片，默认：FillColor */
  fillMode: FillMode

  /** 获取或者设置多边形填充的图片 */
  image: string

  /** 获取或者设置polygon是否填充水面纹理，默认：false */
  waterShader: boolean

  /** 获取或者设置多边形深度检测的有效距离，默认：100000 */
  depthTestDistance: number

  /** 获取或者设置多边形线框的颜色，默认：{1,1} */
  textureScale: Vector2

  /** 获取或者设置多边形纹理填充的重复纹理修复方案，默认：AntitextureRep.NoTile1 */
  antiTile: AntiTextureRep

  /**
   * 获取polygon的海拔模式
   */
  altitudeMethod(): AltitudeMethod;

  /**
   * 设置polygon的海拔模式
   * @param altiMethod 海拔模式
   */
  setAltitudeMethod(altiMethod: AltitudeMethod): void;

  /**
   * 获取polygon的宽度值
   */
  width(): number;

  /**
   * 设置polygon的宽度值
   * @param width 宽度值
   */
  setWidth(width: number): void;

  /**
   * 获取polygon的填充颜色
   */
  fillColor(): Color;

  /**
   * 设置polygon的填充颜色
   * @param color 颜色值
   */
  setFillColor(color: Color): void;

  /**
   * 获取插值点的最小距离
   */
  minDistance(): number;

  /**
   * 设置插值点的最小距离
   * @param dist 插值点的最小距离
   */
  setMinDistance(dist: number): void;

  /**
   * 增加一个坐标点
   * @param point 笛卡尔坐标值
   */
  add(point: Vector3): void;

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
   * 结束, 之后不能增加点到polygon中, 除非使用modify进行强行修改
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
   * 获取polygon的近地面基点高度(限高分析时使用)
   */
  height(): number;

  /**
   * 设置polygon的近地面基点高度(限高分析时使用)/font>
   * @param hight 基点高度
   */
  setHeight(hight: number): void;

  /**
   * 获取polygon的限制高度(限高分析时使用)
   */
  limitHeight(): number;

  /**
   * 设置polygon的限制高度(限高分析时使用)/font>
   * @param hight 限制高度
   */
  setLimitHeight(hight: number): void;

  /**
   * 获取贴地polygon的场景模式，只覆盖地面，或者覆盖整个场景中的物体
   */
  sceneMode(): TextureProjectionSceneMode;

  /**
   * 设置贴地polygon的场景模式，只覆盖地面，或者覆盖整个场景中的物体，需altitudeMethod为OnTerrain时才生效
   * @param sceneMode 场景模式
   */
  setSceneMode(sceneMode: TextureProjectionSceneMode): void;

  /**
   * 通过鼠标点击获取feature,用于贴地模式的属性拾取。绝对模式下使用Scene#getFeatureByMouse
   */
  getFeatureByMouse(): Feature;

  /**
   * 静态方法，根据feature获取所在的Polygon3D，直接SSmap.Polygon3D.getSelect(feauture)进行调用
   * @param feature 特征
   */
  static getSelect(feature: Feature): Polygon3D;

  /**
   * 静态方法，根据feature高亮所在的多边形，直接SSmap.Polygon3D.setHighLight(feauture,highLight)进行调用
   * @param feature 特征
   * @param highLight 是否高亮
   */
  static setHighLight(feature: Feature, highLight: boolean): void;
}