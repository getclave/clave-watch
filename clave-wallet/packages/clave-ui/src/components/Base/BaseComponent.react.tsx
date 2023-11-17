import type { $MixedElement } from "../../types";
import { useDmSans } from "../../utils/font";

type Props = {
  children: $MixedElement;
  isTesting?: boolean;
};

export default function BaseComponent({
  children,
  isTesting = false,
}: Props): $MixedElement | null {
  const fontsLoaded = useDmSans();

  if (!fontsLoaded && !isTesting) {
    return null;
  }

  return children;
}
