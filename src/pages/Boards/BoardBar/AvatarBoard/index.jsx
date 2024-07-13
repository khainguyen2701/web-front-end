import { Avatar, Tooltip } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const AvatarBoard = (props) => {
  const { titleTooltip, srcAvatar } = props;
  return (
    <Tooltip title={titleTooltip}>
      <Avatar alt="Remy Sharp" src={srcAvatar} />
    </Tooltip>
  );
};

AvatarBoard.PropTypes = {
  titleTooltip: PropTypes.string,
  srcAvatar: PropTypes.string
};

export default AvatarBoard;
