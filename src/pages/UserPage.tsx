import { Container } from "@mui/material";
import { Buttons } from "../components/Buttons";
import { Form } from "../components/Form";
import { InfoComponent } from "../components/InfoComponent";
import { Profile } from "../components/profile/Profile";

export const UserPage = () => {
  return (
    <Container>
      <Profile />
      <Form />
      <Buttons />
      <InfoComponent />
    </Container>
  );
};
