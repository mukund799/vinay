import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const partners = [
  { name: 'IMS BHU', image: '/ims_bhu.png' },
  { name: 'Parasmani', image: '/parasmani.png' },
  { name: 'Singhania University', image: '/singhania_university.png' },
  { name: 'UID Zero', image: '/uid_zero.jpeg' },
];

export default function Partners() {
  return (
    <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{ mb: 4, fontWeight: 600 }}
        >
          Trusted by the best
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
            alignItems: 'center',
          }}
        >
          {partners.map((partner, index) => (
            <Box
              key={index}
              component="img"
              src={partner.image}
              alt={partner.name}
              sx={{
                height: 60,
                objectFit: 'contain',
                filter: 'grayscale(100%)',
                opacity: 0.7,
                transition: 'all 0.3s ease',
                '&:hover': {
                  filter: 'grayscale(0%)',
                  opacity: 1,
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}