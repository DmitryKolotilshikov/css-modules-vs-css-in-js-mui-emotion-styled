import { createTheme, ThemeProvider as MUIThemeProvider, GlobalStyles, css } from "@mui/material";
import type { FC, ReactNode } from "react";

const lightTheme = createTheme({
  palette: {
    common: {
      white: "#fff",
      black: "#000"
    },
    primary: {
      main: "#1976d2",
      dark: "#242c31",
      light: "#f3f3f3",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
  images: {
    wolf: "https://i.etsystatic.com/58438821/r/il/90566d/7049244045/il_570xN.7049244045_lvu0.jpg",
    rabbit: "https://storage.googleapis.com/pod_public/750/162533.jpg",
    cat: "https://m.media-amazon.com/images/I/51zqkQRHaNL._AC_UF894,1000_QL80_.jpg",
  }
});

const darkTheme = createTheme({
  palette: {
    common: {
      white: "#000000",
      black: "#f2f2f2",
    },
    primary: {
      main: "#1976d2",
      dark: "#e2e9ed",
      light: "#2d2d2d",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
  images: {
    wolf: "https://img.freepik.com/premium-photo/minimalist-black-wolf-illustration_605905-130156.jpg?semt=ais_wordcount_boost&w=740&q=80",
    rabbit: "https://img.redro.pl/naklejki/bunny-rabbit-cute-kawaii-cartoon-character-funny-head-face-doodle-linear-sketch-pink-cheeks-baby-greeting-card-template-happy-easter-sign-symbol-white-background-flat-design-700-188615911.jpg",
    cat: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wjHnkgDVYUCJPm0yDDNMmfsvxNjH2TO_OA&s",
  }
});

const isLight = false;

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MUIThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyles
        styles={css`
          :root {
            font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
            line-height: 1.5;
            font-weight: 400;
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
