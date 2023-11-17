import {
  type NavigationProp,
  type RouteProp,
  StackActions,
  createNavigationContainerRef,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  type StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";

export const UnauthorizedStack = createStackNavigator();

export enum UnauthorizedPaths {
  LANDING = "LANDING",
}

export type UnauthroizedParamList = {
  [UnauthorizedPaths.LANDING]: undefined;
};

export const useUnauthorizedNavigation = (): Omit<
  NavigationProp<UnauthroizedParamList>,
  "navigate"
> & {
  navigate: (path: UnauthorizedPaths, params?: Record<string, unknown>) => void;
  replace: (path: UnauthorizedPaths, params?: Record<string, unknown>) => void;
} => {
  const navigation = useNavigation<NavigationProp<UnauthroizedParamList>>();

  const navigate = (
    path: UnauthorizedPaths,
    params: Record<string, unknown> = {},
  ): void => {
    const args = [path, params] as never;
    navigation.navigate(...args);
  };
  const replace = (
    path: UnauthorizedPaths,
    params: Record<string, unknown> = {},
  ): void => {
    navigation.dispatch(StackActions.replace(path, params));
  };
  return { ...navigation, navigate, replace };
};

export const useUnauthorizedRoute = <
  T extends keyof UnauthroizedParamList,
>(): RouteProp<UnauthroizedParamList, T> => {
  const route = useRoute<RouteProp<UnauthroizedParamList, T>>();

  return route;
};

export const useUnauthorizedScreenOptions = (): StackNavigationOptions => {
  return {
    headerShown: false,
  };
};

/** Authorized Views **/

export const AuthorizedStack = createStackNavigator();

export interface NextPageParams {
  next?: AuthorizedPaths;
  nextParams?: Record<string, unknown>;
}

export interface TokenSelectionPageParams extends NextPageParams {
  type: "send" | "receive";
}

export enum AuthorizedPaths {
  DASHBOARD = "DASHBOARD",
}

export type AuthorizedParamList = {
  [AuthorizedPaths.DASHBOARD]: undefined;
};

export const useAuthorizedNavigation = (): Omit<
  NavigationProp<AuthorizedParamList>,
  "navigate"
> & {
  navigate: (path: AuthorizedPaths, params?: Record<string, unknown>) => void;
  push: (path: AuthorizedPaths, params?: Record<string, unknown>) => void;
  replace: (path: AuthorizedPaths, params?: Record<string, unknown>) => void;
} => {
  const navigation = useNavigation<NavigationProp<AuthorizedParamList>>();

  const navigate = (
    path: AuthorizedPaths,
    params: Record<string, unknown> = {},
  ): void => {
    const args = [path, params] as never;
    navigation.navigate(...args);
  };

  const push = (
    path: AuthorizedPaths,
    params: Record<string, unknown> = {},
  ): void => {
    navigation.dispatch(StackActions.push(path, params));
  };

  const replace = (
    path: AuthorizedPaths,
    params: Record<string, unknown> = {},
  ): void => {
    navigation.dispatch(StackActions.replace(path, params));
  };

  return { ...navigation, navigate, push, replace };
};

export const useAuthorizedRoute = <
  T extends keyof AuthorizedParamList,
>(): RouteProp<AuthorizedParamList, T> => {
  const route = useRoute<RouteProp<AuthorizedParamList, T>>();

  return route;
};

export const useAuthorizedScreenOptions = (): StackNavigationOptions => {
  return {
    headerShown: false,
  };
};

export const authorizedNavigationRef =
  createNavigationContainerRef<AuthorizedParamList>();
