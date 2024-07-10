import { Box } from "@mui/material";
import React from "react";
import ModeSelect from "../ModeSelect";
const AppBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "primary.light",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center"
      }}
    >
      <ModeSelect />
    </Box>
  );
};

export default AppBar;
