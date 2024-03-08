import classNames from "classnames";

import styles from "./Text.module.scss";
import { TextSize, TextWeight } from "./TextTypes";

export type TextProps = {
  size?: TextSize;
  weight?: TextWeight;
  align?: "left" | "center" | "right";
  color?: string;
  numeric?: boolean; // TODO (jhudson): Audit.
  underline?: boolean;
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLParagraphElement>;

const Text: React.FC<TextProps> = ({
  className,
  size,
  weight,
  align,
  color,
  underline,
  numeric = false,
  children,
  as: Component = "div",
  ...props
}) => (
  <Component
    className={classNames(
      styles.text,
      size && styles[`size--${size}`],
      weight && styles[`weight--${weight}`],
      align && styles[`align--${align}`],
      underline && styles.underline,
      className
    )}
    style={{
      fontFeatureSettings: numeric ? "'tnum' on, 'lnum' on" : "normal",
      color: color,
    }}
    {...props}
  >
    {children}
  </Component>
);

export default Text;
