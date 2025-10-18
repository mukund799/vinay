import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'SERVICES', path: '/services' },
  { label: 'EXPLORE', path: '/explore' },
  { label: 'PROJECTS', path: '/projects' },
  { label: 'FAQ', path: '/faq' },
  { label: 'CONTACT', path: '/contact' },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ 
      bgcolor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/"
            sx={{ 
              flexGrow: 1, 
              fontWeight: 700,
              color: '#1a237e',
              textDecoration: 'none',
              fontSize: '1.5rem'
            }}
          >
            NIRDS
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map((link) => (
              <Button 
                key={link.path} 
                component={Link} 
                to={link.path} 
                sx={{ 
                  color: '#333',
                  mx: 1,
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#1a237e',
                    transition: 'width 0.3s ease-in-out'
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                    '&::after': {
                      width: '80%'
                    }
                  }
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton 
              onClick={handleMenu}
              sx={{ color: '#1a237e' }}
            >
              <MenuIcon />
            </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {navLinks.map((link) => (
              <MenuItem key={link.path} component={Link} to={link.path} onClick={handleClose}>
                {link.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
      </Container>
    </AppBar>
  );
}
