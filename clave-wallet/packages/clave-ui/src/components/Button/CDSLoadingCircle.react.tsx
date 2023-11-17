import React, { useEffect, useRef } from "react";
import { Animated, Easing, View } from "react-native";
import Svg, { Circle, Defs, G, Mask, Rect } from "react-native-svg";

interface LoadingCircleProps {
  height?: string | number;
  width?: string | number;
  color?: string;
  ariaLabel?: string;
}

const CDSLoadingCircle = ({
  width = "30",
  height = "30",
  color = "#ffffff",
  ariaLabel = "loading- circle",
}: LoadingCircleProps): JSX.Element => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const animation = Animated.loop(
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
      easing: Easing.linear,
    }),
  );

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    animation.start();

    return () => {
      animation.stop();
    };
  }, []);

  return (
    <View>
      <Animated.View style={[{ transform: [{ rotate: rotateInterpolate }] }]}>
        <Svg
          width={width}
          height={height}
          viewBox="0 0 100 100"
          aria-label={ariaLabel}
        >
          <Defs>
            <Mask id="mask">
              <Circle
                cx="50"
                cy="50"
                r="26"
                stroke="#fff"
                strokeLinecap="round"
                strokeDasharray="122.52211349000194 40.840704496667314"
                strokeWidth="9"
              />
            </Mask>
          </Defs>
          <G mask="url(#mask)">
            <Rect x="14.5" y="0" width="15" height="100" fill={color} />
            <Rect x="28.5" y="0" width="15" height="100" fill={color} />
            <Rect x="42.5" y="0" width="15" height="100" fill={color} />
            <Rect x="56.5" y="0" width="15" height="100" fill={color} />
            <Rect x="70.5" y="0" width="15" height="100" fill={color} />
          </G>
        </Svg>
      </Animated.View>
    </View>
  );
};

export default CDSLoadingCircle;
