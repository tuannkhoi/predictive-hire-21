import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import SignInModal from '../SignInModal/SignInModal';
import menuItems from './NavBarMenu';


export default function ResponsiveAppBar() {
  const [signIn, toggleSignIn] = useState(false);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <NavLink to="/" style={{color: 'white', textDecoration: 'none'}}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              Predictive Hire
            </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {menuItems}
          </Box>

          <Box sx={{ flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'row-reverse'}}>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {
                signIn ?
                <NavLink to="/">Log out</NavLink> :
                <SignInModal />
              }
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
