import React from "react";
import { Button } from "react-bootstrap";
import "./FilledButton.css";

const FilledButton = (props) => {
  const { text } = props;

  const commonClass = "filled-btn border-0 my-3";
  let buttonWidth = "";
  let buttonAlign = "";

  props?.width === 25 ? (buttonWidth = "w-25") : (buttonWidth = "");

  props?.align === "middle"
    ? (buttonAlign = "d-block mx-auto")
    : (buttonAlign = "d-block");

  return (
    <Button className={`${commonClass} ${buttonWidth} ${buttonAlign}`}>
      {text}
    </Button>
  );
};

export default FilledButton;
