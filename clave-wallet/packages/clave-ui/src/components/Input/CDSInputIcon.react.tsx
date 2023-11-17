import { useMemo } from "react";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

import { useCDSTheme } from "../../utils/theme";
import { type CDSTheme } from "../../utils/theme/types";
import BaseIcon from "../Icon/BaseIcon.react";
import type { CDSInputIconType, CDSInputSize } from "./CDSInput.react";

interface CDSInputIconProp {
  icon?: CDSInputIconType;
  type?: "left" | "right";
  size?: CDSInputSize;
  onPress?: () => void;
  colorOverride?: string;
}

export default function CDSInputIcon({
  icon,
  type = "left",
  size = "large",
  colorOverride,
  onPress,
}: CDSInputIconProp): JSX.Element | null {
  if (icon == null) return null;

  const { theme } = useCDSTheme();
  const inputHeight = useMemo(() => {
    if (size === "large") {
      return 48;
    }
    return 44;
  }, [size]);
  const styles = dynamicStyles(theme, { inputHeight });
  const currentStyle = styles[`${type}Icon`];

  const children = useMemo(() => {
    return typeof icon === "function" ? (
      <BaseIcon size={24} color={colorOverride ?? currentStyle.color}>
        {icon()}
      </BaseIcon>
    ) : (
      icon
    );
  }, [icon]);

  return onPress ? (
    <TouchableOpacity
      style={styles[`${type}Icon`]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <View pointerEvents="none" style={currentStyle}>
      {children}
    </View>
  );
}

//eslint-disable-next-line
const dynamicStyles = (
  theme: CDSTheme,
  { inputHeight }: { inputHeight: number },
) =>
  StyleSheet.create({
    leftIcon: {
      zIndex: 1,
      color: theme.input.icon,
      left: 12,
      marginRight: 8,
      position: "absolute",
      top: inputHeight / 2 - 12, // (Input height / 2) - (Iconsize / 2)
    },
    rightIcon: {
      zIndex: 1,
      color: theme.input.icon,
      marginLeft: 8,
      position: "absolute",
      right: 16,
      top: inputHeight / 2 - 12, // (Input height / 2) - (Iconsize / 2)
    },
  });
