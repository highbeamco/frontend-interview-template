import classNames from "classnames";
import { ComponentProps, FC } from "react";
import Rodal from "rodal";

import "rodal/lib/rodal.css";
import styles from "./Modal.module.scss";

/**
 * Modal component that wraps Rodal defaults.
 * Rodal docs: https://chenjiahan.github.io/rodal/
 */
const Modal: FC<ComponentProps<typeof Rodal>> = ({ className, ...props }) => {
  return (
    <Rodal
      closeOnEsc
      className={classNames(styles.content, className)}
      duration={150}
      {...props}
    />
  );
};

export default Modal;
