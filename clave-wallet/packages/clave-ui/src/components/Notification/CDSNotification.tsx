import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { RefObject } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import type { ViewProps } from "react-native";

import { CDSIcon } from "../../icons/CDSIcon";
import { type $MixedElement } from "../../types";
import { DMSans } from "../../utils/font";
import BaseIcon from "../Icon/BaseIcon.react";

type NotificationTheme = {
  error: {
    border: string;
    bg: string;
    text: string;
  };
  success: {
    border: string;
    bg: string;
    text: string;
  };
  info: {
    border: string;
    bg: string;
    text: string;
  };
};

const defaultAlertDarkTheme: NotificationTheme = {
  error: {
    border: "rgba(60, 16, 16, 1)",
    bg: "rgba(60, 16, 16, 1)",
    text: "rgba(249, 65, 65, 1)",
  },
  success: {
    border: "rgba(0, 206, 209, 1)",
    bg: "rgba(0, 206, 209, 1)",
    text: "rgba(0, 0, 0, 1)",
  },
  info: {
    border: "rgba(31, 31, 31, 1)",
    bg: "rgba(31, 31, 31, 1)",
    text: "rgba(255, 255, 255, 1)",
  },
};

const defaultAlertLightTheme: NotificationTheme = {
  error: {
    border: "rgba(60, 16, 16, 1)",
    bg: "rgba(249, 65, 65, 0.24)",
    text: "rgba(249, 65, 65, 1)",
  },
  success: {
    border: "rgba(0, 206, 209, 1)",
    bg: "rgba(0, 206, 209, 1)",
    text: "rgba(0, 0, 0, 1)",
  },
  info: {
    border: "rgba(31, 31, 31, 1)",
    bg: "rgba(31, 31, 31, 1)",
    text: "rgba(255, 255, 255, 1)",
  },
};

type NotificationOptions = {
  theme: "dark" | "light";
  alertThemeOverride?: NotificationTheme;
};

interface NotificationContainerProps extends ViewProps {
  defaultOptions: NotificationOptions;
}

type NotificationData = {
  id: string;
  text: string;
  type: "info" | "error" | "success";
};

type NotificationContextData = {
  alerts: Array<NotificationData>;
  queue: RefObject<Array<NotificationData>>;
  addAlert: (alert: NotificationData) => void;
  clearAlerts: () => void;
  removeAlertById: (id: string) => void;
};

type NotificationProps = {
  alert: NotificationData;
  theme: NotificationTheme;
};

const NotificationContext = React.createContext<NotificationContextData>({
  alerts: [],
  queue: React.createRef<Array<NotificationData>>(),
  addAlert: () => undefined,
  clearAlerts: () => undefined,
  removeAlertById: () => undefined,
});

const getRandomValue = (): string => {
  return String(Math.floor(Math.random() * 1000000));
};

const CDSNotification = ({ theme, alert }: NotificationProps): JSX.Element => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { removeAlertById } = useNotificationContext();

  const slideAnim = useRef(new Animated.Value(32)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  // TODO: Add icons for other types after design
  const icon = alert.type === "error" ? CDSIcon.info : null;
  const textColor = theme[alert.type].text;

  return (
    <Animated.View // Special animatable View
      style={{
        ...styles.alert,
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }],
        backgroundColor: theme[alert.type].bg,
        borderWidth: 1,
        borderColor: theme[alert.type].border,
      }}
      onTouchEnd={(): void => {
        removeAlertById(alert.id);
      }}
    >
      {icon != null ? (
        <BaseIcon color={textColor} size={24}>
          {icon()}
        </BaseIcon>
      ) : null}
      <Text
        allowFontScaling={false}
        style={[
          styles.text,
          {
            color: textColor,
          },
        ]}
      >
        {alert.text}
      </Text>
    </Animated.View>
  );
};

export const CDSNotificationProvider = ({
  children,
  defaultOptions,
}: NotificationContainerProps): $MixedElement => {
  const theme =
    defaultOptions.theme === "dark"
      ? { ...defaultAlertDarkTheme, ...defaultOptions.alertThemeOverride }
      : {
          ...defaultAlertLightTheme,
          ...defaultOptions.alertThemeOverride,
        };

  const [alerts, setAlerts] = useState<Array<NotificationData>>([]);
  const queue = useRef<Array<NotificationData>>([]);

  const addAlert = useCallback(
    (alert: NotificationData) => {
      queue.current.push(alert);
      const currentState = [...queue.current];
      setAlerts(currentState);
    },
    [alerts],
  );

  const removeAlertById = (id: string): void => {
    queue.current = queue.current.filter((item) => item.id != id);
    const currentState = [...queue.current];
    setAlerts(currentState);
  };

  const clearAlerts = (): void => {
    setAlerts([]);
  };

  return (
    <NotificationContext.Provider
      value={{
        alerts,
        addAlert,
        clearAlerts,
        removeAlertById,
        queue,
      }}
    >
      <View style={styles.wrapper}>
        {alerts.map((alert) => (
          <CDSNotification key={alert.id} alert={alert} theme={theme} />
        ))}
      </View>
      {children}
    </NotificationContext.Provider>
  );
};

const useNotificationContext = (): NotificationContextData => {
  return useContext(NotificationContext);
};

export const useNotification = (): {
  info: (text: string, timeout?: number) => void;
  success: (text: string, timeout?: number) => void;
  error: (text: string, timeout?: number) => void;
} => {
  const { addAlert, removeAlertById } = useNotificationContext();

  const notify = {
    info: (text: string, timeout = 3000): void => {
      const id = getRandomValue();
      addAlert({ text, type: "info", id });

      setTimeout(() => {
        removeAlertById(id);
      }, timeout);
    },
    success: (text: string, timeout = 3000): void => {
      const id = getRandomValue();
      addAlert({ text, type: "success", id });

      setTimeout(() => {
        removeAlertById(id);
      }, timeout);
    },
    error: (text: string, timeout = 3000): void => {
      const id = getRandomValue();
      addAlert({ text, type: "error", id });

      setTimeout(() => {
        removeAlertById(id);
      }, timeout);
    },
  };

  return notify;
};

//eslint-disable-next-line
const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 12,
    bottom: 32,
    backgroundColor: "transparent",
    width: Dimensions.get("screen").width - 12,

    // Set a big value to on top of all elements
    zIndex: 1000000001,
  },
  alert: {
    borderRadius: 16,
    paddingHorizontal: 24,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    flexDirection: "row",
    gap: 8,
  },
  text: {
    fontFamily: DMSans.medium,
    fontSize: 16,
    textAlign: "center",
  },
});
