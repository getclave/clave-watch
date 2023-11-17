import { useMemo } from "react";
import { StyleSheet } from "react-native";

import { useGlobalStyles } from "../../hooks/useGlobalStyles";
import { useHaptic } from "../../hooks/useHaptics";
import { CDSIcon } from "../../icons/CDSIcon";
import type {
  $MixedElement,
  BaseComponentProps,
  StyleOverrideItem,
} from "../../types";
import { useCDSTheme } from "../../utils/theme";
import { type CDSTheme } from "../../utils/theme/types";
import BaseIcon from "../Icon/BaseIcon.react";
import BaseButton, {
  type BaseButtonProps,
  type BaseButtonSpecificProps,
} from "./BaseButton.react";
import { filterNulls } from "../../../../../utils/filterNulls";

interface Props
  extends Omit<BaseButtonProps, BaseButtonSpecificProps>,
    BaseComponentProps {
  disabled?: boolean;
}

export default function CDSBackButton(props: Props): $MixedElement {
  const { disabled, margin, padding, onPress, ...rest } = props;
  const globalStyles = useGlobalStyles({ margin, padding });
  const { theme } = useCDSTheme();
  const dynamicSyles = styles(theme);
  const { notifySync } = useHaptic();

  const styleOverride = useMemo(() => {
    return filterNulls<StyleOverrideItem>([
      dynamicSyles.base,
      disabled ? dynamicSyles.disabled : null,
      ...globalStyles,
    ]);
  }, [disabled, dynamicSyles]);

  return (
    <BaseButton
      leftEl={
        <BaseIcon size={20} color={theme.backbutton.color}>
          {CDSIcon.chevronLeftIos()}
        </BaseIcon>
      }
      onPress={(e): void => {
        notifySync();
        onPress?.(e);
      }}
      disabled={disabled}
      activeOpacity={0.6}
      styleOverride={styleOverride}
      {...rest}
    />
  );
}

//eslint-disable-next-line
const styles = (theme: CDSTheme) =>
  StyleSheet.create({
    wrapper: {
      position: "relative",
    },
    base: {
      height: 48,
      width: 48,
      flexShrink: 0,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.backbutton.bg,
      borderRadius: 48,
    },
    disabled: {
      opacity: 0.24,
    },
  });
