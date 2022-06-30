// Librerías
import React from "react";
import Head from "next/head";

// Material UI
import { Box, Typography } from "@mui/material";

// Relative Imports
import Header from "./Header";

function MainLayout({ title, description, children }) {
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Box component="main">
        <Header />
        <Box>{children}</Box>

        {/* Footer */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 0,
            width: "100vw",
            height: 60,
            borderTop: 1,
            bgcolor: "#d3d4d5",
          }}
        >
          <Typography variant="h5">Footer</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MainLayout;
