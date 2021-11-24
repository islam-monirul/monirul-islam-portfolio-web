import React from "react";
import { Button } from "react-bootstrap";
import "./OutlinedButton.css";

const OutlinedButton = (props) => {
  const { text } = props;

  let commonClass = "";
  let buttonWidth = "";
  let buttonAlign = "";

  props?.color === "white"
    ? (commonClass = "outlined-btn-white my-3 border-2")
    : (commonClass = "outlined-btn my-3 border-2");

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

export default OutlinedButton;
