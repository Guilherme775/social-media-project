import React from "react";
import { Routes } from "./routes";
import { ThemeProvider } from "./providers/ThemeProvider";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider>
      <>
        <GlobalStyle />

        <Routes />
      </>
    </ThemeProvider>
  );
}

export default App;
