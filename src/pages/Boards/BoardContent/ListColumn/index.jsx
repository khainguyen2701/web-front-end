import { Box, Button } from "@mui/material";
import BoardColumn from "./BoardColumn";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

import {
  SortableContext,
  horizontalListSortingStrategy
} from "@dnd-kit/sortable";

const ListColumn = ({ columns }) => {
  return (
    <SortableContext
      items={columns?.map((item) => item?._id)}
      strategy={horizontalListSortingStrategy}
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
        {columns?.map((item) => (
          <BoardColumn key={item._id} column={item} />
        ))}
        <Box
          sx={{
            minWidth: "200px",
            maxWidth: "200px",
            mx: 2,
            borderRadius: "6px",
            height: "fit-content",
            background: "#ffffff3d"
          }}
        >
          <Button
            sx={{
              color: "white",
              display: "flex",
              justifyContent: "flex-start",
              pl: 2.5,
              py: 1
            }}
            startIcon={<NoteAddIcon sx={{ color: "white" }} />}
          >
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  );
};

ListColumn.propTypes = {};

export default ListColumn;
