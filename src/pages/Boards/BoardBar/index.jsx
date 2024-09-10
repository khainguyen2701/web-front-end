import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FilterListIcon from "@mui/icons-material/FilterList";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import { AvatarGroup, Box } from "@mui/material";
import CustomButton from "~/components/CustomButton";
import { capitalizeFirstLetter } from "~/util";
import AvatarBoard from "./AvatarBoard";
import ChipBoard from "./ChipBoard";
const BoardBar = ({ board }) => {
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
        borderBottom: "1px solid white",
        px: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {board?.title && (
          <ChipBoard
            label={board?.title}
            title={board?.description}
            onClick={() => console.log("Trello Dashboard")}
            icon={<DashboardIcon />}
          />
        )}
        {board?.type && (
          <ChipBoard
            label={capitalizeFirstLetter(board?.type)}
            onClick={() => console.log("Public/Private Workspaces")}
            icon={<VpnLockIcon />}
          />
        )}
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
        <CustomButton
          title="Invite"
          startIcon={<PersonAddAlt1Icon />}
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": {
              borderColor: "white"
            }
          }}
        />
        <AvatarGroup
          max={3}
          sx={{
            gap: "10px",
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
              border: "none"
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
