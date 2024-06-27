import classNames from "classnames";
import { ForwardRefRenderFunction, forwardRef } from "react";
import AnimatedSpinner from "ui/AnimatedSpinner";

import styles from "./Button.module.scss";

export type ButtonVariant =
  | "default"
  | "primary"
  | "secondary"
  | "tertiary"
  | "danger"
  | "ghost"
  | "plain";

export type ButtonSize = "md" | "sm" | "xs";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  isSquare?: boolean; // this prop is to set equal padding horizontally and vertically mostly for icons we need this
  fullWidth?: boolean;
  isLoading?: boolean;
  tooltip?: React.ReactNode;
};

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    variant = "default",
    className,
    size = "md",
    isSquare = false,
    fullWidth,
    isLoading,
    disabled,
    children,
    ...props
  },
  ref,
) => {
  return (
    <button
      type="button"
      ref={ref}
      className={classNames(
        styles.button,
        styles[`size-${size}`],
        styles[`variant-${variant}`],
        fullWidth && styles.fullWidth,
        isSquare && styles.square,
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <AnimatedSpinner />}
      {children}
    </button>
  );
};

// This ensures the component name is correct when inferred by storybook.
Button.displayName = "Button";

export default forwardRef(Button);
