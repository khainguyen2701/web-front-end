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
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Tooltip,
  Typography
} from "@mui/material";
import React from "react";
import BoardCardList from "./CardList";

const BoardColumn = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
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
          Column Title
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
      <BoardCardList />
      {/* Footer */}

      <Box
        sx={{
          height: (theme) => theme.trello.footerColumnHeight,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Button startIcon={<AddCardIcon fontSize="small" />}>
          Add new card
        </Button>
        <Tooltip title="Drag Over Item">
          <DragHandleIcon sx={{ cursor: "pointer" }} />
        </Tooltip>
      </Box>
    </Box>
  );
};

BoardColumn.PropTypes = {};

export default BoardColumn;
