import { useEffect, useMemo, useRef } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";

import { useGlobalStyles } from "../../hooks/useGlobalStyles";
import { useHaptic } from "../../hooks/useHaptics";
import { CDSIcon } from "../../icons/CDSIcon";
import type {
  $MixedElement,
  BaseComponentProps,
  StyleOverrideItem,
} from "../../types";
import { CDSColors } from "../../utils/colors";
import { DMSans } from "../../utils/font";
import BaseComponent from "../Base/BaseComponent.react";
import LoadingCircle from "../Button/CDSLoadingCircle.react";
import BaseIcon from "../Icon/BaseIcon.react";
import CDSView from "../Layout/CDSView.react";
import CDSTypography from "../Typography/CDSTypography.react";
import { filterNulls } from "../../../../../utils/filterNulls";

export type CDSSwipeWidth = "fullwidth" | string | number;

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SWIPE_THRESHOLD = 0.85;
const BUTTON_SIZE = 56;
const LEFT_VALUE_MAX = SCREEN_WIDTH - (72 + BUTTON_SIZE);

interface Props extends Omit<BaseComponentProps, "padding"> {
  children: $MixedElement | string;
  releaseText: string; // This field is required to translate the release text
  loadingText?: string | null;
  disabledText?: string | null;
  onSwipe: (() => void) | (() => Promise<void>);
  disabled?: boolean;
  isTesting?: boolean;
  isLoading: boolean; // This field is required to correctly reset the Swipe state
}

export default function CDSSwipe(props: Props): $MixedElement | null {
  const {
    children,
    margin,
    disabled,
    isTesting,
    isLoading,
    releaseText,
    loadingText,
    onSwipe,
    disabledText,
  } = props;
  const globalStyles = useGlobalStyles({ margin });
  const { notifySync } = useHaptic();

  const animatedTextOpacity = useRef(new Animated.Value(1)).current;
  const animatedThumbTextOpacity = useRef(new Animated.Value(0)).current;
  const animatedWidth = useRef(new Animated.Value(BUTTON_SIZE)).current;

  const wrapperStyle = useMemo(() => {
    return filterNulls<StyleOverrideItem>([
      styles.wrapper,
      isLoading ? styles.wrapperLoading : styles.primary,
      disabled ? styles.wrapperDisabled : null,
    ]);
  }, [disabled, isLoading]);

  const thumbStyle = useMemo(() => {
    return [
      styles.thumb,
      styles.thumbprimary,
      {
        width: animatedWidth,
        height: BUTTON_SIZE,
        borderRadius: BUTTON_SIZE,
      },
      disabled ? styles.thumbprimarydisabled : null,
    ];
  }, [animatedWidth, disabled]);

  const textStyle = useMemo(() => {
    return filterNulls([
      styles.text,
      styles.textprimary,
      disabled ? styles.textprimarydisabled : null,
    ]);
  }, [disabled]);

  const releaseTextStyle = useMemo(() => {
    return [styles.text, styles.releaseprimary];
  }, []);

  const draggingRef = useRef(false);
  const draggingAllowed = useRef(true);

  const animate = (
    value: Animated.Value,
    toValue: number,
    duration = 200
  ): void => {
    Animated.timing(value, {
      toValue,
      duration,
      useNativeDriver: false,
    }).start();
  };

  const resetAnimationValues = (): void => {
    animate(animatedTextOpacity, 1);
    animate(animatedThumbTextOpacity, 0);
    animate(animatedWidth, 56);
  };

  const animateToSwiped = (): void => {
    animate(animatedWidth, LEFT_VALUE_MAX);
    animate(animatedTextOpacity, 0);
    animate(animatedThumbTextOpacity, 0, 0);
  };

  useEffect(() => {
    if (!isLoading && !draggingAllowed.current) {
      resetAnimationValues();
      draggingAllowed.current = true;
    }
  }, [isLoading]);

  return (
    <BaseComponent isTesting={isTesting}>
      <View
        pointerEvents={disabled ? "none" : "auto"}
        style={[...globalStyles, ...wrapperStyle]}
      >
        {!isLoading ? (
          <>
            <Animated.View
              onTouchStart={(): void => {
                const isDraggingAllowed = draggingAllowed.current;
                if (!isDraggingAllowed) {
                  return;
                }
                draggingRef.current = true;
              }}
              onTouchEnd={(e): void => {
                const isDraggingAllowed = draggingAllowed.current;
                if (!isDraggingAllowed) {
                  return;
                }
                draggingRef.current = false;
                const leftValue = e.nativeEvent.pageX - BUTTON_SIZE;

                if (leftValue < LEFT_VALUE_MAX * SWIPE_THRESHOLD) {
                  resetAnimationValues();
                  draggingRef.current = false;
                } else {
                  animateToSwiped();
                  draggingRef.current = false;
                  draggingAllowed.current = false;
                  notifySync();
                  onSwipe?.();
                }
              }}
              onTouchMove={(e): void => {
                const isDraggingAllowed = draggingAllowed.current;
                const isDragging = draggingRef.current;
                if (!isDragging || isLoading || !isDraggingAllowed) {
                  return;
                }
                const leftValue = e.nativeEvent.pageX - BUTTON_SIZE;

                if (leftValue > 0) {
                  const newWidth =
                    leftValue < LEFT_VALUE_MAX
                      ? Math.max(leftValue + BUTTON_SIZE, BUTTON_SIZE)
                      : LEFT_VALUE_MAX + BUTTON_SIZE;

                  animate(animatedWidth, newWidth, 0);
                  animate(
                    animatedTextOpacity,
                    1 - leftValue / LEFT_VALUE_MAX,
                    0
                  );
                  // Show release button if meets threshold
                  if (leftValue < LEFT_VALUE_MAX * SWIPE_THRESHOLD) {
                    animate(animatedThumbTextOpacity, 0, 0);
                  } else {
                    animate(animatedThumbTextOpacity, 1, 50);
                  }
                }
              }}
              style={[...thumbStyle]}
            >
              <Animated.View
                style={[
                  styles.releaseWrapper,
                  { opacity: animatedThumbTextOpacity },
                ]}
              >
                <Text allowFontScaling={false} style={releaseTextStyle}>
                  {releaseText}
                </Text>
              </Animated.View>

              <BaseIcon color={styles.iconprimary.color} size={24}>
                {CDSIcon.chevronRightIos()}
              </BaseIcon>
            </Animated.View>
            <Animated.View
              style={{
                opacity: animatedTextOpacity,
              }}
            >
              <Text allowFontScaling={false} style={textStyle}>
                {disabledText != null && disabled ? disabledText : children}
              </Text>
            </Animated.View>
          </>
        ) : (
          <CDSView direction="row" align="center">
            <>
              <LoadingCircle />
              {loadingText != null && (
                <CDSTypography type="text1">{loadingText}</CDSTypography>
              )}
            </>
          </CDSView>
        )}
      </View>
    </BaseComponent>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: BUTTON_SIZE,
    position: "relative",
    borderRadius: 120,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  large: {
    height: BUTTON_SIZE,
  },
  text: {
    fontSize: 16,
    fontFamily: DMSans.medium,
  },
  textprimary: {
    color: CDSColors.dark,
    fontFamily: DMSans.regular,
  },
  textprimarydisabled: {
    color: "rgba(255, 255, 255, 0.72)",
  },
  iconprimary: {
    color: CDSColors.primary,
  },
  releaseprimary: {
    color: CDSColors.primary,
  },
  primary: {
    backgroundColor: CDSColors.primary,
  },
  wrapperDisabled: {
    backgroundColor: "rgba(0, 206, 209, 0.24)",
  },
  wrapperLoading: {
    backgroundColor: "rgba(3, 99, 101, 1)",
  },
  thumbprimary: {
    backgroundColor: "rgba(3, 99, 101, 1)",
  },
  thumbprimarydisabled: {
    backgroundColor: "rgba(3, 99, 101, 0.74)",
  },
  thumb: {
    left: 0,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    position: "absolute",
  },
  thumblarge: {
    top: 0,
  },
  releaseWrapper: {
    left: SCREEN_WIDTH / 2 - 64,
    position: "absolute",
  },
});
