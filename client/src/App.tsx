import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#346f7d",
    },
    secondary: {
      main: "#fac4c2",
    },
    heroBg: {
      main: "#eeeeee",
    },
  },
} as any);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
