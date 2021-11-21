import React from "react";
import { Container } from "react-bootstrap";
import FilledButton from "./Buttons/FilledButton/FilledButton";
import OutlinedButton from "./Buttons/OutlinedButton/OutlinedButton";

const AllComponents = () => {
  return (
    <Container className="py-5">
      <FilledButton text={"FILLED"} width={25} align={"middle"}></FilledButton>
      <OutlinedButton
        text={"OUTLINED"}
        width={25}
        align={"middle"}
      ></OutlinedButton>
    </Container>
  );
};

export default AllComponents;
