import { backdropClasses } from "@mui/material";
import { cyan, deepOrange, orange, teal } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: teal[500],
          secondary: deepOrange[500]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: cyan[500],
          secondary: orange[500]
        }
      }
    }
  },
  trello: {
    appBarHeight: "58px",
    boardBarHeight: "68px"
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            textTransform: "none",
            color: theme.palette.primary.main,
            fontSize: "0.875rem"
          };
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: "0.875rem",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light
            },
            "&:hover": {
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main
              }
            },
            "& fieldset": {
              borderWidth: "1px !important"
            }
          };
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "10px",
            height: "10px"
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#bdc3c7",
            borderRadius: "10px"
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#00b894"
          }
        }
      }
    }
  }
});

export default theme;
