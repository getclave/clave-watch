import { CDSColors } from "../colors";
import type { CDSTheme } from "./types";

export const DarkTheme: CDSTheme = {
  bg: CDSColors.dark,
  primary: CDSColors.primary,
  subtext: CDSColors.subtext,
  divider: "rgba(60, 60, 60, 1)",
  input: {
    warning: CDSColors.warning,
    success: CDSColors.primary,
    icon: CDSColors.text,
    error: CDSColors.error,
    border: CDSColors.light,
    placeholder: CDSColors.subtext,
    color: CDSColors.text,
    label: CDSColors.text,
    bg: CDSColors.darkinput,
  },
  typography: {
    text: CDSColors.text,
    subtext: CDSColors.subtext,
    link: CDSColors.primary,
    subtext3: CDSColors.lightgray,
  },
  backbutton: {
    bg: CDSColors.darkbutton,
    color: CDSColors.text,
  },
  modal: {
    bg: CDSColors.dark,
  },
  backup: {
    doneBg: "rgba(8, 165, 157, 0.15)",
    warningBg: "rgba(210, 165, 2, 0.12)",
    circle: {
      doneBg: "rgba(8, 165, 157, 0.12)",
      doneColor: "rgba(8, 164, 156, 1)",
      doneIcon: "rgba(8, 164, 156, 1)",
      warningBg: "rgba(210, 165, 2, 1)",
      warningColor: "rgba(212, 165, 0, 1)",
      warningIcon: CDSColors.dark,
    },
  },
  dashboard: {
    header: {
      addressBadge: {
        bg: "rgba(255, 255, 255, 0.32)",
        icon: CDSColors.light,
        border: "rgba(255, 255, 255, 0.16)",
      },
    },
    actions: {
      bg: "rgba(255, 255, 255, 0.32)",
      color: CDSColors.light,
      border: "rgba(255, 255, 255, 0.16)",
    },
  },
  portfolio: {
    list: {
      bg: CDSColors.gray,
      price: "rgba(166, 177, 176, 1)",
    },
    actions: {
      bg: "rgba(7, 164, 156, 0.42)",
      color: CDSColors.light,
    },
  },
  navbar: {
    bg: CDSColors.dark,
    border: "rgba(7, 137, 131, 0.16)",
    activeBg: CDSColors.primary,
    activeText: CDSColors.dark,
    text: CDSColors.subtext,
  },
  transaction: {
    fee: {
      bg: "rgba(255, 255, 255, 0.15)",
    },
    approve: {
      icon: CDSColors.subtext,
      itemBg: "rgba(255, 255, 255, 0.15)",
    },
  },
  walletconnect: {
    list: {
      itemBg: CDSColors.gray,
    },
  },
  profile: {
    card: {
      bg: CDSColors.primary,
      iconBg: CDSColors.light,
      text: CDSColors.light,
    },
    welcome: {
      bg: CDSColors.gray,
      title: CDSColors.light,
      subtext: " rgba(133, 133, 133, 1)",
      iconBg: CDSColors.primary,
    },
  },
  custom_tokens: {
    list: {
      itemBg: CDSColors.gray,
    },
    contractBg: CDSColors.gray,
  },
  bottomSheetIcon: {
    bg: "rgba(0, 206, 209, 0.16)",
    color: CDSColors.primary,
  },
  paymaster: {
    bg: CDSColors.gray,
    border: CDSColors.primary,
  },
  socialGuardian: {
    guardian: {
      bg: CDSColors.gray,
      trash: {
        bg: "rgba(249, 65, 65, 0.24)",
        icon: CDSColors.error,
      },
    },
    bottomSheet: {
      duration: {
        bg: CDSColors.gray,
      },
    },
  },
  cloudRecovery: {
    view: {
      bg: CDSColors.gray,
      logo: {
        bg: CDSColors.light,
        icon: "rgb(58, 173, 249)",
      },
      tick: {
        bg: "rgba(0, 206, 209, 0.24);",
        icon: CDSColors.primary,
      },
    },
    bottomSheet: {
      icon: {
        bg: "rgba(0, 206, 209, 0.24);",
        icon: CDSColors.primary,
      },
      duration: {
        bg: CDSColors.gray,
      },
    },
  },
};
