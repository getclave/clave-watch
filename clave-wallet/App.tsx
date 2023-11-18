import { QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { queryClient } from "./api";
import { useAuth } from "./store";
import "react-native-gesture-handler";
import { AuthorizedPages } from "./pages/AuthorizedPages";
import { UnauthorizedPages } from "./pages/UnauthorizedPages";
import { StatusBar } from "expo-status-bar";
import { CDSThemeProvider } from "./packages";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CDSThemeProvider defaultTheme="light">
        <RecoilRoot>
          <StatusBar style="light" />
          <Main />
        </RecoilRoot>
      </CDSThemeProvider>
    </QueryClientProvider>
  );
}

const Main = () => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <UnauthorizedPages />;
  }

  return <AuthorizedPages />;
};
