// Libraries
import Link from "next/link";
// MUI
import { AppBar, Toolbar, Grid, Box, CardMedia } from "@mui/material";

// Relative imports
import NavLink from "../../Link";

const navLinks = [
  { title: "Servicios", href: "/servicios" },
  { title: "Otros servicios", href: "/otros-servicios" },
  { title: "Adopción de mascotas", href: "/adopcion-mascotas" },
  { title: "Mascotas perdidas", href: "/mascotas-perdidas" },
];

function Header() {
  return (
    <AppBar component="nav" sx={{ position: "sticky" }}>
      <Toolbar>
        <Grid container>
          {/* Logo */}
          <Grid item xs={1.5}>
            <Box sx={{ width: "80%", height: 85 }}>
              <Link href="/" passHref>
                <a>
                  <CardMedia
                    component="img"
                    image="/images/logo2.png"
                    sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </a>
              </Link>
            </Box>
          </Grid>

          {/* Links */}
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {navLinks.map((section) => (
              <NavLink key={section.title} href={section.href}>{section.title}</NavLink>
            ))}
          </Grid>
          <Grid
            item
            xs={2.5}
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                border: 1,
                borderRadius: 5,
                borderColor: "#fff",
                px: "1.5rem",
                py: "1rem",
                color: "#fff",
              }}
            >
              Login
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
