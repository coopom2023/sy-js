import type { ByteArray } from '../base/ByteArray'

/**
 * ShaderProgram是渲染模块的核心类，负责gpu渲染的方式，一般情况下由VertexShader和FragmentShader组成。
 * @example
 * let blackAndWhiteShader = `#version 300 es
 *  precision highp float;
 *  precision highp sampler2D;
 * 
 *  layout(location = 0) out vec4 FragColor;
 * 
 *  in vec2 v_textureCoordinates;
 * 
 *  uniform float gradations;
 *  // 内置颜色缓存
 *  uniform sampler2D colorTexture;
 * 
 *  float czm_luminance(vec3 rgb)
 *  {
 *    // Algorithm from Chapter 10 of Graphics Shaders.
 *    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
 *    return dot(rgb, W);
 *  }
 * 
 *  void main()
 *  {
 *    vec3 rgb = texture(colorTexture, v_textureCoordinates).rgb;
 *    float luminance = czm_luminance(rgb);
 *    float darkness = luminance * gradations;
 *    darkness = (darkness - fract(darkness)) / gradations;
 *    FragColor = vec4(vec3(darkness), 1.0);
 *  }
 * `;
 * // 测试, 正式使用需要保存起来, 关闭时要删除
 * let material = new SSmap.Material();
 * material.shaderProgram = SSmap.ShaderProgram.createViewportQuadShader(blackAndWhiteShader);
 * // 测试, 正式使用需要保存起来, 关闭时要删除
 * let postProcess = new SSmap.PostProcess();
 * postProcess.material = material;
 * GlobalViewer.renderSystem.addPostProcess(postProcess);
 * GlobalViewer.addEventListener("update", function () {
 *   // 1-20
 *   material.setParameterFloat("gradations", 10);
 * });
 */
export class ShaderProgram {
  /** 获取或者设置顶点Shader的源码 */
  vertexShaderCode: ByteArray
  /** 获取或者设置像素Shader的源码 */
  fragmentShaderCode: ByteArray

  /**
   * 静态方法，依据代码描述创建着色器程序对象，直接SSmap.ShaderProgram.createViewportQuadShader(code)进行调用
   * @param code 代码描述
   */
  static createViewportQuadShader(code: string): ShaderProgram;
}
