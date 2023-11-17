import { NavigationContainer } from "@react-navigation/native";
import { $MixedElement } from "../types";
import { Landing } from "./unauthorized/Landing";
import {
  AuthorizedPaths,
  AuthorizedStack,
  UnauthorizedStack,
} from "../utils/navigation";

export const AuthorizedPages = (): $MixedElement => {
  return (
    <NavigationContainer>
      <AuthorizedStack.Navigator>
        <UnauthorizedStack.Screen
          name={AuthorizedPaths.DASHBOARD}
          component={() => <></>}
          options={{ headerShown: false }}
        />
      </AuthorizedStack.Navigator>
    </NavigationContainer>
  );
};
