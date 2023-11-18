import { $MixedElement } from "./types";
import { ComponentPropsWithoutRef } from "react";
interface Props extends Omit<ComponentPropsWithoutRef<"div">, "dangerouslySetInnerHTML"> {
    size: number;
    address: string;
}
export declare const NounsAvatar: ({ size, address, ...rest }: Props) => $MixedElement;
export {};
//# sourceMappingURL=NounsAvatar.d.ts.map