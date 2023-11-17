import { atom } from "recoil";
import { useRecoilValue, useSetRecoilState } from "recoil";
import type { SetterOrUpdater } from "recoil";

export type Auth = {
  isAuth: boolean;
};

export const AuthAtom = atom<Auth>({
  default: {
    isAuth: false,
  },
  key: "Auth.Atom",
});

export const useAuth = <T = Auth>(): T => {
  return useRecoilValue(AuthAtom) as T;
};

export const useAuthNullSafe = (): Auth => {
  return useAuth<Auth>();
};

export const useSetAuth = (): SetterOrUpdater<Auth> => {
  return useSetRecoilState(AuthAtom);
};
