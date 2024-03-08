import classNames from "classnames";
import { forwardRef, useRef } from "react";
import AnimatedSpinner from "ui/AnimatedSpinner";

import styles from "./Button.module.scss";

type ButtonVariant =
  | "default"
  | "primary"
  | "secondary"
  | "tertiary"
  | "danger"
  | "ghost"
  | "plain";

type ButtonSize = "normal" | "small" | "extra-small";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  isSquare?: boolean; // this prop is to set equal padding horizontally and vertically mostly for icons we need this
  fullWidth?: boolean;
  isLoading?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      className,
      size = "normal",
      isSquare = false,
      fullWidth,
      isLoading,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <button
        type="button"
        ref={ref ? ref : buttonRef}
        className={classNames(
          styles.button,
          size === "normal" && styles.normal,
          size === "small" && styles.small,
          size === "extra-small" && styles.extraSmall,
          fullWidth && styles.fullWidth,
          isSquare && styles.square,
          className,
          {
            [styles.default]: variant === "default",
            [styles.primary]: variant === "primary",
            [styles.secondary]: variant === "secondary",
            [styles.tertiary]: variant === "tertiary",
            [styles.danger]: variant === "danger",
            [styles.ghost]: variant === "ghost",
            [styles.plain]: variant === "plain", // unsets default style
          }
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <AnimatedSpinner />}
        {children}
      </button>
    );
  }
);

export default Button;
