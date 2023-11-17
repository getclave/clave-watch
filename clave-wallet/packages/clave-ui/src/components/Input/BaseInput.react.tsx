import { type RefObject } from "react";
import { StyleSheet } from "react-native";
import type { TextInputProps } from "react-native";
import { TextInput } from "react-native";

import { useGlobalStyles } from "../../hooks/useGlobalStyles";
import type { BaseComponentProps, StyleOverride } from "../../types";

export type BaseInputSpecificProps = "styleOverride";

export interface BaseInputProps
  extends Omit<TextInputProps, "style">,
    Omit<BaseComponentProps, "padding"> {
  styleOverride?: StyleOverride;
  inputRef?: RefObject<TextInput>;
}

export default function BaseInput(props: BaseInputProps): JSX.Element {
  const { styleOverride, margin, inputRef, ...rest } = props;

  const globalStyles = useGlobalStyles({ margin });

  return (
    <TextInput
      ref={inputRef}
      {...rest}
      style={[styles.wrapper, ...globalStyles, ...(styleOverride ?? [])]}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
});
