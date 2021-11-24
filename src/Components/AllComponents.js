import React from "react";
import { Container } from "react-bootstrap";
import FilledButton from "./Buttons/FilledButton/FilledButton";
import OutlinedButton from "./Buttons/OutlinedButton/OutlinedButton";

const AllComponents = () => {
  const styleDiv = {
    minHeight: "95vh",
  };
  return (
    <>
      <Container className="py-5 bg-dark" style={styleDiv} fluid>
        <p className="text-white text-center">Button Variants</p>
        <FilledButton
          text={"FILLED"}
          width={25}
          align={"middle"}
        ></FilledButton>
        <FilledButton
          text={"FILLED WHITE"}
          width={25}
          align={"middle"}
          color={"white"}
        ></FilledButton>

        <OutlinedButton
          text={"OUTLINED"}
          width={25}
          align={"middle"}
        ></OutlinedButton>
        <OutlinedButton
          text={"OUTLINED WHITE"}
          width={25}
          align={"middle"}
          color={"white"}
        ></OutlinedButton>
      </Container>
    </>
  );
};

export default AllComponents;
