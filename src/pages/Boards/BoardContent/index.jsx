import { Box, Button } from "@mui/material";
import ListColumn from "./ListColumn";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
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
        <ListColumn />
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
    </Box>
  );
};

BoardContent.PropTypes = {};

export default BoardContent;
