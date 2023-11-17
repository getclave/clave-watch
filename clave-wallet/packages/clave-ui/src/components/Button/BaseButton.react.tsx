import { StyleSheet, Text, TouchableOpacity } from "react-native";
import type { TouchableOpacityProps } from "react-native";

import { useGlobalStyles } from "../../hooks/useGlobalStyles";
import type {
  $MixedElement,
  BaseComponentProps,
  StyleOverride,
} from "../../types";
import CDSLoadingCircle from "./CDSLoadingCircle.react";

export type BaseButtonSpecificProps =
  | "styleOverride"
  | "textStyleOverride"
  | "leftEl"
  | "rightEl"
  | "textTestId";

export interface BaseButtonProps
  extends Omit<TouchableOpacityProps, "style">,
    BaseComponentProps {
  styleOverride?: StyleOverride;
  textStyleOverride?: StyleOverride;
  children?: string;
  textTestId?: string;
  leftEl?: $MixedElement | null | boolean;
  rightEl?: $MixedElement | null | boolean;
  loading?: boolean;
}

export default function BaseButton(props: BaseButtonProps): JSX.Element {
  const {
    children,
    styleOverride,
    textTestId,
    textStyleOverride,
    leftEl,
    rightEl,
    margin,
    padding,
    loading,
    ...rest
  } = props;

  const globalStyles = useGlobalStyles({ margin, padding });

  return (
    <TouchableOpacity
      {...rest}
      style={[styles.wrapper, ...globalStyles, ...(styleOverride ?? [])]}
    >
      {leftEl}
      {loading && (
        <CDSLoadingCircle
          color={
            (textStyleOverride?.find((item) => "color" in item)
              ?.color as string) ?? undefined
          }
        />
      )}
      {children != null && (
        <Text
          allowFontScaling={false}
          testID={textTestId}
          style={[...(textStyleOverride ?? [])]}
        >
          {children}
        </Text>
      )}
      {rightEl}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
