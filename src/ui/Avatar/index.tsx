import classNames from "classnames";

import styles from "./Avatar.module.scss";

type AvatarVariant = "purple-dark" | "purple-light";

type AvatarSize = 32 | 44;

const avatarVariants: { [key in AvatarVariant]: string } = {
  "purple-dark": styles.purpleDark,
  "purple-light": styles.purpleLight,
};

const avatarSizes: { [key in AvatarSize]: string } = {
  32: styles.size32,
  44: styles.size44,
};

type Props = {
  onClick?: () => void;
  initials?: string;
  variant: AvatarVariant;
  size: AvatarSize;
  className?: string;
};

const Avatar: React.FC<Props> = ({
  onClick,
  initials,
  className,
  variant,
  size,
}) => (
  <div
    onClick={onClick}
    className={classNames(
      className,
      styles.avatar,
      avatarVariants[variant],
      avatarSizes[size],
      onClick && styles.clickable
    )}
  >
    {initials?.slice(0, 2).toUpperCase() || ""}
  </div>
);

export default Avatar;
