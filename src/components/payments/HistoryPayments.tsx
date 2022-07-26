import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  Box,
  Button,
} from "@mui/material";
import { PaymentCard } from "./PaymentCard";

export const HistoryPayments = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4">Historial de pagos</Typography>
        <Divider sx={{ my: 1 }} />

        <Grid container>
          <PaymentCard
            label={"Suscripcion Mensual"}
            status={"success"}
            fourDigits={2256}
            amountPrice={5370.89}
            date={"26/07/2022"}
            brandCreditCard={"MASTERCARD"}
          />
          <PaymentCard
            label={"Suscripcion Mensual"}
            status={"error"}
            fourDigits={8793}
            amountPrice={5370.89}
            date={"22/07/2022"}
            brandCreditCard={"VISA"}
          />
          <PaymentCard
            label={"Suscripcion Mensual"}
            status={"success"}
            fourDigits={8793}
            amountPrice={5370.89}
            date={"22/06/2022"}
            brandCreditCard={"VISA"}
          />
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Button color="secondary" className="circular-btn" fullWidth href="/">
            Ver mas
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
