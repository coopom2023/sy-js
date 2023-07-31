import type { ImageryWrapper } from './ImageryWrapper'

/**
 * 天地图影像图层
 * @example
 * var tianditu = new SSmap.TiandituImageryLayer();
 * tianditu.url = tiandituUrl;
 * tianditu.useWebMercator = false;
 * tianditu.tileWidth = 256;
 * tianditu.tileHeight = 256;
 * tianditu.minimumLevel = 1; 
 * tianditu.maximumLevel = 17;
 * tianditu.hasAlphaChannel = true;
 * tianditu.isLabel = true;
 * tianditu.componentComplete();
 */
export class TiandituImageryLayer extends ImageryWrapper {
  /**
   * 加载图层
   */
  componentComplete(): void
}
