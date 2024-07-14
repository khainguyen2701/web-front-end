import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Badge, Tooltip } from "@mui/material";

const Notification = () => {
  return (
    <Tooltip title="Notification">
      <Badge color="warning" variant="dot">
        <NotificationsActiveIcon sx={{ color: "white", cursor: "pointer" }} />
      </Badge>
    </Tooltip>
  );
};

export default Notification;
