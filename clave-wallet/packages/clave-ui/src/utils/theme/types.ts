import type { Dispatch, SetStateAction } from "react";

export type CDSTheme = {
  bg: string;
  primary: string;
  subtext: string;
  divider: string;
  input: {
    warning: string;
    success: string;
    icon: string;
    border: string;
    error: string;
    placeholder: string;
    color: string;
    label: string;
    bg: string;
  };
  typography: {
    text: string;
    subtext: string;
    subtext3: string;
    link: string;
  };
  backbutton: {
    bg: string;
    color: string;
  };
  modal: {
    bg: string;
  };
  backup: {
    doneBg: string;
    warningBg: string;
    circle: {
      doneBg: string;
      doneColor: string;
      doneIcon: string;
      warningBg: string;
      warningColor: string;
      warningIcon: string;
    };
  };
  dashboard: {
    header: {
      addressBadge: {
        bg: string;
        icon: string;
        border: string;
      };
    };
    actions: {
      bg: string;
      color: string;
      border: string;
    };
  };
  portfolio: {
    list: {
      bg: string;
      price: string;
    };
    actions: {
      bg: string;
      color: string;
    };
  };
  navbar: {
    bg: string;
    border: string;
    activeBg: string;
    activeText: string;
    text: string;
  };
  transaction: {
    fee: {
      bg: string;
    };
    approve: {
      icon: string;
      itemBg: string;
    };
  };
  walletconnect: {
    list: {
      itemBg: string;
    };
  };
  profile: {
    card: {
      bg: string;
      iconBg: string;
      text: string;
    };
    welcome: {
      bg: string;
      title: string;
      subtext: string;
      iconBg: string;
    };
  };
  custom_tokens: {
    list: {
      itemBg: string;
    };
    contractBg: string;
  };
  bottomSheetIcon: {
    bg: string;
    color: string;
  };
  paymaster: {
    bg: string;
    border: string;
  };
  socialGuardian: {
    guardian: {
      bg: string;
      trash: {
        bg: string;
        icon: string;
      };
    };
    bottomSheet: {
      duration: {
        bg: string;
      };
    };
  };
  cloudRecovery: {
    view: {
      bg: string;
      logo: {
        bg: string;
        icon: string;
      };
      tick: {
        bg: string;
        icon: string;
      };
    };
    bottomSheet: {
      icon: {
        bg: string;
        icon: string;
      };
      duration: {
        bg: string;
      };
    };
  };
};

export type Theme = "dark" | "light";

export interface IThemeContext {
  currentTheme: Theme;
  theme: CDSTheme;
  toggleTheme: () => void;
  setCurrentTheme: Dispatch<SetStateAction<Theme>>;
}
