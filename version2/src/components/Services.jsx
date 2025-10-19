import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const services = [
  {
    title: 'Innovative R&D',
    description: 'Where innovation meets precision, and ideas turn into impactful solutions.',
    icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Data Analytics & AI',
    description: 'Enabling smarter, faster, and future-ready decisions with AI-powered analytics.',
    icon: <DataThresholdingIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Data Modeling',
    description: 'Building precision models that drive confident forecasting, optimization, and data-powered decision-making.',
    icon: <AccountTreeIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Development',
    description: 'Turning visionary ideas into robust, scalable solutions that accelerate growth and drive innovation.',
    icon: <DeveloperModeIcon sx={{ fontSize: 40 }} />,
  },
];

export default function Services() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        sx={{ mb: 6, fontWeight: 700 }}
      >
        Services we offer
      </Typography>
      <Grid container spacing={4} sx={{ display: 'flex' , flexDirection: 'column' }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <Box
                sx={{
                  p: 3,
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#1a237e',
                }}
              >
                {service.icon}
              </Box>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}