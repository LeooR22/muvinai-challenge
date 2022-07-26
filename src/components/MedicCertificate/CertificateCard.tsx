import {
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Button,
} from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../context/user";

export const CertificateCard = () => {
  const { isMedicCertified, toggleMedicCertified } = useContext(UserContext);
  return (
    <Grid item xs={12} sx={{ mt: 1 }}>
      <Card variant="outlined">
        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={6} display="flex" justifyContent="start">
              <Typography sx={{ mt: 0.6, cursor: "pointer" }}>
                {"Certificado-Medico-Jhon-Doe.pdf"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} display="flex" justifyContent="end">
              <Typography sx={{ mt: 0.6, mr: 1 }}>{"Estado:"}</Typography>
              {isMedicCertified ? (
                <Chip label="Aprobado" color="success" />
              ) : (
                <Chip label="Desaprobado" color="error" />
              )}
            </Grid>
            <Grid item xs={12} sm={6} display="flex" justifyContent="start">
              <Typography variant="overline" sx={{ mt: 0.6 }}>
                {"Valido hasta el: 26/02/2023"}
              </Typography>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}></Grid>
              <Grid item xs={12} sm={3}>
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  color="error"
                  onClick={toggleMedicCertified}
                  disabled={!isMedicCertified}
                >
                  Reprobar
                </Button>
              </Grid>

              <Grid item xs={12} sm={3}>
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  color="success"
                  onClick={toggleMedicCertified}
                  disabled={isMedicCertified}
                >
                  Aprobar
                </Button>{" "}
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
