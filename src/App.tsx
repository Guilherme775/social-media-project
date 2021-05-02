import React, { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { env } from "./RelayEnv";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeProvider } from "./providers/ThemeProvider";
import { AlertsProvider } from "./providers/AlertsProvider";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Routes } from "./routes";
import { Loader } from "./components/Loader";

function App() {
  return (
    <RelayEnvironmentProvider environment={env}>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <ThemeProvider>
            <AlertsProvider>
              <>
                <GlobalStyle />

                <Routes />
              </>
            </AlertsProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
