import NextLink from 'next/link';
import { Link as MUILink } from '@mui/material';

export default function Link({ href = '', children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <MUILink
        {...props}
        underline="none"
        sx={{ display: 'flex', alignItems: 'center', color: 'white' }}
      >
        {children}
      </MUILink>
    </NextLink>
  );
}
