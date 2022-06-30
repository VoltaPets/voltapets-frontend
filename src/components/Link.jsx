import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";

function Link({ href, children }) {
  return (
    <NextLink href={href} passHref>
      <MUILink
        underline="none"
        sx={{
          textAlign: "center",
          p: "0.2rem",
          width: "15%",
          color: "#fff",
          fontWeight: 600,
          fontSize: "0.9rem",
          transition: "0.6s",
          "&:hover": { color: "text.primary" },
        }}
      >
        {children}
      </MUILink>
    </NextLink>
  );
}

export default Link;
