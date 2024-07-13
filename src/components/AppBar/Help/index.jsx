import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Tooltip } from "@mui/material";

const Help = () => {
  return (
    <Tooltip title="Help" sx={{ cursor: "pointer" }}>
      <HelpOutlineOutlinedIcon />
    </Tooltip>
  );
};

export default Help;
