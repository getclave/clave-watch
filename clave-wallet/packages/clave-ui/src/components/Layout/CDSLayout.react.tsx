import { View } from "react-native";

import type { $MixedElement } from "../../types";

interface Props {
  children: $MixedElement | Array<$MixedElement>;
  paddingY?: number;
  paddingX?: number;
}

export default function CDSLayout(props: Props): $MixedElement {
  const { paddingX, paddingY, children, ...rest } = props;

  return (
    <View
      {...rest}
      style={{ paddingHorizontal: paddingX, paddingVertical: paddingY }}
    >
      {children}
    </View>
  );
}
