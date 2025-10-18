import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ServiceDetail from '../components/ServiceDetail';
import servicesData from '../data/servicesData';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Services as ServicesOverview } from '../components';

export default function Services() {
  const { id } = useParams();

  // If no ID is provided, show all services
  if (!id) {
    return (
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" align="center" sx={{ mb: 6, fontWeight: 700 }}>
            Our Services
          </Typography>
          <ServicesOverview />
        </Container>
      </Box>
    );
  }

  const service = servicesData.find(s => s.id === parseInt(id));
  
  // If invalid ID, redirect to services overview
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return <ServiceDetail service={service} />;
}