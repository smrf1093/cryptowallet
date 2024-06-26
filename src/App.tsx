import "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MMKV } from "react-native-mmkv";

import { ThemeProvider } from "@/theme";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ApplicationNavigator from "./navigators/Application";
import "./translations";

export const queryClient = new QueryClient();

export const storage = new MMKV();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider storage={storage}>
        <Provider store={store}>
          <ApplicationNavigator />
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
