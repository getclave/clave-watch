import { useEffect } from "react";
import { Animated } from "react-native";
import { SCREEN_WIDTH } from "../utils/dimensions";

export const useCustomAnimation = (translateX: Animated.Value): void => {
  useEffect(() => {
    const animateRight = (): Animated.CompositeAnimation => {
      return Animated.timing(translateX, {
        duration: 10000,
        toValue: -2 * SCREEN_WIDTH,
        useNativeDriver: false,
      });
    };

    const animateLeft = (): Animated.CompositeAnimation => {
      return Animated.timing(translateX, {
        duration: 10000,
        toValue: 0,
        useNativeDriver: false,
      });
    };

    Animated.loop(Animated.sequence([animateRight(), animateLeft()])).start();
  }, []);
};
