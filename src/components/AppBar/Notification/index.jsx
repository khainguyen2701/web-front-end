import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Badge, Tooltip } from "@mui/material";

const Notification = () => {
  return (
    <Tooltip title="Notification" sx={{ cursor: "pointer" }}>
      <Badge badgeContent={4} color="primary">
        <NotificationsActiveIcon />
      </Badge>
    </Tooltip>
  );
};

export default Notification;
