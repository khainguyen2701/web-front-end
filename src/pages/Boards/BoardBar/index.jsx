import { Box } from "@mui/material";
import React from "react";

const BoardBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "primary.dark",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center"
      }}
    >
      Board bar
    </Box>
  );
};

export default BoardBar;
