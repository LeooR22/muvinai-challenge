import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/user/UserContext";

type FormData = {
  firstName: string;
  lastName: string;
  plan: string;
  dni: string;
  telephone: string;
  alta: string;
  email: string;
  bornDate: string;
};

export const Form = () => {
  const { saveUserForm, userForm } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      firstName: userForm.firstName,
      lastName: userForm.lastName,
      plan: userForm.plan,
      dni: userForm.dni,
      telephone: userForm.telephone,
      alta: userForm.alta,
      email: userForm.email,
      bornDate: userForm.bornDate,
    },
  });

  const onUserForm = (data: FormData) => {
    saveUserForm(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onUserForm)} noValidate>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre"
              variant="filled"
              fullWidth
              {...register("firstName", {
                required: "Este campo es requerido",
              })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Apellido"
              variant="filled"
              fullWidth
              {...register("lastName", {
                required: "Este campo es requerido",
              })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Plan Activo"
              variant="filled"
              fullWidth
              {...register("plan", {
                required: "Este campo es requerido",
              })}
              error={!!errors.plan}
              helperText={errors.plan?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Dni"
              variant="filled"
              fullWidth
              {...register("dni", {
                required: "Este campo es requerido",
              })}
              error={!!errors.dni}
              helperText={errors.dni?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Telefono"
              variant="filled"
              fullWidth
              {...register("telephone", {
                required: "Este campo es requerido",
              })}
              error={!!errors.telephone}
              helperText={errors.telephone?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Alta"
              variant="filled"
              fullWidth
              {...register("alta", {
                required: "Este campo es requerido",
              })}
              error={!!errors.alta}
              helperText={errors.alta?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="filled"
              fullWidth
              {...register("email", {
                required: "Este campo es requerido",
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nacimiento"
              variant="filled"
              fullWidth
              {...register("bornDate", {
                required: "Este campo es requerido",
              })}
              error={!!errors.bornDate}
              helperText={errors.bornDate?.message}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
          <Button
            type="submit"
            color="secondary"
            size="large"
            variant="outlined"
          >
            Confirmar Datos
          </Button>
        </Box>
      </form>
    </>
  );
};
