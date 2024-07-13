import AppsIcon from "@mui/icons-material/Apps";
import { Box, SvgIcon, TextField, Typography } from "@mui/material";
import ModeSelect from "../ModeSelect";

import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";
import Account from "./Account";
import CustomButton from "../CustomButton";
import Help from "./Help";
import Recent from "./Menus/Recent";
import Stared from "./Menus/Stared";
import Templates from "./Menus/Templates";
import WorkSpaces from "./Menus/WorkSpaces";
import Notification from "./Notification";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

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
        justifyContent: "space-between",
        gap: 2,
        overflow: "auto"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "primary.main", cursor: "pointer" }} />
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
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <WorkSpaces />
          <Recent />
          <Stared />
          <Templates />
          <CustomButton title="Create" startIcon={<LibraryAddIcon />} />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
          sx={{ minWidth: 120 }}
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
