// Librerías
import Head from "next/head";

// MUI
import { Grid, Typography } from "@mui/material";

// Relative Imports
import MainLayout from "../src/components/Layout";

export default function Home() {
  return (
    <MainLayout
      title={"Volta Pets - Home"}
      description={"Página principal de Volta Pets"}
    >
      <Grid
        container
        sx={{p: "1rem" }}
      >
        <Grid item xs={12} mt={2}>
          <Typography variant="h3">Bienvenido a Volta Pets</Typography>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
