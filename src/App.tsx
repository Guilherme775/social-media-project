import React, { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { env } from "./RelayEnv";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeProvider } from "./providers/ThemeProvider";
import { AlertsProvider } from "./providers/AlertsProvider";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Routes } from "./routes";

function App() {
  return (
    <RelayEnvironmentProvider environment={env}>
      <Suspense fallback={<h1>Loading...</h1>}>
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
