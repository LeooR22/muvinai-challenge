import { Grid, Card, CardContent, Typography, Chip } from "@mui/material";
import React, { FC } from "react";

interface Props {
  label: string;
  status: "success" | "error";
  fourDigits: number;
  amountPrice: number;
  date: string;
  brandCreditCard: "VISA" | "MASTERCARD";
}

export const PaymentCard: FC<Props> = ({
  label,
  status,
  fourDigits,
  amountPrice,
  date,
  brandCreditCard,
}) => {
  const imageCreditsCards = {
    masterCard: `https://www.udemy.com/staticx/udemy/images/v9/card-mastercard.svg`,
    visa: "https://www.udemy.com/staticx/udemy/images/v9/card-visa.svg",
  };

  return (
    <Grid item xs={12} sx={{ mt: 1 }}>
      <Card variant="outlined">
        <CardContent>
          <Grid container>
            <Grid item xs={6} display="flex" justifyContent="start">
              <Typography>{label}</Typography>
            </Grid>

            <Grid item xs={6} display="flex" justifyContent="end">
              {status === "success" && <Chip label="Pagado" color="success" />}
              {status === "error" && <Chip label="Rechazado" color="error" />}
            </Grid>

            <Grid
              item
              xs={6}
              display="flex"
              justifyContent="start"
              sx={{ mt: 0.5 }}
            >
              {brandCreditCard === "MASTERCARD" && (
                <img
                  src={imageCreditsCards.masterCard}
                  alt={"mastercard"}
                  width={60}
                  loading="lazy"
                />
              )}

              {brandCreditCard === "VISA" && (
                <img
                  src={imageCreditsCards.visa}
                  alt={"visa"}
                  width={60}
                  loading="lazy"
                />
              )}
            </Grid>

            <Grid item xs={6} display="flex" justifyContent="end">
              <Typography sx={{ mt: 2 }}>$ {amountPrice}</Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="start">
              <Typography sx={{ mt: 2 }}> **** {fourDigits}</Typography>
            </Grid>

            <Grid item xs={6} display="flex" justifyContent="end">
              <Typography sx={{ mt: 2 }}>{date}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
