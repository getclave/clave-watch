import { $MixedElement } from "./types";
import { formatPx, getSeedForNounPart, nounsContract } from "./utils";
import { ComponentPropsWithoutRef, useEffect, useMemo, useState } from "react";

interface Props
  extends Omit<ComponentPropsWithoutRef<"div">, "dangerouslySetInnerHTML"> {
  size?: number;
  address: string;
}

export const NounsAvatar = ({
  size = 32,
  address,
  style,
  ...rest
}: Props): $MixedElement => {
  const [svg, setSvg] = useState<string | null>(null);

  const seed = useMemo(() => {
    const parsedAddress = address.startsWith("0x") ? address.slice(2) : address;
    return getSeedForNounPart(parsedAddress);
  }, [address]);

  useEffect(() => {
    if (seed == null) {
      return;
    }
    nounsContract.generateSVGImage(seed).then((res: string): void => {
      setSvg(atob(res));
    });
  }, [seed]);

  return (
    <div
      style={{ width: formatPx(size), height: formatPx(size), ...style }}
      dangerouslySetInnerHTML={{ __html: svg }}
      {...rest}
    />
  );
};
