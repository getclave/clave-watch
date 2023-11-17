import { useMemo } from "react";
import { StyleSheet } from "react-native";

import type { StyleOverride, StyleOverrideItem } from "../../types";
import { DMSans } from "../../utils/font";
import { useCDSTheme } from "../../utils/theme";
import { type CDSTheme } from "../../utils/theme/types";
import BaseComponent from "../Base/BaseComponent.react";
import BaseTypography, {
  type BaseTypographyProps,
  type BaseTypographySpecifProps,
} from "./BaseTypography.react";

export type CDSTypographyType =
  | "large"
  | "title1"
  | "title2"
  | "title3"
  | "title4"
  | "caption"
  | "text1"
  | "text2"
  | "text3"
  | "text3Error"
  | "subtext"
  | "subtext2"
  | "subtext3"
  | "subtext4"
  | "subtext5"
  | "link"
  | "link2";

interface Props extends Omit<BaseTypographyProps, BaseTypographySpecifProps> {
  isTesting?: boolean;
  type: CDSTypographyType;
  fontFamily?: string;
  color?: string;
}

export default function CDSTypography(props: Props): JSX.Element {
  const {
    isTesting,
    type,
    margin,
    padding,
    children,
    fontFamily,
    textAlign,
    color,
    ...rest
  } = props;
  const { theme } = useCDSTheme();
  const dynamicStyles = styles(theme);

  const extraStyles: StyleOverride = useMemo(() => {
    const obj: StyleOverrideItem = {};
    if (fontFamily != null) {
      obj.fontFamily = fontFamily;
    }
    if (textAlign != null) {
      obj.textAlign = textAlign;
    }
    if (color != null) {
      obj.color = color;
    }
    return [obj];
  }, [fontFamily, textAlign, color]);

  return (
    <>
      <BaseComponent isTesting={isTesting}>
        <BaseTypography
          margin={margin}
          padding={padding}
          styleOverride={[dynamicStyles[type], ...extraStyles]}
          {...rest}
        >
          {children}
        </BaseTypography>
      </BaseComponent>
    </>
  );
}

//eslint-disable-next-line
const styles = (theme: CDSTheme) =>
  StyleSheet.create({
    large: {
      fontSize: 50,
      fontFamily: DMSans.medium,
      color: theme.typography.text,
    },
    title1: {
      fontSize: 32,
      fontFamily: DMSans.medium,
      color: theme.typography.text,
    },
    title2: {
      fontSize: 28,
      fontFamily: DMSans.medium,
      color: theme.typography.text,
    },
    title3: {
      fontSize: 24,
      fontFamily: DMSans.medium,
      color: theme.typography.text,
    },
    title4: {
      fontSize: 20,
      fontFamily: DMSans.medium,
      color: theme.typography.text,
    },
    text1: {
      fontSize: 16,
      fontFamily: DMSans.regular,
      color: theme.typography.text,
    },
    text2: {
      fontSize: 14,
      fontFamily: DMSans.regular,
      color: theme.typography.text,
      flexShrink: 1,
    },
    text3: {
      fontSize: 16,
      fontFamily: DMSans.medium,
      color: theme.typography.text,
    },
    text3Error: {
      fontSize: 16,
      fontFamily: DMSans.medium,
      color: theme.input.error,
    },
    caption: {
      fontSize: 12,
      fontFamily: DMSans.medium,
      color: theme.typography.text,
    },
    subtext: {
      fontSize: 14,
      fontFamily: DMSans.regular,
      color: theme.typography.subtext,
    },
    subtext2: {
      fontSize: 12,
      fontFamily: DMSans.regular,
      color: theme.typography.subtext,
    },
    subtext3: {
      fontSize: 12,
      fontFamily: DMSans.regular,
      color: theme.typography.subtext3,
    },
    subtext4: {
      fontSize: 14,
      fontFamily: DMSans.regular,
      color: theme.typography.subtext3,
    },
    subtext5: {
      fontSize: 14,
      fontFamily: DMSans.bold,
      color: theme.typography.text,
    },
    link: {
      fontSize: 14,
      fontFamily: DMSans.regular,
      color: theme.typography.link,
      textDecorationStyle: "solid",
      textDecorationLine: "underline",
    },
    link2: {
      fontSize: 16,
      fontFamily: DMSans.medium,
      color: theme.typography.link,
      textDecorationLine: "underline",
    },
  });
