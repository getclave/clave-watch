import { filterNulls } from "../../../../utils/filterNulls";
import type { StyleOverride } from "../types";

export const clsnm = (classes: StyleOverride): StyleOverride => {
  return filterNulls(classes);
};
