import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    images: {
      wolf: string;
      rabbit: string;
      cat: string;
    };
  }

  interface ThemeOptions {
    images: {
      wolf: string;
      rabbit: string;
      cat: string;
    };
  }
}