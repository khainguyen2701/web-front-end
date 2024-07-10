import { Box } from "@mui/material";
import React from "react";

const BoardContent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "primary.main",
        display: "flex",
        alignItems: "center",
        height: (theme) =>
          `calc(100vh - ${theme.trello.boardBarHeight} - ${theme.trello.appBarHeight})`
      }}
    >
      Board content
    </Box>
  );
};

export default BoardContent;
