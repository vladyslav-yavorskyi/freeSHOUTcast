import React from 'react';
import Logo from '../images/logo.png';
import Box from '@material-ui/core/Box';
import LockIcon from '@material-ui/icons/Lock';
import { Container } from '@material-ui/core';

const Header = () => {
  return (
    <Container component="header" maxWidth="xl">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box component="a" className="header__link" href="/">
          <img src={Logo} alt="" />
        </Box>
        <Box className="header__login" display="flex" alignItems="center">
          <LockIcon fontSize="small" />
          <Box component="span" p={0.5}>
            Login
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
