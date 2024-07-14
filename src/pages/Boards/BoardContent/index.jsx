import { Box } from "@mui/material";
import { Fragment } from "react";
import BoardColumn from "./BoardColumn";

const BoardContent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        height: (theme) => theme.trello.boardBarContentHeight,
        p: "10px 0"
      }}
    >
      <Box
        sx={{
          bgcolor: "inherit",
          width: "100%",
          height: "100%",
          overflowY: "hidden",
          overflowX: "auto",
          display: "flex",
          "&::-webkit-scrollbar-track": {
            m: 2
          }
        }}
      >
        {[1, 2, 3, 4].map((item) => (
          <Fragment key={item}>
            <BoardColumn />
          </Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default BoardContent;
