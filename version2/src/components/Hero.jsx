import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)',
        color: 'white',
        py: { xs: 8, md: 12 },
        mb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 'md', mx: 'auto', textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.75rem' },
            }}
          >
            Data Insights at the speed of light.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            Experience data like never before with our cutting-edge analytics and research solutions.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              component={Link}
              to="/why_choose_us"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: '#1a237e',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              Why Choose Us
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'rgba(255, 255, 255, 0.9)',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Get in touch
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}