import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Tooltip } from "@mui/material";

const Help = () => {
  return (
    <Tooltip title="Help">
      <HelpOutlineOutlinedIcon sx={{ color: "white", cursor: "pointer" }} />
    </Tooltip>
  );
};

export default Help;
