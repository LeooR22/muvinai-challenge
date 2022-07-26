import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  Box,
  Button,
} from "@mui/material";

import { PaymentCard } from "../payments/PaymentCard";
import { CertificateCard } from "./CertificateCard";

export const MedicCertificate = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4">Certificado Medico</Typography>
        <Divider sx={{ my: 1 }} />

        <Grid container>
          <CertificateCard />
        </Grid>
      </CardContent>
    </Card>
  );
};
