import React from 'react';
import { Box } from '@mui/material';
import CompanyOverview from '../components/CompanyOverview';
import TeamSection from '../components/TeamSection';

export default function About() {
  return (
    <Box>
      <CompanyOverview />
      <TeamSection />
    </Box>
  );
}