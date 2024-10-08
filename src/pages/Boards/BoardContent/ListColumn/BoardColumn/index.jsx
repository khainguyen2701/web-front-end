import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Cloud,
  ContentCopy,
  ContentCut,
  ContentPaste
} from "@mui/icons-material";
import AddCardIcon from "@mui/icons-material/AddCard";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { mapOrder } from "~/util";
import ClearIcon from "@mui/icons-material/Clear";
import BoardCardList from "./CardList";

const BoardColumn = ({ column }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const [value, setSearch] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const orderedColumns = mapOrder(column?.cards, column?.cardOrderIds, "_id");

  // #region useSortable
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: column._id, data: { ...column } });

  const dndKitColumnStyle = {
    transform: CSS.Translate.toString(transform),
    transition,
    height: "100%",
    opacity: isDragging ? 0.5 : undefined
  };

  return (
    <div ref={setNodeRef} style={dndKitColumnStyle} {...attributes}>
      <Box
        {...listeners}
        sx={{
          minWidth: 300,
          maxWidth: 300,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
          ml: 2,
          borderRadius: "6px",
          height: "fit-content",
          maxHeight: (theme) =>
            `calc(${theme.trello.boardBarContentHeight} - ${theme.spacing(5)})`
        }}
      >
        {/* Header */}
        <Box
          sx={{
            height: (theme) => theme.trello.headerColumnHeight,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1rem"
            }}
          >
            {column?.title}
          </Typography>
          <Box>
            <Tooltip title="More options">
              <ExpandMoreIcon
                sx={{ color: "text.primary", cursor: "pointer" }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
            </Tooltip>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button"
              }}
            >
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteForeverIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        {/* Content */}
        <BoardCardList cards={orderedColumns} />
        {/* Footer */}

        <Box
          sx={{
            height: (theme) => theme.trello.footerColumnHeight,
            p: 2
          }}
        >
          {isOpen ? (
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
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
                    color: "text.primary"
                  },
                  "& input": {
                    color: (theme) => theme.palette.primary.main,
                    bgcolor: (theme) =>
                      theme.palette.mode === "dark" ? "#333643" : "white"
                  },
                  "& label.Mui-focused": {
                    color: (theme) => theme.palette.primary.main
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: (theme) => theme.palette.primary.main
                    },
                    "&:hover fieldset": {
                      borderColor: (theme) => theme.palette.primary.main
                    },
                    "& .Mui-focused fieldset": {
                      borderColor: (theme) => theme.palette.primary.main
                    }
                  },
                  "& .MuiOutlinedInput-input": {
                    borderRadius: 1
                  }
                }}
                InputProps={{
                  endAdornment: value ? (
                    <InputAdornment position="end">
                      <ClearIcon
                        sx={{
                          color: (theme) => theme.palette.warning.light,
                          cursor: "pointer"
                        }}
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
                  Add
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
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Button
                onClick={toggleOpen}
                startIcon={<AddCardIcon fontSize="small" />}
              >
                Add new card
              </Button>
              <Tooltip title="Drag Over Item">
                <DragHandleIcon sx={{ cursor: "pointer" }} />
              </Tooltip>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
};

BoardColumn.PropTypes = {};

export default BoardColumn;
