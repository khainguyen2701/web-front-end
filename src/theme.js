import { cyan, deepOrange, orange, teal } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: teal[200],
          secondary: deepOrange[200]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: cyan[200],
          secondary: orange[200]
        }
      }
    }
  }
});

export default theme;
