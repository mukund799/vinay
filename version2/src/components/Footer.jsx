import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#1a237e', color: '#fff', py: 4, mt: 8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', mb: 2 }}>
        <MuiLink href="/about" color="inherit" underline="hover">About</MuiLink>
        <MuiLink href="/services" color="inherit" underline="hover">Services</MuiLink>
        <MuiLink href="/explore" color="inherit" underline="hover">Explore</MuiLink>
        <MuiLink href="/projects" color="inherit" underline="hover">Projects</MuiLink>
        <MuiLink href="/faq" color="inherit" underline="hover">FAQ</MuiLink>
        <MuiLink href="/contact" color="inherit" underline="hover">Contact</MuiLink>
      </Box>
      <Typography align="center" variant="body2" color="inherit">
        © 2025 MythoQuantum. All rights reserved.
      </Typography>
    </Box>
  );
}
