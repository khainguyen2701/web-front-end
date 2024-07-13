import { Button } from "@mui/material";

const CustomButton = (props) => {
  const { title, ...rest } = props;
  return (
    <Button {...rest} variant="outlined">
      {title}
    </Button>
  );
};

CustomButton.PropTypes = {
  title: CustomButton.string,
  rest: CustomButton.object
};

export default CustomButton;
