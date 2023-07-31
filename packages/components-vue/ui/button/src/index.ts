/** 传入属性 */
export type ButtonProps = {
  /** 是否禁用 */
  disabled?: boolean;
}

/** 响应事件 */
export type ButtonEmits = {
  /** 点击事件 */
  (e: 'click', evt: MouseEvent): boolean;
}
