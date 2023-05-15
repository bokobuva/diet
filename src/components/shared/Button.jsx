/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const StyledButton = ({ href, text, variant }) => {
  return (
    <Link to={href} style={{ margin: "6px" }}>
      <Button variant={variant}>{text}</Button>
    </Link>
  );
};

export default StyledButton;
