import { Coins } from "@phosphor-icons/react";
import { CSSProperties, FC } from "react";
import colors from "styles/colors";

import highbeamAccountIcon from "./assets/highbeam-account-icon.svg";
import highbeamHighYieldIcon from "./assets/highbeam-high-yield-account-icon.svg";

export type AccountType =
  | "highbeam-account"
  | "highbeam-high-yield-account"
  | "highbeam-capital-account";

type BaseIconProps = {
  size?: number;
  className?: string;
  style?: CSSProperties;
};

type IconImgProps = BaseIconProps & {
  src: string;
  alt: string;
};

const IconImg: FC<IconImgProps> = ({ src, alt, className, size = 18, style }) => {
  return <img src={src} alt={alt} className={className} width={size} height={size} style={style} />;
};

type Props = BaseIconProps & {
  type: AccountType;
};

const AccountIcon: FC<Props> = ({ type: platformName, ...baseIconProps }) => {
  switch (platformName) {
    case "highbeam-account":
      return <IconImg src={highbeamAccountIcon} alt="Highbeam account" {...baseIconProps} />;
    case "highbeam-high-yield-account":
      return <IconImg src={highbeamHighYieldIcon} alt="Highbeam high yield" {...baseIconProps} />;
    case "highbeam-capital-account":
      return <Coins color={colors.purple[500]} alt="Capital" {...baseIconProps} />;
  }
};

export default AccountIcon;
