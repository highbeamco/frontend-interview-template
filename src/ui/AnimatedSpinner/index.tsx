import { Icon, IconProps, Spinner as SpinnerIcon } from "@phosphor-icons/react";
import classNames from "classnames";
import { FC } from "react";

import styles from "./AnimatedSpinner.module.scss";

type Props = IconProps & {
  Icon?: Icon;
};

const AnimatedSpinner: FC<Props> = ({
  Icon = SpinnerIcon,
  className,
  ...rest
}) => {
  return (
    <Icon className={classNames(className, styles.spin)} size={14} {...rest} />
  );
};

export default AnimatedSpinner;
