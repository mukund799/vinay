import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const highlights = [
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
    title: 'Innovation First',
    description: 'Pioneering breakthrough solutions through advanced research and development.',
  },
  {
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} />,
    title: 'Data-Driven Excellence',
    description: 'Leveraging cutting-edge analytics and AI for precise, actionable insights.',
  },
  {
    icon: <ShowChartIcon sx={{ fontSize: 40 }} />,
    title: 'Sustainable Growth',
    description: 'Creating long-term value through sustainable, scalable solutions.',
  },
];

export default function CompanyOverview() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Discovering the Future of Data Science
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              MythoQuantum Explorers is at the forefront of data science innovation, combining 
              cutting-edge research with practical solutions that drive business transformation.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              Our mission is to unlock the full potential of data through advanced analytics, 
              machine learning, and innovative R&D, helping organizations make smarter decisions 
              and achieve sustainable growth.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {highlights.map((highlight, index) => (
                <Grid item xs={12} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      bgcolor: 'background.default',
                    }}
                  >
                    <Box sx={{ color: 'primary.main' }}>
                      {highlight.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        {highlight.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {highlight.description}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}