import classNames from "classnames";
import { FC, ReactNode } from "react";

import HighlightCardItem from "../HighlightCardItem";

import styles from "./HighlightCard.module.scss";

type HighlightSectionCardProps = {
  sideRuleColor?: "default" | "warning";
  header?: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
};

const HighlightCard: FC<HighlightSectionCardProps> = ({
  sideRuleColor = "default",
  header,
  body,
  footer,
}) => {
  return (
    <div className={classNames(styles.container, styles[sideRuleColor])}>
      <div className={styles.header}>{header}</div>
      <div className={styles.body}>{body}</div>
      <div className={styles.footer}>{footer}</div>
    </div>
  );
};

export default Object.assign(HighlightCard, {
  Item: HighlightCardItem,
});
