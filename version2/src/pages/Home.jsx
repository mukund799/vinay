import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ResearchNews from '../components/ResearchNews';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <Box>
      <Hero />
      <ResearchNews />
      <Services />
      <Testimonials />
      <Partners />
      <FAQ />
    </Box>
  );
}