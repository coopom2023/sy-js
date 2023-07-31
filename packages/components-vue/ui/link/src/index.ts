/** 传入属性 */
export type LinkProps = {
  /** 是否禁用 */
  disabled?: boolean;
  /** 跳转地址 */
  href?: string;
}

/** 响应事件 */
export type LinkEmits = {
  /** 点击事件 */
  (e: 'click', evt: MouseEvent): boolean;
}
