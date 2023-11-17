import { StyleSheet } from "react-native";
import type { XmlProps } from "react-native-svg";
import { SvgXml } from "react-native-svg";

import type { StyleOverride } from "../../types";

interface Props extends Omit<XmlProps, "xml"> {
  children: string;
  size?: number;
  color: string;
  onPress?: () => void;
  styleOverride?: StyleOverride;
}

const BaseIcon = ({
  children,
  size = 20,
  onPress,
  styleOverride,
  color,
}: Props): JSX.Element => {
  return (
    <SvgXml
      onTouchEnd={onPress}
      xml={children}
      color={color}
      width={String(size)}
      height={String(size)}
      style={{ ...(styleOverride ?? []) }}
    />
  );
};

export const styles = StyleSheet.create({
  color: {
    color: "#000",
  },
});

export default BaseIcon;
