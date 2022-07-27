import { Box, Button, Grid, Link } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../context/user";

export const Buttons = () => {
  const { userForm } = useContext(UserContext);

  const { telephone, email } = userForm;

  const handleUnsubscribe = () => {
    console.log(`Dar baja usuario ${email}`);
  };

  const handleInvalidate = () => {
    console.log(`Invalidar usuario ${email}`);
  };

  const handleSave = () => {
    console.log(`Guardar usuario `);
  };

  const handleSubscribe = () => {
    console.log(`dar alta usuario ${email}`);
  };

  const sendWhatsapp = () => {};

  return (
    <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <Button
            variant="outlined"
            size="large"
            fullWidth
            color="error"
            onClick={handleUnsubscribe}
          >
            Dar baja
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button
            variant="outlined"
            size="large"
            fullWidth
            color="warning"
            onClick={handleInvalidate}
          >
            Invalidar
          </Button>{" "}
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button
            variant="outlined"
            size="large"
            fullWidth
            onClick={handleSave}
          >
            Guardar
          </Button>{" "}
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button
            variant="outlined"
            size="large"
            fullWidth
            color="success"
            onClick={handleSubscribe}
          >
            {" "}
            Dar alta
          </Button>{" "}
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link
            href={`https://wa.me/+54${telephone}`}
            target="_blank"
            rel="noopener"
            underline="none"
            color="inherit"
          >
            <Button variant="outlined" size="large" fullWidth color="success">
              Enviar WhatsApp
            </Button>{" "}
          </Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant="outlined" size="large" fullWidth color="secondary">
            {" "}
            cupon de descuento
          </Button>{" "}
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener"
            underline="none"
            color="inherit"
          >
            <Button variant="outlined" size="large" fullWidth>
              {" "}
              Enviar Email
            </Button>{" "}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
