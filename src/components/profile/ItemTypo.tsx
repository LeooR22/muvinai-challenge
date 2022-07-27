import { Grid, Typography } from "@mui/material";
import React, { FC } from "react";

interface Props {
  label: string;
  value: string | number | boolean;
}

export const ItemTypo: FC<Props> = ({ label, value }) => {
  return (
    <Grid item xs={12} sm={3}>
      <Typography sx={{ mt: 0.6 }}>{`${label}: ${value}`}</Typography>{" "}
    </Grid>
  );
};
