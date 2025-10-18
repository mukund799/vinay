import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function ResearchNews() {
  return (
    <Box sx={{ py: 6 }}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 3,
        }}
      >
        <span role="img" aria-label="news">🗞️</span> Published Research
        <Typography
          component="span"
          sx={{
            ml: 2,
            color: 'text.secondary',
            fontSize: '0.9rem',
          }}
        >
          · 29/01/2025
        </Typography>
      </Typography>
      <Paper
        elevation={0}
        sx={{
          p: 3,
          bgcolor: 'rgba(25, 118, 210, 0.05)',
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          Optimizing Financial Modeling with Machine Learning: Integrating Particle Swarm Optimization for Enhanced Predictive Analytics
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Our latest research explores innovative approaches to financial modeling using advanced machine learning techniques
          and optimization algorithms. This groundbreaking study demonstrates significant improvements in predictive accuracy
          and computational efficiency.
        </Typography>
      </Paper>
    </Box>
  );
}