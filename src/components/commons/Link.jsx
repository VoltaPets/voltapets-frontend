import NextLink from 'next/link';
import { Link as MUILink } from '@mui/material';

export default function Link({ href, children, sx }) {
  return (
    <NextLink href={href} passHref>
      <MUILink sx={sx}>{children}</MUILink>
    </NextLink>
  );
}
