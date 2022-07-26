import { Grid, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  place: string;
  numberVisits: number;
}

export const AccessItem: FC<Props> = ({ place, numberVisits }) => {
  return (
    <>
      <Grid item xs={6}>
        <Typography>Accesos Sede {place}</Typography>
      </Grid>

      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{numberVisits}</Typography>
      </Grid>
    </>
  );
};
