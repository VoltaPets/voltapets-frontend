// Librerías
import React from "react";
import Head from "next/head";

// Material UI
import { Box, Typography } from "@mui/material";

function MainLayout({ title, description, children }) {
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Box component="main">
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: 60,
            borderBottom: 1,
            bgcolor: "#d3d4d5",
          }}
        >
          <Typography textAlign="center" variant="h4">
            Header
          </Typography>
        </Box>
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
          <Typography variant="h4">Footer</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MainLayout;
