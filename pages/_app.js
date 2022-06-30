// Libraries
import Head from "next/head";
import { ThemeProvider, CssBaseline } from "@mui/material";

// CSS
import "../styles/globals.css";

// Relative imports
import { brandTheme } from "../styles/brandTheme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="brand favicon" href={"/favicon.ico"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={brandTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
