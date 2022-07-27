import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export const Profile = () => {
  return (
    <Grid container sx={{ mt: 4 }} spacing={2}>
      <Grid item xs={12} sx={{ mt: 1 }}>
        <Typography variant="h2" component="h2">
          Socio Nro: 389
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <Grid container display="flex" spacing={1}>
              <Grid item xs={12} sm={12} display="flex" justifyContent="center">
                <Avatar
                  sx={{ bgcolor: deepPurple[500], width: 60, height: 60 }}
                >
                  OP
                </Avatar>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography sx={{ mt: 0.6 }}>{`Nombre: Jhon`}</Typography>{" "}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography sx={{ mt: 0.6 }}>{`Apellido: Doe`}</Typography>{" "}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography sx={{ mt: 0.6 }}>{`Plan activo: FULL`}</Typography>{" "}
              </Grid>
              <Grid item xs={12} sm={3} display="flex">
                <Typography sx={{ mt: 0.6, mr: 1 }}>{"Activo:"}</Typography>
                <Chip label="Alta" color="success" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography sx={{ mt: 0.6 }}>{`DNI: 12.123.123`}</Typography>{" "}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography
                  sx={{ mt: 0.6 }}
                >{`Telefono: 11-1234-1234`}</Typography>{" "}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography
                  sx={{ mt: 0.6 }}
                >{`Email: test@test.com`}</Typography>{" "}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography
                  sx={{ mt: 0.6 }}
                >{`Nacimiento: 22/02/2000`}</Typography>{" "}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography
                  sx={{ mt: 0.6 }}
                >{`Proximo pago: 27/08/22`}</Typography>{" "}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography sx={{ mt: 0.6 }}>{`ID Socio: 398`}</Typography>{" "}
              </Grid>
              <Grid item xs={12} sm={3} display="flex">
                <Typography sx={{ mt: 0.6, mr: 1 }}>
                  {"Cert. Medico:"}
                </Typography>
                <Chip label="Aprobado" color="success" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
