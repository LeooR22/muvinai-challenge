import { Typography, Grid, Chip, Link } from "@mui/material";
import { GridColDef, GridValueGetterParams, DataGrid } from "@mui/x-data-grid";

// Nro de cambio
// Operador
// Categoria
// Estado anterior
// Estado actual
// fecha

const columns: GridColDef[] = [
  { field: "nroCambio", headerName: "Nro de cambio", width: 120 },
  { field: "operador", headerName: "Operador", width: 250 },
  { field: "categoria", headerName: "Categoria", width: 250 },
  { field: "estadoAnterior", headerName: "Estado anterior", width: 250 },
  { field: "estadoActual", headerName: "Estado actual", width: 250 },
];

export const EditionHistorial = () => {
  const editions = [
    {
      nroCambio: "1",
      operador: "Recepcionista Maria",
      categoria: "Certificado medico",
      estadoAnterior: "En espera",
      estadoActual: "Aprobado",
    },
    {
      nroCambio: "2",
      operador: "Recepcionista Maria",
      categoria: "Certificado medico",
      estadoAnterior: "11/2/2021",
      estadoActual: "11/2/2023",
    },
    {
      nroCambio: "3",
      operador: "Recepcionista Maria",
      categoria: "Plan GYM",
      estadoAnterior: "Simple",
      estadoActual: "Full",
    },
  ];
  const rows = editions.map(
    (
      { nroCambio, operador, categoria, estadoAnterior, estadoActual },
      idx
    ) => ({
      id: idx + 1,
      nroCambio,
      operador,
      categoria,
      estadoAnterior,
      estadoActual,
    })
  );
  return (
    <>
      <Typography variant="h3" component="h3">
        Historial de ediciones
      </Typography>

      <Grid container className="fadeIn">
        <Grid item xs={12} sx={{ height: 350, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </>
  );
};
