import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export default function ResponsiveAppBar() {
  const [signIn, toggleSignIn] = useState(false);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              Predictive Hire
            </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <NavLink to="/products">
                Products
              </NavLink>
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <NavLink to="/pricing">
                Pricing
              </NavLink>
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <NavLink to="/resources">
                Resources
              </NavLink>
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <NavLink to="/blog">
                Blog
              </NavLink>
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <NavLink to="/why-us">
                Why us
              </NavLink>
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <NavLink to="/contact">
                Contact
              </NavLink>
            </Button>
          </Box>
          <Box>
            {
              signIn ?
              <NavLink to="/">Sign out</NavLink> :
              <NavLink to="/">Sign in</NavLink>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
