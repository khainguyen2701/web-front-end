import { TextField } from "@mui/material";
import React from "react";

const CustomTextField = (props) => {
  const { label, ...rest } = props;
  return (
    <TextField
      {...rest}
      id="outlined-basic"
      label={label}
      variant="outlined"
      size="small"
    />
  );
};

CustomTextField.PropTypes = {
  label: CustomTextField.string,
  rest: CustomTextField.object
};

export default CustomTextField;
