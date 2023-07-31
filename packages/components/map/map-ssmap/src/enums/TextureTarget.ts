/**
 * 该项是纹理目标的类型枚举说明，对应OPENGL中的值，用于Texture#target
 * @example
 * let option = SSmap.TextureTarget.TargetAutomatic;
 */
export enum TextureTarget {
  TargetAutomatic = 'Target will be determined by the engine',
  Target1D = 'GL_TEXTURE_1D',
  Target1DArray = 'GL_TEXTURE_1D_ARRAY',
  Target2D = 'GL_TEXTURE_2D',
  Target2DArray = 'GL_TEXTURE_2D_ARRAY',
  Target3D = 'GL_TEXTURE_3D',
  TargetCubeMap = 'GL_TEXTURE_CUBE_MAP',
  TargetCubeMapArray = 'GL_TEXTURE_CUBE_MAP_ARRAY',
  Target2DMultisample = 'GL_TEXTURE_2D_MULTISAMPLE',
  Target2DMultisampleArray = 'GL_TEXTURE_2D_MULTISAMPLE_ARRAY',
  TargetRectangle = 'GL_TEXTURE_RECTANGLE',
  TargetBuffer = 'GL_TEXTURE_BUFFER',
}
