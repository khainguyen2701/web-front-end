import AppsIcon from "@mui/icons-material/Apps";
import { Box, SvgIcon, Typography } from "@mui/material";
import ModeSelect from "../ModeSelect";

import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import CustomButton from "../CustomButton";
import Account from "./Account";
import Help from "./Help";
import Recent from "./Menus/Recent";
import Stared from "./Menus/Stared";
import Templates from "./Menus/Templates";
import WorkSpaces from "./Menus/WorkSpaces";
import Notification from "./Notification";
import SearchTextField from "./SearchTextField";

const AppBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        px: 2,
        justifyContent: "space-between",
        gap: 2,
        overflow: "auto"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "white", cursor: "pointer" }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            cursor: "pointer"
          }}
        >
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "white" }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "white"
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <WorkSpaces />
          <Recent />
          <Stared />
          <Templates />
          <CustomButton
            title="Create"
            startIcon={<LibraryAddIcon />}
            sx={{
              color: "white",
              border: "none",
              "&:hover": {
                border: "none"
              }
            }}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <SearchTextField />
        <ModeSelect />
        <Notification />
        <Help />
        <Account />
      </Box>
    </Box>
  );
};

export default AppBar;
