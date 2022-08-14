import { AppBar } from '@mui/material';

const Header = () => {
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      ></AppBar>
    </>
  );
};

export default Header;
