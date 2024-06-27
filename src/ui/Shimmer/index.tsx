import classNames from "classnames";
import { CSSProperties, FC } from "react";

import styles from "./Shimmer.module.scss";

type Props = {
  className?: string;
  style?: CSSProperties;
};

const Shimmer: FC<Props> = ({ className, style }) => {
  return <div className={classNames(styles.shimmer, className)} style={style} />;
};

export default Shimmer;
