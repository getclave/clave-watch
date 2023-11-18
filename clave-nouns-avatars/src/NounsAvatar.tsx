import { $MixedElement } from "./types";
import { nounsContract } from "./utils";
import { BigNumber } from "ethers";
import { useEffect, useState } from "react";

type Props = {
  size: number;
  address: string;
};

export const NounsAvatar = ({ size, address }: Props): $MixedElement => {
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    nounsContract
      .generateSVGImage(BigNumber.from(0))
      .then((res: string): void => {
        setSvg(atob(res));
      });
  }, []);

  return (
    <div
      style={{ width: "120px", height: "120px" }}
      dangerouslySetInnerHTML={{ __html: svg }}
    ></div>
  );
};
