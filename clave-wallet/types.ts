import { ReactElement, ReactPortal } from "react";

export type $MixedElement =
  | JSX.Element
  | ReactElement
  | ReactPortal
  | JSX.Element[]
  | boolean
  | number
  | string;
