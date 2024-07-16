import { Fragment } from "react";
import BoardCard from "./Card";
import { Box, Button } from "@mui/material";

const BoardCardList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: "0 5px",
        m: "0 5px",
        overflowX: "hidden",
        overflowY: "auto",
        maxHeight: (theme) =>
          `calc(${theme.trello.boardBarContentHeight} - ${theme.spacing(5)} - ${
            theme.trello.headerColumnHeight
          } - ${theme.trello.footerColumnHeight})`,
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ced0da",
          borderRadius: "10px"
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#bfc2cf"
        }
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <Fragment key={item}>
          <BoardCard />
        </Fragment>
      ))}
    </Box>
  );
};

BoardCardList.PropTypes = {};

export default BoardCardList;
