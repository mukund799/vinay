import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <Navbar />
      <Box 
        component="main"
        sx={{ 
          flex: 1,
          width: '100%',
          pt: '64px', // Height of the navbar
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
