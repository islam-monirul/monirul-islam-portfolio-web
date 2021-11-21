import React from "react";
import { Button } from "react-bootstrap";
import "./FilledButton.css";

const FilledButton = (props) => {
  const text = props.text;
  return <Button className="filled-btn border-0">{text}</Button>;
};

export default FilledButton;
