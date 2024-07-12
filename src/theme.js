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
  }
});

export default theme;
