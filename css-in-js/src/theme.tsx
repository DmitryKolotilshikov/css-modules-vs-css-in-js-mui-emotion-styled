import { createTheme, ThemeProvider as MUIThemeProvider, GlobalStyles, css } from "@mui/material";
import type { FC, ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      dark: "#35434e",
      light: "#ffffff",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
});

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MUIThemeProvider theme={theme}>
      <GlobalStyles
        styles={css`
          :root {
            font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
            line-height: 1.5;
            font-weight: 400;

            color-scheme: light dark;
            color: rgba(255, 255, 255, 0.87);
            background-color: #242424;

            font-synthesis: none;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          body {
            margin: 0;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </MUIThemeProvider>
  );
};
