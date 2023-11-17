import { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { type BottomSheetController } from "../../hooks/useBottomSheet";
import { type $MixedElement } from "../../types";
import { BOTTOM_SHEET_WIDTH } from "../../utils/constants";
import { useCDSTheme } from "../../utils/theme";
import { type CDSTheme } from "../../utils/theme/types";

const SWIPE_THRESHOLD = 200;

interface Props {
  controller: BottomSheetController;
  children?: $MixedElement | Array<$MixedElement | null> | null;
  isScrolled?: boolean;
  onClickOutside?: () => void;
  closable?: boolean;
}

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default function CDSBottomSheet({
  controller,
  children,
  isScrolled,
  closable = true,
  onClickOutside,
}: Props): $MixedElement | null {
  const { theme } = useCDSTheme();
  const dynamicStyles = styles(theme);

  const isDraggingRef = useRef(false);
  const startPositionRef = useRef(0);
  const transformY = useRef(new Animated.Value(0)).current;

  const resetAnimation = (duration = 0): void => {
    isDraggingRef.current = false;
    startPositionRef.current = 0;
    Animated.timing(transformY, {
      useNativeDriver: false,
      toValue: 0,
      duration,
    }).start();
  };

  useEffect(() => {
    if (!controller.isOpen) {
      resetAnimation();
    }
  }, [controller.isOpen]);

  if (!controller.isOpen) {
    return null;
  }

  const BodyComponent = isScrolled ? ScrollView : View;

  return (
    <>
      <View style={[dynamicStyles.layout, dynamicStyles.background]}></View>
      <View style={dynamicStyles.modal}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={controller.isOpen}
          onRequestClose={closable ? controller.close : (): void => undefined}
        >
          <TouchableWithoutFeedback
            onPress={(): void => {
              if (closable) {
                controller.close();
              }
              onClickOutside?.();
            }}
          >
            <View style={dynamicStyles.layout} />
          </TouchableWithoutFeedback>
          <Animated.View
            onTouchStart={(e): void => {
              if (!closable) {
                return;
              }

              isDraggingRef.current = true;
              startPositionRef.current = e.nativeEvent.pageY;
            }}
            onTouchMove={(e): void => {
              if (!isDraggingRef.current || !closable) {
                return;
              }

              const diff = e.nativeEvent.pageY - startPositionRef.current;

              if (diff > 0) {
                Animated.timing(transformY, {
                  useNativeDriver: false,
                  toValue: diff,
                  duration: 0,
                }).start();
              }
            }}
            onTouchEnd={(e): void => {
              if (!isDraggingRef.current || !closable) {
                return;
              }

              const diff = e.nativeEvent.pageY - startPositionRef.current;
              if (diff > SWIPE_THRESHOLD) {
                controller.close();
              }
              resetAnimation(200);
            }}
            style={[
              dynamicStyles.modalView,
              { transform: [{ translateY: transformY }] },
            ]}
          >
            {closable && (
              <View style={dynamicStyles.draggerWrapper}>
                <View style={dynamicStyles.dragger}></View>
              </View>
            )}
            <BodyComponent style={dynamicStyles.body}>{children}</BodyComponent>
          </Animated.View>
        </Modal>
      </View>
    </>
  );
}

//eslint-disable-next-line
const styles = (theme: CDSTheme) =>
  StyleSheet.create({
    layout: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      height,
      width,

      // Set a big value to on top of all elements
      zIndex: 999999999,
    },
    background: {
      backgroundColor: "rgba(64, 64, 64, 0.4)",
    },
    modal: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      height,
      width,
      position: "absolute",
      left: 0,
      top: 0,

      // Set a big value to on top of all elements
      zIndex: 1000000000,
    },
    modalView: {
      maxHeight: height * 0.9,
      backgroundColor: theme.modal.bg,
      borderRadius: 24,
      paddingTop: 10,
      bottom: 24,
      position: "absolute",
      left: 16,
      right: 16,
      width: BOTTOM_SHEET_WIDTH,

      // Set a big value to on top of all elements
      zIndex: 1000000000,
    },
    draggerWrapper: {
      alignItems: "center",
      width: "100%",
      paddingVertical: 12,
    },
    dragger: {
      width: 40,
      height: 4.59,
      backgroundColor: "rgba(185, 192, 201, 1)",
      borderRadius: 4,
    },
    body: {
      width: "100%",
    },
  });
