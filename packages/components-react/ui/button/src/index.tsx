type UIButtonProps = {
  /** 是否禁用 */
  disabled?: boolean;
  click?(evt: React.MouseEvent): void;
  children?: React.ReactNode;
}

export function UIButton(props: UIButtonProps) {
  return (
    <button
      disabled={props.disabled}
      onClick={props.click}
    >
      {props.children}
    </button>
  )
}

export default UIButton
