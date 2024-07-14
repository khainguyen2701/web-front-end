import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const APP_BAR_HEIGHT = "58px";
const BOARD_BAR_HEIGHT = "68px";
const BOARD_BAR_CONTENT = `calc(100vh - ${BOARD_BAR_HEIGHT} - ${APP_BAR_HEIGHT})`;
const theme = extendTheme({
  colorSchemes: {
    light: {},
    dark: {}
  },
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardBarContentHeight: BOARD_BAR_CONTENT
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "0.875rem",
          borderWidth: "0.5px"
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          "& fieldset": {
            borderWidth: "0.5px !important"
          },
          "&:hover fieldset": {
            borderWidth: "1px !important"
          },
          "&.Mui-focused fieldset": {
            borderWidth: "1px !important"
          }
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px"
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#dcdde1",
            borderRadius: "10px"
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "white"
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem"
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-body1": {
            fontSize: "0.875rem"
          }
        }
      }
    }
  }
});

export default theme;
