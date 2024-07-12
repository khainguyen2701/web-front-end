import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Badge, Tooltip } from "@mui/material";

const Notification = () => {
  return (
    <Tooltip title="Notification">
      <Badge badgeContent={4} color="primary">
        <NotificationsActiveIcon />
      </Badge>
    </Tooltip>
  );
};

export default Notification;
