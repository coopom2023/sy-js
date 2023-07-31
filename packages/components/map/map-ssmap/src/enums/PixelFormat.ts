/**
 * 该项是像素格式枚举说明,对应OPENGL中的值，用于TextureImage#pixelFormat
 * @example
 * let option = SSmap.PixelFormat.NoSourceFormat;
 */
export enum PixelFormat {
  NoSourceFormat = 'GL_NONE',
  Red = 'GL_RED',
  RG = 'GL_RG',
  RGB = 'GL_RGB',
  BGR = 'GL_BGR',
  RGBA = 'GL_RGBA',
  BGRA = 'GL_BGRA',
  Red_Integer = 'GL_RED_INTEGER',
  RG_Integer = 'GL_RG_INTEGER',
  RGB_Integer = 'GL_RGB_INTEGER',
  BGR_Integer = 'GL_BGR_INTEGER',
  RGBA_Integer = 'GL_RGBA_INTEGER',
  BGRA_Integer = 'GL_BGRA_INTEGER',
  Stencil = 'GL_STENCIL_INDEX',
  Depth = 'GL_DEPTH_COMPONENT',
  DepthStencil = 'GL_DEPTH_STENCIL',
  Alpha = 'GL_ALPHA',
  Luminance = 'GL_LUMINANCE',
  LuminanceAlpha = 'GL_LUMINANCE_ALPHA',
}
