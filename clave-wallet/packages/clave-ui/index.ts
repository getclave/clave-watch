import { CDSAlert } from "./src/components/Alert/CDSAlert.react";
import BaseComponent from "./src/components/Base/BaseComponent.react";
import CDSBottomSheet from "./src/components/BottomSheet/CDSBottomSheet.react";
import BaseButton from "./src/components/Button/BaseButton.react";
import CDSBackButton from "./src/components/Button/CDSBackButton.react";
import CDSButton from "./src/components/Button/CDSButton.react";
import CDSItemButton from "./src/components/Button/CDSItemButton.react";
import CDSLoadingCircle from "./src/components/Button/CDSLoadingCircle.react";
import BaseIcon from "./src/components/Icon/BaseIcon.react";
import BaseInput from "./src/components/Input/BaseInput.react";
import CDSInput, {
  CDSInputFeedback,
} from "./src/components/Input/CDSInput.react";
import { CSDInputSuggestion } from "./src/components/Input/CDSInput.react";
import CDSLayout from "./src/components/Layout/CDSLayout.react";
import CDSView from "./src/components/Layout/CDSView.react";
import {
  CDSNotificationProvider,
  useNotification,
} from "./src/components/Notification/CDSNotification";
import CDSSwipe from "./src/components/Swipe/CDSSwipe.react";
import BaseTypography from "./src/components/Typography/BaseTypography.react";
import CDSTypography from "./src/components/Typography/CDSTypography.react";
import { useBottomSheet } from "./src/hooks/useBottomSheet";
import { BottomSheetController } from "./src/hooks/useBottomSheet";
import { useHaptic } from "./src/hooks/useHaptics";
import { CDSIcon } from "./src/icons/CDSIcon";
import type { BaseMarginProp, BasePaddingProp } from "./src/types";
import { CDSColors } from "./src/utils/colors";
import { BOTTOM_SHEET_WIDTH } from "./src/utils/constants";
import { DMSans, useDmSans } from "./src/utils/font";
import { CDSThemeProvider, useCDSTheme } from "./src/utils/theme";
import { type CDSTheme } from "./src/utils/theme/types";

export {
  /** Alert **/
  CDSAlert,

  /** Theme **/
  CDSThemeProvider,
  useCDSTheme,
  CDSTheme,

  /**  Base **/
  BaseComponent,
  BaseIcon,
  BaseButton,
  BaseInput,
  BaseMarginProp,
  BasePaddingProp,

  /** Loading **/
  CDSLoadingCircle,

  /** Button **/
  CDSButton,
  CDSBackButton,
  CDSItemButton,

  /** Input **/
  CDSInput,
  CDSInputFeedback,
  CSDInputSuggestion,

  /** Icons **/
  CDSIcon,

  /** Color **/
  CDSColors,

  /** Font **/
  DMSans,
  useDmSans,

  /** Typography **/
  BaseTypography,
  CDSTypography,

  /** Layout **/
  CDSLayout,
  CDSView,

  /** Bottom Sheet **/
  useBottomSheet,
  CDSBottomSheet,
  BottomSheetController,
  BOTTOM_SHEET_WIDTH,

  /** Swipe **/
  CDSSwipe,

  /** Notification **/
  CDSNotificationProvider,
  useNotification,

  /** Haptics **/
  useHaptic,
};
