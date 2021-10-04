import {
  PaletteColor,
  ThemeOptions,
  ThemeProvider as MuiThemeProvider,
  // is used to avoid fonDOMNode warning in the react strict mode
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@mui/material/styles";

import { useTheme as useCoreTheme } from "@mui/material/styles";
import { TypeBackground } from "@mui/material/styles/createPalette";
import {
  makeStyles as makeCoreStyles,
  Styles,
  WithStylesOptions,
} from "@mui/styles";

export const COLORS = {
  // grays
  white: "#FFFFFF",
  gray100: "#F4F7F9",
  gray200: "#E8EFF5",
  gray300: "#CFD7DE",
  gray400: "#A3AFB7",
  gray500: "#7D828C",
  gray600: "#323C47",
  gray700: "#1A252F",
  // blues
  blue100: "#4DA1FF",
  blue200: "#238BFF",
  blue300: "#0874F9",
  blue400: "#687695",
  blue500: "#4D5A78",
  // greens
  green100: "#A6E50F",
  green200: "#62C59C",
  green300: "#3DC38C",
  green400: "#00BB6E",
  // reds
  red100: "#F17B71",
  red200: "#FF6D4A",
  red300: "#FE4B3D",
  red400: "#FF2A25",
  // purples
  purple100: "#9975D0",
  purple200: "#4D329A",
  purple300: "#32235E",
  purple400: "#261B48",
  // mangentas
  magenta100: "#F900AF",
  // yellows
  yellow100: "#FCDC51",
  yellow200: "#FBD324",
  yellow300: "#FFCF00",
} as const;

declare module "@mui/material/styles" {
  // interface BorderColors {
  //   grey: string;
  // }
  interface PI {
    light: string;
  }

  interface Palette {
    testPalleteItem: PI;
  }

  interface PaletteOptions {
    testPalleteItem?: PI;
  }
}

// или убрать ThemeOptions и гит игнор
const themeOptions = {
  palette: {
    background: {
      default: COLORS.blue100,
      paper: COLORS.blue100,
      main: COLORS.yellow300,
    },

    primary: {
      light: COLORS.blue100,
      main: COLORS.blue300,
      dark: COLORS.blue500,
      lightBlue: "lightBlue",
      contrastText: COLORS.white,
    },

    testPalleteItem: {
      light: "red",
      // не ругается, т.к можно расширять тип!!!
      main: "green",
    },
  },
} as const;

type CustomThemeOptions = typeof themeOptions;

const theme = createMuiTheme(themeOptions);

type CustomTheme = typeof theme & CustomThemeOptions;

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}

export const useTheme = (): CustomTheme => {
  const customTheme = useCoreTheme<CustomTheme>();
  return customTheme;
};

export function makeStyles<
  Theme = CustomTheme,
  Props extends object = {},
  ClassKey extends string = string
>(
  styles: Styles<Theme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, "withTheme">
) {
  return makeCoreStyles<Theme, Props, ClassKey>(styles, options);
}

export const ThemeProvider: React.FC = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
