import { useMemo } from "react";
import { StyleSheet, View } from "react-native";

import { useHaptic } from "../../hooks/useHaptics";
import type { StyleOverrideItem } from "../../types";
import { CDSColors } from "../../utils/colors";
import { DMSans } from "../../utils/font";
import BaseComponent from "../Base/BaseComponent.react";
import BaseIcon from "../Icon/BaseIcon.react";
import type {
  BaseButtonProps,
  BaseButtonSpecificProps,
} from "./BaseButton.react";
import BaseButton from "./BaseButton.react";
import { filterNulls } from "../../../../../utils/filterNulls";

export type CDSButtonSize =
  | "large"
  | "medium"
  | "xsmall"
  | "xxsmall"
  | "xxxsmall";
export type CDSButtonType =
  | "primary"
  | "dark"
  | "dashed"
  | "danger"
  | "secondary"
  | "secondaryContrast"
  | "gray";
export type CDSButtonWidth = "fullwidth" | string | number;

interface Props extends Omit<BaseButtonProps, BaseButtonSpecificProps> {
  color?: CDSButtonType;
  size?: CDSButtonSize;
  children?: string;
  width?: CDSButtonWidth;
  isTesting?: boolean;
  leftIcon?: () => string;
  rightIcon?: () => string;
  radius?: number;
  iconSize?: number;
  loading?: boolean;
  textColorOverride?: string;
}

export default function CDSButton(props: Props): JSX.Element {
  const {
    color = "primary",
    width = "fullwidth",
    children,
    size = "large",
    disabled,
    isTesting,
    leftIcon,
    radius = 120,
    rightIcon,
    iconSize = 24,
    loading = false,
    onPress,
    textColorOverride,
    ...rest
  } = props;

  const { notifySync } = useHaptic();

  const styleOverride = useMemo(() => {
    const disabledStyle =
      color === "primary"
        ? styles.disabledPrimary
        : color === "secondary"
          ? styles.disabledSecondary
          : styles.disabled;

    return filterNulls<StyleOverrideItem>([
      styles.base,
      styles[color],
      styles[size],
      { borderRadius: radius },
      disabled ? disabledStyle : null,
    ]);
  }, [color, size, disabled, radius, disabled]);

  const textColorStyle = useMemo(() => {
    if (textColorOverride != null) {
      return { color: textColorOverride };
    }

    if (color === "danger") {
      return styles.textdanger;
    } else {
      if (disabled && color === "primary") {
        return styles.textprimarydisabled;
      } else {
        return styles[`text${color}`];
      }
    }
  }, [color, disabled, textColorOverride]);

  const textStyleOverride = useMemo(() => {
    return filterNulls<StyleOverrideItem>([
      styles.text,
      textColorStyle,
      leftIcon != null ? { marginLeft: styles.leftIcon.marginRight } : null,
      rightIcon != null ? { marginRight: styles.rightIcon.marginLeft } : null,
    ]);
  }, [textColorStyle, leftIcon, rightIcon, disabled]);

  return (
    <BaseComponent isTesting={isTesting}>
      <View
        style={[
          styles.wrapper,
          {
            width: width === "fullwidth" ? "100%" : width,
          } as any,
        ]}
      >
        <BaseButton
          onPress={(e): void => {
            notifySync();
            onPress?.(e);
          }}
          leftEl={
            leftIcon != null &&
            !loading && (
              <BaseIcon size={iconSize} color={textColorStyle.color}>
                {leftIcon()}
              </BaseIcon>
            )
          }
          rightEl={
            rightIcon != null && (
              <BaseIcon size={iconSize} color={textColorStyle.color}>
                {rightIcon()}
              </BaseIcon>
            )
          }
          disabled={disabled || loading}
          loading={loading}
          activeOpacity={0.6}
          styleOverride={styleOverride}
          textStyleOverride={textStyleOverride}
          {...rest}
        >
          {children}
        </BaseButton>
      </View>
    </BaseComponent>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
  },
  base: {
    justifyContent: "center",
    alignItems: "center",
  },
  primary: {
    backgroundColor: CDSColors.primary,
  },
  dark: {
    backgroundColor: CDSColors.darkbutton,
  },
  dashed: {
    borderWidth: 1,
    borderColor: CDSColors.primary,
    borderStyle: "dashed",
    backgroundColor: CDSColors.dashedbutton,
  },
  danger: {
    backgroundColor: "rgba(249, 65, 65, 0.24)",
  },
  secondary: {
    backgroundColor: CDSColors.secondarygreenopacity,
  },
  secondaryContrast: {
    backgroundColor: "rgba(7, 164, 156, 0.16)",
    borderWidth: 1,
    borderColor: CDSColors.primary,
  },
  gray: {
    backgroundColor: "rgba(255, 255, 255, 0.32)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.16)",
  },
  disabled: {
    opacity: 0.24,
  },
  large: {
    height: 56,
  },
  medium: {
    height: 48,
  },
  xsmall: {
    height: 36,
  },
  xxsmall: {
    height: 32,
  },
  xxxsmall: {
    height: 20,
  },
  text: {
    fontSize: 16,
  },
  leftIcon: {
    color: CDSColors.text,
    marginRight: 8,
  },
  rightIcon: {
    color: CDSColors.text,
    marginLeft: 8,
  },
  textprimary: {
    color: CDSColors.dark,
    fontFamily: DMSans.regular,
  },
  textsecondary: {
    color: CDSColors.primary,
    fontFamily: DMSans.regular,
  },
  textdark: {
    color: CDSColors.text,
  },
  textgray: {
    color: CDSColors.text,
  },
  textdashed: {
    color: CDSColors.primary,
    fontSize: 14,
  },
  textsecondaryContrast: {
    color: CDSColors.primary,
  },
  textdanger: {
    color: "rgba(249, 65, 65, 1)",
  },
  textprimarydisabled: {
    color: "rgba(255, 255, 255, 0.72)",
  },
  disabledPrimary: {
    backgroundColor: "rgba(0, 206, 209, 0.24)",
  },
  disabledSecondary: {
    opacity: 0.5,
  },
});
