type UILinkProps = {
  href?: string;
  target?: string;
  click?(evt: React.MouseEvent): void;
  children?: React.ReactNode;
}

export function UILink(props: UILinkProps) {
  return (
    <a
      href={props.href}
      target={props.target}
      onClick={props.click}
    >
      {props.children}
    </a>
  )
}

export default UILink
