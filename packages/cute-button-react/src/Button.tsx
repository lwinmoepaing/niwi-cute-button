export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className="niwi-cute-button">{props.children}</button>;
}

Button.displayName = "Button";
