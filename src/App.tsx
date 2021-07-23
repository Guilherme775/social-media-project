import React, { Suspense, useState } from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { env } from "./RelayEnv";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeProvider } from "styled-components";
import { AlertsProvider } from "./providers/AlertsProvider";
import { GlobalStyle, lightTheme, darkTheme } from "./styles/GlobalStyles";
import { Routes } from "./routes";
import { Loader } from "./components/Loader";
import { ThemeSwitcher } from "./components";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <RelayEnvironmentProvider environment={env}>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <ThemeProvider theme={theme ? darkTheme : lightTheme}>
            <AlertsProvider>
              <>
                <GlobalStyle />
                <Routes />
                <ThemeSwitcher theme={theme} action={() => setTheme(!theme)} />
              </>
            </AlertsProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
