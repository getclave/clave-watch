import { Animated, View, type ViewProps } from "react-native";

import { useGlobalStyles } from "../../hooks/useGlobalStyles";
import type {
  $MixedElement,
  BaseComponentProps,
  StyleOverride,
} from "../../types";

type CDSViewDirection = "row" | "column";
type CDSViewAlignItems = "flex-start" | "flex-end" | "center" | "stretch";
type CDSViewJustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

interface Props extends ViewProps, BaseComponentProps {
  children: $MixedElement | Array<$MixedElement | null> | null | boolean;
  style?: StyleOverride;
  isAnimated?: boolean;
  direction?: CDSViewDirection;
  align?: CDSViewAlignItems;
  justify?: CDSViewJustifyContent;
}

export default function CDSView(props: Props): $MixedElement {
  const {
    align,
    children,
    style,
    margin,
    isAnimated,
    padding,
    direction,
    justify,
    ...rest
  } = props;

  const globalStyles = useGlobalStyles({ margin, padding });

  const Component = isAnimated ? Animated.View : View;

  return (
    <Component
      {...rest}
      style={[
        {
          flexDirection: direction,
          alignItems: align,
          justifyContent: justify,
        },
        ...(style ?? []),
        ...globalStyles,
      ]}
    >
      {children}
    </Component>
  );
}
