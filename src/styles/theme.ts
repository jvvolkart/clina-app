import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      primary: string,
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    colors: {
      primary: string,
    };
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: "#7A35FF",
    },
    background: {
      default: '#1E2141',
    },
  },
  colors: {
    primary: '#7A35FF',
  },
});

export default theme = responsiveFontSizes(theme);
