import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  Box,
  Button,
} from "@mui/material";
import { AccessItem } from "./AccessItem";

export const LastAccess = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4">Ultimos Accesos</Typography>
        <Divider sx={{ my: 1 }} />

        {/* Order Summary */}
        <Grid container>
          <AccessItem place={"Belgrano"} numberVisits={10} />
          <AccessItem place={"Microcentro"} numberVisits={5} />
          <AccessItem place={"Pilar"} numberVisits={3} />
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
