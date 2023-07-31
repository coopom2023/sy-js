/**
 * 该项是反锯齿方式枚举说明,用于RenderSystem#antiAliasing
 * @example
 * let option =SSmap.AntiAliasing.FXAA;
 */
export enum AntiAliasing {
  NoAA = 'Normal Anti-Aliasing',
  FXAA = 'Fast approximate Anti-Aliasing',
  TAA = 'Temporal Anti-Aliasing',
}
