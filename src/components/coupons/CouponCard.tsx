import { Grid, Card, CardContent, Typography, Chip } from "@mui/material";
import { FC } from "react";

interface Props {
  nameCoupon: string;
  percentageDiscount: number;
  betweeenDates: string;
}

export const CouponCard: FC<Props> = ({
  nameCoupon,
  percentageDiscount,
  betweeenDates,
}) => {
  return (
    <Grid item xs={12} sx={{ mt: 1 }}>
      <Card variant="outlined">
        <CardContent>
          <Grid container>
            <Grid item xs={6} display="flex" justifyContent="start">
              <Typography sx={{ mt: 0.7 }}>{`'${nameCoupon}'`}</Typography>
            </Grid>

            <Grid item xs={6} display="flex" justifyContent="end">
              <Chip
                label={`${percentageDiscount}% DESCUENTO`}
                color="secondary"
              />
            </Grid>

            <Grid item xs={12} display="flex" justifyContent="center">
              <Typography sx={{ mt: 2 }}>{betweeenDates}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};
