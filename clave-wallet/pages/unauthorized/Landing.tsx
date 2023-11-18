import {
  Animated,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from "react-native";
import { $MixedElement } from "../../types";
import { CDSColors } from "../../packages";
import { useRef, useState } from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/dimensions";
import { dashboardGradient, logo } from "../../assets";
import { useCustomAnimation } from "../../hooks/useCustomAnimation";

export const Landing = (): $MixedElement => {
  const translateX = useRef(new Animated.Value(0)).current;
  useCustomAnimation(translateX);
  const [username, setUsername] = useState("");

  return (
    <>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.gradient,
            {
              transform: [{ translateX }],
            },
          ]}
        >
          <Image resizeMode="cover" source={dashboardGradient} />
        </Animated.View>

        <KeyboardAvoidingView
          behavior="padding"
          enabled={true}
          keyboardVerticalOffset={24}
          style={styles.wrapper}
        >
          <Image
            style={styles.image}
            width={SCREEN_WIDTH - 120}
            source={logo}
          />
          {/* <CDSInput
            color="light"
            value={username}
            onChangeText={setUsername}
            label="Username"
          />
          <CDSButton
            color="primary"
            disabled={isButtonDisabled}
            margin={["mt-4"]}
          >
            Create Account
          </CDSButton> */}
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SCREEN_HEIGHT,
    backgroundColor: CDSColors.dark,
    zIndex: 100,
  },
  gradient: {
    zIndex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: "absolute",
    left: 0,
    top: 0,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: "auto",
    zIndex: 1,
    height: SCREEN_HEIGHT,
  },
  image: {
    marginBottom: 32,
  },
});
