import {
  Cloud,
  ContentCopy,
  ContentCut,
  ContentPaste
} from "@mui/icons-material";
import AddCardIcon from "@mui/icons-material/AddCard";
import AttachmentIcon from "@mui/icons-material/Attachment";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
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
const HEADER_COLUMN_HEIGHT = "50px";
const FOOTER_COLUMN_HEIGHT = "56px";
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
          height: HEADER_COLUMN_HEIGHT,
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
            )} - ${HEADER_COLUMN_HEIGHT} - ${FOOTER_COLUMN_HEIGHT})`,
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
          <Card
            key={item}
            sx={{
              cursor: "pointer",
              boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
              overflow: "unset"
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
              title="green iguana"
            />
            <CardContent
              sx={{
                p: 1.5,
                "&:last-child": {
                  p: 1.5
                }
              }}
            >
              <Typography>Trello MERN</Typography>
            </CardContent>
            <CardActions sx={{ p: "0 4px 8px 4px" }}>
              <Button size="small" startIcon={<GroupIcon />}>
                20
              </Button>
              <Button size="small" startIcon={<MarkUnreadChatAltIcon />}>
                15
              </Button>
              <Button size="small" startIcon={<AttachmentIcon />}>
                10
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      {/* Footer */}
      <Box
        sx={{
          height: FOOTER_COLUMN_HEIGHT,
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

export default BoardColumn;
