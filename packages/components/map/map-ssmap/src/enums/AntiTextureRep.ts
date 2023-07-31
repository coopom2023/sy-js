/**
 * 该项是重复纹理的修复方案枚举说明,用于Decallayer#antiTextureRep
 * @example
 * let option = SSmap.AntiTextureRep.Tile;
 */
export enum AntiTextureRep {
  Tile = '默认的重复采样',
  NoTile1 = '通过反瓦块化, 消除重复感1',
  NoTile2 = '通过反瓦块化, 消除重复感2',
}
