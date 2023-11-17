import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useGlobalStyles } from "../../hooks/useGlobalStyles";
import type {
  $MixedElement,
  BaseComponentProps,
  StyleOverride,
} from "../../types";
import { CDSColors } from "../../utils/colors";
import { DMSans } from "../../utils/font";
import BaseComponent from "../Base/BaseComponent.react";
import BaseIcon from "../Icon/BaseIcon.react";

type CDSAlertType = "success" | "error" | "primary" | "warning";

interface Props extends Omit<BaseComponentProps, "padding"> {
  isTesting?: boolean;
  text: string;
  type?: CDSAlertType;
  iconStyle?: StyleOverride;
  icon?: () => string;
  iconColor?: string;
  textStyle?: StyleOverride;
  textMaxWidth?: string;
  rightEl?: $MixedElement;
}

export const CDSAlert = (props: Props): $MixedElement => {
  const {
    isTesting = false,
    margin,
    text,
    type = "success",
    icon,
    iconColor,
    iconStyle,
    textStyle,
    rightEl,
    textMaxWidth = "85%",
  } = props;
  const globalStyles = useGlobalStyles({ margin });

  const textColorMap = useMemo(() => {
    if (type === "success") {
      return CDSColors.primary;
    } else if (type === "error") {
      return "rgba(249, 65, 65, 1)";
    } else if (type === "primary") {
      return CDSColors.light;
    } else if (type === "warning") {
      return "rgba(190, 154, 25, 0.24)";
    }
    return CDSColors.primary;
  }, [type, iconColor]);

  return (
    <BaseComponent isTesting={isTesting}>
      <View style={[styles.wrapper, styles[type], ...globalStyles]}>
        {icon != null && (
          <View style={iconStyle}>
            <BaseIcon color={iconColor ?? textColorMap} size={24}>
              {icon()}
            </BaseIcon>
          </View>
        )}
        <Text
          allowFontScaling={false}
          style={[
            {
              marginLeft: icon != null ? 16 : 0,
              color: textColorMap,
            },
            styles.text,
            { maxWidth: textMaxWidth },
            ...(textStyle ?? []),
          ]}
        >
          {text}
        </Text>
        {rightEl}
      </View>
    </BaseComponent>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: 16,
    minHeight: 48,
  },
  primary: {
    backgroundColor: "rgba(0, 206, 209, 0.24)",
  },
  success: {
    backgroundColor: "rgba(7, 164, 156, 0.16)",
  },
  error: {
    backgroundColor: "rgba(60, 16, 16, 1)",
  },
  warning: {
    backgroundColor: "rgba(190, 154, 25, 0.32)",
    borderWidth: 1,
    borderColor: "rgba(190, 154, 25, 0.24)",
  },
  text: {
    fontFamily: DMSans.medium,
  },
});
