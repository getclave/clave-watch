import * as Haptics from "expo-haptics";

type ReturnType = {
  notifySync: () => void;
  notifySyncHeavy: () => void;
};

export const useHaptic = (): ReturnType => {
  const notifySync = (): void => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).then().catch();
  };

  const notifySyncHeavy = (): void => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).then().catch();
  };

  return { notifySync, notifySyncHeavy };
};
