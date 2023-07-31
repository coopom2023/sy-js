import type { Color } from '../base/Color'

/**
 * A light source. This type describes an interface and is not intended to be instantiated directly. Together, color and intensity produce a high-dynamic-range light color. intensity can also be used individually to dim or brighten the light without changing the hue.
 */
export class Light {
  /**
   * The color of the light.
   */
  color: Color
  /**
   * The intensity controls the strength of the light. intensity has a minimum value of 0.0 and no maximum value.
   */
  intensity: number
  
}
