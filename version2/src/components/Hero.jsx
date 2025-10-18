import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #001F3F 0%, #1a237e 100%)',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: '64px', // Height of the navbar
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(41, 98, 255, 0.1), transparent)',
          pointerEvents: 'none',
        }
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <Box 
          sx={{ 
            maxWidth: '1200px',
            mx: 'auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
              background: 'linear-gradient(45deg, #ffffff 30%, #e0e0e0 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Data Insights at the speed of light.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 6,
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Experience data like never before with our cutting-edge analytics and research solutions.
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 3, 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <Button
              component={Link}
              to="/why_choose_us"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: '#1a237e',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              WHY CHOOSE US
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'white',
                borderWidth: 2,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              GET IN TOUCH
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}