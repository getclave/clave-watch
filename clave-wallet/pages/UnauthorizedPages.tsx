import { NavigationContainer } from "@react-navigation/native";
import { $MixedElement } from "../types";
import { Landing } from "./unauthorized/Landing";
import { UnauthorizedPaths, UnauthorizedStack } from "../utils/navigation";

export const UnauthorizedPages = (): $MixedElement => {
  return (
    <NavigationContainer>
      <UnauthorizedStack.Navigator>
        <UnauthorizedStack.Screen
          name={UnauthorizedPaths.LANDING}
          component={Landing}
          options={{ headerShown: false }}
        />
      </UnauthorizedStack.Navigator>
    </NavigationContainer>
  );
};
