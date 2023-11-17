import {
  StyleSheet,
  TouchableOpacity,
  View,
  type ViewStyle,
} from "react-native";

import { useGlobalStyles } from "../../hooks/useGlobalStyles";
import { useHaptic } from "../../hooks/useHaptics";
import type { $MixedElement, BaseMarginProp, StyleOverride } from "../../types";
import { CDSColors } from "../../utils/colors";
import { DMSans } from "../../utils/font";
import CDSTypography, {
  type CDSTypographyType,
} from "../Typography/CDSTypography.react";

type SendReceiveItemPropsType = {
  leftEl?: $MixedElement | null | boolean;
  rightEl?: $MixedElement | null | boolean;
  children?: string;
  buttonStylesOverride?: ViewStyle;
  fontType: CDSTypographyType;
  fontFamily?: string;
  margin?: Array<BaseMarginProp>;
  textMargin?: Array<BaseMarginProp>;
  onClick: () => void;
  subtext?: string;
  subtextFontType?: CDSTypographyType;
  centerStyle?: StyleOverride;
  disabled?: boolean;
};

const CDSItemButton = ({
  children,
  leftEl,
  rightEl,
  buttonStylesOverride,
  fontType,
  fontFamily,
  margin,
  textMargin,
  onClick,
  subtext,
  subtextFontType,
  centerStyle,
  disabled = false,
}: SendReceiveItemPropsType): $MixedElement => {
  const globalStyles = useGlobalStyles({ margin });
  const { notifySync } = useHaptic();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonStylesOverride,
        ...globalStyles,
        disabled && styles.disabled,
      ]}
      onPress={(): void => {
        notifySync();
        onClick();
      }}
      activeOpacity={0.7}
      disabled={disabled}
    >
      {leftEl}
      <View style={centerStyle}>
        <CDSTypography
          numberOfLines={1}
          margin={textMargin}
          fontFamily={fontFamily}
          type={fontType}
        >
          {children}
        </CDSTypography>
        {subtext && (
          <CDSTypography
            margin={textMargin}
            fontFamily={fontFamily}
            type={subtextFontType ? subtextFontType : fontType}
          >
            {subtext}
          </CDSTypography>
        )}
      </View>

      {rightEl}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: CDSColors.secondarygreenopacity,
    height: 64,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 18,
    paddingRight: 18,
    justifyContent: "flex-start",
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: CDSColors.primary,
    fontFamily: DMSans.regular,
    fontSize: 14,
  },
});
export default CDSItemButton;
