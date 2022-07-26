import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  Box,
  Button,
  Chip,
} from "@mui/material";
import React from "react";
import { PaymentCard } from "../payments/PaymentCard";
import { CouponCard } from "./CouponCard";

export const LastCoupons = () => {
  return (
    <Card variant="outlined" sx={{ mt: 2.2 }}>
      <CardContent>
        <Typography variant="h4">Cupones Usados</Typography>
        <Divider sx={{ my: 1 }} />

        <Grid container>
          <CouponCard
            nameCoupon={"OSDE210"}
            percentageDiscount={20}
            betweeenDates={"04/2020 - 04/2021"}
          />
          <CouponCard
            nameCoupon={"OSDE210"}
            percentageDiscount={20}
            betweeenDates={"03/2019 - 04/2020"}
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
