import { Box, Button, Grid } from "@mui/material";

export const Buttons = () => {
  return (
    <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <Button variant="outlined" size="large" fullWidth color="error">
            Dar baja
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant="outlined" size="large" fullWidth color="warning">
            Invalidar
          </Button>{" "}
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant="outlined" size="large" fullWidth>
            Guardar
          </Button>{" "}
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant="outlined" size="large" fullWidth color="success">
            {" "}
            Dar alta
          </Button>{" "}
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant="outlined" size="large" fullWidth color="success">
            {" "}
            Enviar WhatsApp
          </Button>{" "}
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant="outlined" size="large" fullWidth color="secondary">
            {" "}
            cupon de descuento
          </Button>{" "}
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant="outlined" size="large" fullWidth>
            {" "}
            Enviar Email
          </Button>{" "}
        </Grid>
      </Grid>
    </Box>
  );
};
