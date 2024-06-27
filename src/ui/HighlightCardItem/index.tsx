import classNames from "classnames";
import { FC, ReactNode } from "react";
import Shimmer from "ui/Shimmer";

import styles from "./HighlightCardItem.module.scss";

export const HighlightCardItemLabelShimmer = () => <Shimmer style={{ maxWidth: "120px" }} />;
export const HighlightCardItemValueShimmer = () => <Shimmer style={{ maxWidth: "180px" }} />;
export const HighlightCardItemSubtextShimmer = () => <Shimmer style={{ maxWidth: "180px" }} />;

type Props = {
  sideRuleColor?: "default" | "success" | "warning" | "none";
  label: ReactNode;
  value: ReactNode;
  subtext?: ReactNode;
};

const HighlightCardItem: FC<Props> = ({ sideRuleColor = "default", label, value, subtext }) => {
  return (
    <div>
      <div className={styles.highlightContainer}>
        <div className={classNames(styles.leftHandRule, styles[sideRuleColor])} />

        <div className={styles.label}>{label}</div>

        <div className={styles.value}>{value}</div>
      </div>

      {subtext && <div className={styles.subtext}>{subtext}</div>}
    </div>
  );
};

export default Object.assign(HighlightCardItem, {
  LabelShimmer: HighlightCardItemLabelShimmer,
  ValueShimmer: HighlightCardItemValueShimmer,
  SubtextShimmer: HighlightCardItemSubtextShimmer,
});
