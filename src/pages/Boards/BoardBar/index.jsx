import { Avatar, AvatarGroup, Box, Chip } from "@mui/material";
import React from "react";
import ChipBoard from "./ChipBoard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import FilterListIcon from "@mui/icons-material/FilterList";
import BoltIcon from "@mui/icons-material/Bolt";
import AvatarBoard from "./AvatarBoard";
import CustomButton from "~/components/CustomButton";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
const BoardBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflow: "auto",
        borderTop: "1px solid #00bfa5",
        px: 2
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <ChipBoard
          label={"Trello Dashboard"}
          onClick={() => console.log("Trello Dashboard")}
          icon={<DashboardIcon />}
        />
        <ChipBoard
          label={"Public/Private Workspaces"}
          onClick={() => console.log("Public/Private Workspaces")}
          icon={<VpnLockIcon />}
        />{" "}
        <ChipBoard
          label={"Add To Google Drive"}
          onClick={() => console.log("Add To Google Drive")}
          icon={<AddToDriveIcon />}
        />
        <ChipBoard
          label={"Automation"}
          onClick={() => console.log("Automation")}
          icon={<BoltIcon />}
        />{" "}
        <ChipBoard
          label={"Filters"}
          onClick={() => console.log("Filters")}
          icon={<FilterListIcon />}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <CustomButton title="Invite" startIcon={<PersonAddAlt1Icon />} />
        <AvatarGroup
          max={3}
          sx={{
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
        >
          <AvatarBoard
            titleTooltip="Remy Sharp"
            srcAvatar="/static/images/avatar/1.jpg"
          />
          <AvatarBoard
            titleTooltip="Travis Howard"
            srcAvatar="/static/images/avatar/2.jpg"
          />
          <AvatarBoard
            titleTooltip="Agnes Walker"
            srcAvatar="/static/images/avatar/4.jpg"
          />
          <AvatarBoard
            titleTooltip="Trevor Henderson"
            srcAvatar="/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default BoardBar;
