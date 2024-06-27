import classNames from "classnames";
import { cloneElement, ReactElement } from "react";
import colors from "styles/colors";

import styles from "./AccountDisplay.module.scss";

export type AccountDisplayIconSize = 16 | 18 | 20 | 24;

type AccountDisplayWeight = 400 | 500 | 700;

const maskAccountNumber = (accountNumber: string): string => {
  return `•••• ${accountNumber.slice(-4)}`;
};

const getTextSizeFromIconSize = (size: AccountDisplayIconSize): number => {
  switch (size) {
    case 16:
      return 12;
    case 18:
      return 14;
    case 20:
      return 16;
    case 24:
      return 18;
  }
};

const getColumnGapFromIconSize = (size: AccountDisplayIconSize): number => {
  if (size >= 18) return 8;
  else return 4;
};

// NB(alex): This is a hack but it makes the text look a lot nicer in the context of a paragraph. It works :shrug:.
const getTextMarginTopFromIconSize = (size: AccountDisplayIconSize): number => {
  if (size === 16) return 1;
  else return 0;
};

type Props = {
  iconSize?: AccountDisplayIconSize;
  icon: ReactElement<{ size: number }>;
  accountName: string;
  accountNumber?: string;
  shortMethodName?: string;
  style?: React.CSSProperties;
  className?: string;
  textClassName?: string;
  weight?: AccountDisplayWeight;
  as?: React.ElementType;
};

const AccountDisplay: React.FC<Props> = ({
  iconSize = 18,
  icon,
  accountName,
  accountNumber,
  shortMethodName,
  weight = 500,
  style,
  className,
  textClassName,
}) => {
  return (
    <div
      className={classNames(styles.container, className)}
      style={{
        columnGap: getColumnGapFromIconSize(iconSize),
        ...style,
      }}
    >
      {cloneElement(icon, { size: iconSize })}

      <div
        style={{
          marginTop: getTextMarginTopFromIconSize(iconSize),
          fontSize: getTextSizeFromIconSize(iconSize),
          fontWeight: weight,
          color: colors.grey[800],
        }}
        className={classNames(styles.text, textClassName)}
      >
        {accountName}
        {accountNumber && ` ${maskAccountNumber(accountNumber)}`}

        {shortMethodName && <div style={{ color: colors.grey[500] }}>via {shortMethodName}</div>}
      </div>
    </div>
  );
};

export default AccountDisplay;
