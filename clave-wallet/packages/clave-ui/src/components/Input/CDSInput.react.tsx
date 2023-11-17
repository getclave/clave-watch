import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, Text, type TextInput, View } from "react-native";

import { useGlobalStyles } from "../../hooks/useGlobalStyles";
import { CDSIcon } from "../../icons/CDSIcon";
import type {
  $MixedElement,
  BaseComponentProps,
  StyleOverrideItem,
} from "../../types";
import { CDSColors } from "../../utils/colors";
import { DMSans } from "../../utils/font";
import { useCDSTheme } from "../../utils/theme";
import { type CDSTheme } from "../../utils/theme/types";
import BaseComponent from "../Base/BaseComponent.react";
import type { BaseInputProps, BaseInputSpecificProps } from "./BaseInput.react";
import BaseInput from "./BaseInput.react";
import CDSInputIcon from "./CDSInputIcon.react";
import { filterNulls } from "../../../../../utils/filterNulls";

export type CDSInputSize = "large" | "medium";
export type CDSInputColor = "dark";
export type CDSInputWidth = "fullwidth" | "string" | number;
export type CDSInputIconType = (() => string) | $MixedElement;
export type CDSInputFeedback = {
  type: "error" | "warning" | "success";
  message?: string;
};
export type CSDInputSuggestion = {
  action: () => void;
  message: string;
};

interface Props
  extends Omit<BaseInputProps, BaseInputSpecificProps>,
    BaseComponentProps {
  size?: CDSInputSize;
  color?: CDSInputColor;
  isTesting?: boolean;
  leftIcon?: CDSInputIconType;
  rightIcon?: CDSInputIconType;
  label?: $MixedElement | string;
  validation?: CDSInputFeedback;
  width?: CDSInputWidth;
  suggestion?: CSDInputSuggestion;
  secureText?: boolean;
  rightIconColorOverride?: string;
  leftIconColorOverride?: string;
  rightIconOnPress?: () => void;
}

export default function CDSInput(props: Props): JSX.Element {
  const { theme, currentTheme } = useCDSTheme();
  const {
    size = "large",
    isTesting,
    keyboardAppearance,
    leftIcon,
    label,
    validation,
    color = "dark",
    rightIcon,
    width = "fullwidth",
    onFocus,
    onBlur,
    suggestion,
    autoFocus,
    margin,
    padding,
    editable,
    leftIconColorOverride,
    rightIconColorOverride,
    secureText = false,
    rightIconOnPress,
    ...rest
  } = props;
  const [focused, setFocused] = useState(false);
  const [secureTextInput, setSecureTextInput] = useState(true);
  const inputRef = useRef<TextInput | null>(null);
  const globalStyles = useGlobalStyles({ margin, padding });
  const overridedRightIcon = useMemo(() => {
    if (secureText) {
      return secureTextInput ? CDSIcon.visibility : CDSIcon.noVisibility;
    } else {
      return rightIcon;
    }
  }, [rightIcon, secureText, secureTextInput]);

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      if (autoFocus && inputRef.current) {
        inputRef.current.focus();
      }
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  }, [autoFocus]);

  const styles = dynamicStyles(theme);

  const validationStatus = validation?.type ?? "default";
  const styleOverride = useMemo(() => {
    return filterNulls<StyleOverrideItem>([
      styles.base,
      styles[color],
      styles[size],
      focused && styles.focused,
      styles[`validation${validationStatus}`],
      leftIcon != null && styles.leftPadding,
      rightIcon != null && styles.rightPadding,
    ]);
  }, [size, color, leftIcon, focused, validationStatus]);

  const labelEl = useMemo(() => {
    if (typeof label === "string") {
      return (
        <Text allowFontScaling={false} style={styles.labelText}>
          {label}
        </Text>
      );
    }
    return label;
  }, [label]);

  const placeholderColor = useMemo(() => {
    if (color === "dark") {
      return CDSColors.subtext;
    }
  }, [color]);

  return (
    <>
      <BaseComponent isTesting={isTesting}>
        <View
          style={[
            ...globalStyles,
            styles.wrapper,
            { width: width === "fullwidth" ? "100%" : width },
            editable === false ? styles.disabled : undefined,
          ]}
        >
          {label != null && <View style={styles.label}>{labelEl}</View>}

          <View style={styles.inputContainer}>
            <CDSInputIcon
              colorOverride={leftIconColorOverride}
              icon={leftIcon}
              type="left"
            />
            <BaseInput
              editable={editable}
              inputRef={inputRef}
              keyboardAppearance={keyboardAppearance ?? currentTheme}
              onFocus={(e): void => {
                onFocus?.(e);
                setFocused(true);
              }}
              onBlur={(e): void => {
                onBlur?.(e);
                setFocused(false);
              }}
              selectionColor={CDSColors.primary}
              placeholderTextColor={placeholderColor}
              styleOverride={styleOverride}
              secureTextEntry={secureText && secureTextInput}
              {...rest}
            />
            <CDSInputIcon
              colorOverride={rightIconColorOverride}
              icon={overridedRightIcon}
              type="right"
              onPress={
                secureText
                  ? (): void => setSecureTextInput((prev) => !prev)
                  : rightIconOnPress
              }
            />
          </View>
          {(validation || suggestion) && validation?.message != "" && (
            <View style={styles.validationBase}>
              {validation && (
                <Text
                  allowFontScaling={false}
                  style={[
                    styles.validationTextBase,
                    styles[`validationText${validationStatus}`],
                    suggestion && { marginRight: 4 },
                  ]}
                >
                  {validation.message}
                </Text>
              )}
              {suggestion && (
                <Text
                  allowFontScaling={false}
                  style={[styles.suggestionTextBase, ,]}
                  onPress={suggestion.action}
                >
                  {suggestion.message}
                </Text>
              )}
            </View>
          )}
        </View>
      </BaseComponent>
    </>
  );
}
//eslint-disable-next-line
const dynamicStyles = (theme: CDSTheme) =>
  StyleSheet.create({
    wrapper: {
      position: "relative",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "100%",
    },
    base: {
      borderRadius: 8,
      fontFamily: DMSans.regular,
      width: "100%",
      paddingRight: 12,
      paddingLeft: 12,
      borderWidth: 1,
      borderStyle: "solid",
    },
    dark: {
      backgroundColor: theme.input.bg,
      color: theme.input.color,
    },
    large: {
      height: 48,
      fontSize: 15,
    },
    medium: {
      height: 44,
      fontSize: 15,
    },
    leftPadding: {
      paddingLeft: 40,
    },
    rightPadding: {
      paddingRight: 40,
    },
    validationBase: {
      marginLeft: 2,
      marginTop: 8,
      flexDirection: "row",
      flexWrap: "wrap",
    },
    validationContent: {
      marginTop: 8,
    },
    validationdefault: {},
    validationerror: {
      borderColor: theme.input.error,
    },
    validationwarning: {
      borderColor: theme.input.warning,
    },
    validationsuccess: {
      borderColor: theme.input.success,
    },
    validationTextBase: {
      fontFamily: DMSans.regular,
      fontSize: 14,
    },
    validationTextdefault: {},
    validationTexterror: {
      color: theme.input.error,
    },
    validationTextsuccess: {
      color: theme.input.success,
    },
    validationTextwarning: {
      color: theme.input.warning,
    },
    suggestionTextBase: {
      fontFamily: DMSans.regular,
      fontSize: 14,
      color: CDSColors.primary,
    },
    label: {
      marginBottom: 8,
      marginLeft: 2,
    },
    labelText: {
      fontFamily: DMSans.medium,
      fontSize: 14,
      color: theme.input.label,
    },
    focused: {
      borderColor: theme.input.border,
    },
    inputContainer: {
      flexDirection: "row",
      position: "relative",
      width: "100%",
    },
    disabled: {
      opacity: 0.7,
    },
  });
