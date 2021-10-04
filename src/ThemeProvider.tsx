import React from "react";

import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { useTheme as useCoreTheme } from "@mui/material/styles";

import {
  ThemeProvider as MuiThemeProvider,
  // is used to avoid fonDOMNode warning in the react strict mode
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BorderColors {
    grey: string;
  }

  interface Palette {
    border: BorderColors;
  }

  interface PaletteOptions {
    border?: Partial<BorderColors>;
  }
}

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

export const LAYOUT = {
  TopPanel: {
    size: 56,
    RouterMenu: {
      width: 290,
    },
    DomainsManager: {
      width: 290,
    },
  },
  RightPanel: {
    size: 240,
    padding: 16,
  },
  LeftPanel: {
    size: 60,
    floatingContainerSize: 320,
    iconSize: 32,
    RequestsManager: {
      previewSize: 700,
    },
  },
  Dashboard: {
    margin: 12,
    OverlayControls: {
      height: 20,
      iconWidth: 12,
      iconHeight: 12,
      offset: 4,
    },
  },
  effects: {
    popupShadow: `0px 2px 40px rgba(50, 60, 71, 0.1)`,
  },
  controls: {
    lineHeight: 16,
    height: 32,
    tooltip: {
      maxWidth: "200px",
    },
  },
} as const;

const theme = {
  ...createMuiTheme({
    palette: {
      primary: {
        light: COLORS.blue100,
        main: COLORS.blue300,
        dark: COLORS.blue500,
        contrastText: COLORS.white,
      },
      secondary: {
        main: COLORS.red400,
        contrastText: COLORS.white,
      },
      error: {
        light: COLORS.red200,
        main: COLORS.red400,
        dark: COLORS.red400,
        contrastText: COLORS.white,
      },
      warning: {
        light: COLORS.yellow100,
        main: COLORS.yellow300,
        contrastText: COLORS.gray600,
      },
      success: {
        light: COLORS.green100,
        main: COLORS.green400,
      },
      text: {
        primary: COLORS.gray600,
        secondary: COLORS.gray600,
      },

      border: {
        grey: COLORS.gray300,
      },
      grey: {
        100: COLORS.gray100,
        200: COLORS.gray200,
        300: COLORS.gray300,
        400: COLORS.gray400,
        500: COLORS.gray500,
        600: COLORS.gray600,
        700: COLORS.gray700,
      },
      common: {
        white: COLORS.white,
        black: COLORS.gray600,
      },
      background: {
        default: COLORS.white,
      },
    },
    typography: {
      fontSize: 12,
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      button: {
        fontSize: 14,
      },
      h6: {
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: "0.2px",
      },
      caption: {
        fontSize: 10,
      },
    },
    // props: {
    //   MuiSwitch: {
    //     disableRipple: true,
    //   },
    // },
    // overrides: {
    //   MuiDivider: {
    //     root: {
    //       backgroundColor: COLORS.gray200,
    //     },
    //   },
    //   MuiButton: {
    //     containedPrimary: {
    //       boxShadow: "none",

    //       "&:hover": {
    //         backgroundColor: COLORS.blue200,
    //         boxShadow: "0px 2px 4px rgba(50, 50, 93, 0.2)",
    //       },

    //       "&:active": {
    //         backgroundColor: COLORS.blue100,
    //         boxShadow: "inset 0px 1px 6px rgba(0, 0, 0, 0.15)",
    //       },
    //     },
    //     containedSecondary: {
    //       boxShadow: "none",

    //       "&:hover": {
    //         backgroundColor: COLORS.red300,
    //         boxShadow: "0px 2px 4px rgba(50, 50, 93, 0.2)",
    //       },

    //       "&:active": {
    //         backgroundColor: COLORS.red200,
    //         boxShadow:
    //           "inset 0px 1px 3px rgba(50, 50, 93, 0.14), inset 0px 4px 6px rgba(51, 80, 107, 0.08);",
    //       },
    //     },
    //     outlined: {
    //       border: "1px solid",
    //       borderColor: COLORS.gray300,
    //       backgroundColor: COLORS.white,

    //       "&:hover": {
    //         backgroundColor: COLORS.white,
    //         boxShadow: "0px 2px 4px rgba(50, 50, 93, 0.2)",
    //       },

    //       "&:active": {
    //         backgroundColor: COLORS.white,
    //         boxShadow:
    //           "inset 0px 1px 3px rgba(50, 50, 93, 0.14), inset 0px 4px 6px rgba(51, 80, 107, 0.08)",
    //       },
    //     },

    //     text: { padding: 10 },
    //     root: {
    //       borderRadius: 5,
    //       textTransform: "none",
    //       height: 32,
    //       paddingLeft: 16,
    //       paddingRight: 16,
    //       paddingTop: 10,
    //       paddingBottom: 10,
    //       fontWeight: 600,
    //     },
    //   },
    //   MuiOutlinedInput: {
    //     root: {
    //       "&:hover .MuiOutlinedInput-notchedOutline": {
    //         borderColor: COLORS.blue300,
    //       },
    //     },
    //     notchedOutline: {
    //       borderColor: COLORS.gray300,
    //     },
    //     multiline: {
    //       // with fontsize `theme.layout.controls.fontSize`
    //       // this artificially confirms to design height 32px for inputs
    //       "&.MuiOutlinedInput-marginDense": {
    //         paddingTop: 8,
    //         paddingBottom: 8,
    //       },
    //     },
    //   },
    //   // MuiFormControlLabel and MuiCheckbox are hacks to make correct overlay fot this items.
    //   // Think about more correct solution (e.g. define overlay settings in the component DSL).
    //   MuiFormControlLabel: {
    //     root: { marginLeft: 0, marginRight: 0 },
    //     labelPlacementStart: { marginLeft: 0, marginRight: 0 },
    //     label: { marginLeft: 11, marginRight: 11 },
    //   },
    //   MuiMenuItem: {
    //     root: {
    //       fontSize: 12,
    //     },
    //   },
    //   MuiSwitch: {
    //     switchBase: {
    //       color: COLORS.white,
    //       top: 4,
    //       left: 5,
    //       padding: 4,
    //       "&.Mui-checked": {
    //         left: -3,
    //       },
    //       "&.Mui-checked + .MuiSwitch-track": {
    //         opacity: 1,
    //       },
    //     },
    //     root: {
    //       width: 42,
    //       height: 28,
    //       padding: "4px 5px",
    //       "& .MuiSwitch-colorPrimary.Mui-disabled + .MuiSwitch-track": {
    //         backgroundColor: COLORS.gray200,
    //         opacity: 1,
    //       },
    //       "& .MuiSwitch-colorSecondary.Mui-disabled + .MuiSwitch-track": {
    //         backgroundColor: COLORS.gray200,
    //         opacity: 1,
    //       },
    //       "&:hover": {
    //         "& .MuiIconButton-root": {
    //           backgroundColor: "initial",
    //         },
    //         "& .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track": {
    //           backgroundColor: COLORS.blue100,
    //         },
    //         "& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track": {
    //           backgroundColor: COLORS.red100,
    //         },
    //         "& .MuiSwitch-colorPrimary.Mui-disabled + .MuiSwitch-track": {
    //           backgroundColor: COLORS.gray200,
    //           opacity: 1,
    //         },
    //         "& .MuiSwitch-colorSecondary.Mui-disabled + .MuiSwitch-track": {
    //           backgroundColor: COLORS.gray200,
    //           opacity: 1,
    //         },
    //       },
    //     },
    //     thumb: {
    //       width: 12,
    //       height: 12,
    //       boxShadow: "none",
    //     },
    //     track: {
    //       opacity: 1,
    //       backgroundColor: COLORS.gray300,
    //       borderRadius: 12,
    //     },
    //     colorPrimary: {
    //       "&.Mui-disabled": {
    //         color: COLORS.gray300,
    //       },
    //       "&.Mui-checked": {
    //         backgroundColor: "initial !important",
    //         color: COLORS.white,
    //         "&:hover": {
    //           backgroundColor: "initial",
    //         },
    //       },
    //     },
    //     colorSecondary: {
    //       "&.Mui-disabled": {
    //         color: COLORS.gray300,
    //       },
    //       "&.Mui-checked": {
    //         backgroundColor: "initial !important",
    //         color: COLORS.white,
    //         "&:hover": {
    //           backgroundColor: "initial",
    //         },
    //       },
    //     },
    //   },
    //   MuiCheckbox: {
    //     root: {
    //       marginLeft: -11,
    //       marginRight: -11,
    //       color: COLORS.gray300,
    //     },
    //   },
    //   MuiTab: {
    //     root: {
    //       fontSize: 12,
    //       textTransform: "none",
    //     },
    //     textColorPrimary: {
    //       color: COLORS.gray500,
    //       "&.Mui-selected": {
    //         color: COLORS.gray600,
    //       },
    //     },
    //   },
    //   MuiTabs: {
    //     indicator: {
    //       backgroundColor: COLORS.gray600,
    //     },
    //   },
    //   MuiAccordion: {
    //     root: {
    //       boxShadow: "none",
    //       border: "none",
    //       "&.Mui-expanded": {
    //         margin: 0,
    //       },
    //       "&:before": {
    //         display: "none",
    //       },
    //     },
    //     rounded: {
    //       "&:last-child": {
    //         borderRadius: 0,
    //       },
    //       "&:first-child": {
    //         borderRadius: 0,
    //       },
    //     },
    //   },
    //   MuiAccordionDetails: {
    //     root: {
    //       padding: 0,
    //     },
    //   },
    //   MuiAccordionSummary: {
    //     root: {
    //       minHeight: "auto",
    //       "&.Mui-expanded": {
    //         minHeight: "auto",
    //       },

    //       padding: 0,
    //       justifyContent: "start",
    //       marginBottom: "9px",

    //       "& .MuiIconButton-root": {
    //         padding: 0,
    //         color: COLORS.gray400,
    //       },
    //     },
    //     content: {
    //       margin: 0,
    //       flexGrow: 0,
    //       paddingRight: "4px",
    //       "&.Mui-expanded": {
    //         margin: 0,
    //         flexGrow: 0,
    //         paddingRight: "4px",
    //       },
    //     },
    //   },
    // },
  }),
  layout: LAYOUT,
};

type CustomTheme = typeof theme;

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends CustomTheme {}
}

export const useTheme = (): CustomTheme => {
  const customTheme = useCoreTheme<CustomTheme>();
  return customTheme;
};

export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      {/* <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider> */}
    </MuiThemeProvider>
  );
};
