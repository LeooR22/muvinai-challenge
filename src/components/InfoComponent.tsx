import { Grid } from "@mui/material";
import { LastAccess } from "./access/LastAccess";
import { LastCoupons } from "./coupons/LastCoupons";
import { EditionHistorial } from "./editionHistorial/EditionHistorial";
import { MedicCertificate } from "./MedicCertificate/MedicCertificate";
import { HistoryPayments } from "./payments/HistoryPayments";

export const InfoComponent = () => {
  return (
    <Grid container sx={{ mt: 4 }} spacing={2}>
      <Grid item xs={12}>
        <MedicCertificate />
      </Grid>

      <Grid item xs={12} sm={6}>
        <LastAccess />
        <LastCoupons />{" "}
      </Grid>

      <Grid item xs={12} sm={6}>
        <HistoryPayments />
      </Grid>

      <Grid item xs={12}>
        <EditionHistorial />
      </Grid>
    </Grid>
  );
};
