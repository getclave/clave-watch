import { Text } from "react-native";
import type { TextProps } from "react-native";

import { useGlobalStyles } from "../../hooks/useGlobalStyles";
import type {
  BaseComponentProps,
  BaseTypographyTextAlignProp,
  StyleOverride,
} from "../../types";

export type BaseTypographySpecifProps = "styleOverride";

export interface BaseTypographyProps
  extends Omit<TextProps, "style">,
    BaseComponentProps {
  styleOverride?: StyleOverride;
  textAlign?: BaseTypographyTextAlignProp;
}

export default function BaseTypography(
  props: BaseTypographyProps,
): JSX.Element {
  const { styleOverride, margin, padding, ...rest } = props;

  const globalStyles = useGlobalStyles({ margin, padding });

  return (
    <Text
      allowFontScaling={false}
      {...rest}
      style={[...globalStyles, ...(styleOverride ?? [])]}
    />
  );
}
