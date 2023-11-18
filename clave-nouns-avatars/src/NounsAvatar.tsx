import { $MixedElement } from "./types";
import { formatPx, getSeedForNounPart, nounsContract } from "./utils";
import { ComponentPropsWithoutRef, useEffect, useMemo, useState } from "react";

interface Props
  extends Omit<ComponentPropsWithoutRef<"div">, "dangerouslySetInnerHTML"> {
  size: number;
  address: string;
}

export const NounsAvatar = ({
  size,
  address,
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
      const svgString = atob(res);
      setSvg(svgString);
    });
  }, [seed]);

  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.append(
      `#clave-nouns-avatars svg { width: inherit; height: inherit; border-radius: inherit }`
    );
    document.body.prepend(styleEl);
  }, []);

  return (
    <div
      id="clave-nouns-avatars"
      style={{ width: formatPx(size), height: formatPx(size) }}
      dangerouslySetInnerHTML={{ __html: svg }}
      {...rest}
    />
  );
};
