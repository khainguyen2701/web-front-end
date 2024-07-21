import { Box } from "@mui/material";
import BoardCard from "./Card";
import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";

const BoardCardList = ({ cards }) => {
  return (
    <SortableContext
      items={cards?.map((item) => item?._id)}
      strategy={verticalListSortingStrategy}
    >
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
            `calc(${theme.trello.boardBarContentHeight} - ${theme.spacing(
              5
            )} - ${theme.trello.headerColumnHeight} - ${
              theme.trello.footerColumnHeight
            })`,
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ced0da",
            borderRadius: "10px"
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#bfc2cf"
          }
        }}
      >
        {cards?.map((card) => (
          <BoardCard key={card?._id} card={card} />
        ))}
      </Box>
    </SortableContext>
  );
};

BoardCardList.PropTypes = {};

export default BoardCardList;
