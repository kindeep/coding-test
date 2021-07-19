import React, { useEffect, useState } from "react";
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
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
} as any);

function App() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/sharks");
      const { data } = await response.json();
      setImages(data);
    })();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
