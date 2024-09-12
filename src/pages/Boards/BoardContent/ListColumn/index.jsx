import {
  SortableContext,
  horizontalListSortingStrategy
} from "@dnd-kit/sortable";
import ClearIcon from "@mui/icons-material/Clear";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import BoardColumn from "./BoardColumn";

const ListColumn = ({ columns }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const [value, setSearch] = useState("");
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
        {isOpen ? (
          <Box
            sx={{
              minWidth: "250px",
              maxWidth: "250px",
              mx: 2,
              p: 1,
              borderRadius: "6px",
              height: "fit-content",
              bgcolor: "#ffffff3d",
              display: "flex",
              flexDirection: "column",
              gap: 1
            }}
          >
            <TextField
              label="Enter column title..."
              type="text"
              autoFocus
              variant="outlined"
              size="small"
              value={value}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              sx={{
                "& label": {
                  color: "white"
                },
                "& input": {
                  color: "white"
                },
                "& label.Mui-focused": {
                  color: "white"
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white"
                  },
                  "&:hover fieldset": {
                    borderColor: "white"
                  },
                  "& .Mui-focused fieldset": {
                    borderColor: "white"
                  }
                }
              }}
              InputProps={{
                endAdornment: value ? (
                  <InputAdornment position="end">
                    <ClearIcon
                      sx={{ color: "white", cursor: "pointer" }}
                      onClick={() => setSearch("")}
                    />
                  </InputAdornment>
                ) : null
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                variant="contained"
                color="success"
                size="small"
                sx={{
                  boxShadow: "none",
                  border: "0.5px solid",
                  borderColor: (theme) => theme.palette.success.main,
                  "&:hover": (theme) => theme.palette.success.main
                }}
              >
                Add Column
              </Button>
              <ClearIcon
                sx={{
                  color: "white",
                  cursor: "pointer",
                  "&:hover": {
                    color: (theme) => theme.palette.warning.light
                  }
                }}
                onClick={() => {
                  toggleOpen();
                  setSearch("");
                }}
              />
            </Box>
          </Box>
        ) : (
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
              onClick={toggleOpen}
            >
              Add new column
            </Button>
          </Box>
        )}
      </Box>
    </SortableContext>
  );
};

ListColumn.propTypes = {};

export default ListColumn;
