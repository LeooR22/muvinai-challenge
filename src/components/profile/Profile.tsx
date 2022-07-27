import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { ItemTypo } from "./ItemTypo";
import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";

export const Profile = () => {
  const { userForm, isMedicCertified } = useContext(UserContext);

  const { firstName, lastName, plan, dni, telephone, alta, email, bornDate } =
    userForm;

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
                  {firstName[0] + lastName[0]}
                </Avatar>
              </Grid>

              <ItemTypo label="Nombre" value={firstName} />
              <ItemTypo label="Apellido" value={lastName} />
              <ItemTypo label="Plan Activo" value={plan} />

              <Grid item xs={12} sm={3} display="flex">
                <Typography sx={{ mt: 0.6, mr: 1 }}>{"Activo:"}</Typography>
                <Chip label="Alta" color="success" />
              </Grid>

              <ItemTypo label="DNI" value={dni} />
              <ItemTypo label="Telefono" value={telephone} />
              <ItemTypo label="Email" value={email} />
              <ItemTypo label="Nacimiento" value={bornDate} />
              <ItemTypo label="Proximo pago" value={"27/08/22"} />
              <ItemTypo label="ID Socio" value={"389"} />

              <Grid item xs={12} sm={3} display="flex">
                <Typography sx={{ mt: 0.6, mr: 1 }}>
                  {"Cert. Medico:"}
                </Typography>
                {isMedicCertified ? (
                  <Chip label="Aprobado" color="success" />
                ) : (
                  <Chip label="Desaprobado" color="error" />
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
