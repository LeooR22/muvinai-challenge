import { Container } from "@mui/material";
import React from "react";
import { Buttons } from "./components/Buttons";
import { Form } from "./components/Form";
import { InfoComponent } from "./components/InfoComponent";

const App = () => {
  return (
    <Container>
      <Form />
      <Buttons />
      <InfoComponent />
    </Container>
  );
};

export default App;
