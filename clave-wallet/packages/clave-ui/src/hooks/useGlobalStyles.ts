import { useMemo } from "react";

import { type BaseComponentProps, type StyleOverride } from "../types";
import { cdsStyles } from "../utils/styles";

export const useGlobalStyles = ({
  margin,
  padding,
}: BaseComponentProps): StyleOverride => {
  const globalStyles = useMemo(() => {
    const styles: StyleOverride = [];
    margin?.forEach((m) => {
      styles.push(cdsStyles[m]);
    });
    padding?.forEach((p) => {
      styles.push(cdsStyles[p]);
    });
    return styles;
  }, [margin, padding]);
  return globalStyles;
};
