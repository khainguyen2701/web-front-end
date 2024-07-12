import { Box, SvgIcon, TextField, Typography } from "@mui/material";
import React from "react";
import ModeSelect from "../ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";

import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import WorkSpaces from "./Menus/WorkSpaces";
import Recent from "./Menus/Recent";
import Stared from "./Menus/Stared";
import Templates from "./Menus/Templates";
import Notification from "./Notification";
import Help from "./Help";
import Account from "./Account";

const AppBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        px: 2,
        justifyContent: "space-between"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "primary.main" }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main"
            }}
          >
            Trello
          </Typography>
        </Box>
        <WorkSpaces />
        <Recent />
        <Stared />
        <Templates />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
        />
        <ModeSelect />
        <Notification />
        <Help />
        <Account />
      </Box>
    </Box>
  );
};

export default AppBar;
