import { Chip, Tooltip } from "@mui/material";
import PropTypes from "prop-types";

const ChipBoard = (props) => {
  const { onClick, label, icon, title } = props;
  return (
    <Tooltip title={title ?? ""}>
      <Chip
        sx={{
          color: "white",
          border: "none",
          px: 2,
          borderRadius: "4px",
          backgroundColor: "transparent",
          ".MuiSvgIcon-root": {
            color: "white"
          },
          "&:hover": {
            bgColor: "primary.50"
          }
        }}
        icon={icon}
        label={label}
        onClick={onClick}
      />
    </Tooltip>
  );
};

ChipBoard.PropTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.node
};

export default ChipBoard;
