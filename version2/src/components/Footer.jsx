import React from 'react';
import { Box, Container, Typography, Link as MuiLink, Grid, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const footerSections = [
  {
    title: 'About',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Team', path: '/about#team' },
      { label: 'Contact Us', path: '/contact' }
    ]
  },
  {
    title: 'Services',
    links: [
      { label: 'Innovative R&D', path: '/services/0' },
      { label: 'Data Analytics & AI', path: '/services/1' },
      { label: 'Data Modeling', path: '/services/2' },
      { label: 'Development', path: '/services/3' }
    ]
  },
  {
    title: 'Explore',
    links: [
      { label: 'Why Choose Us?', path: '/why_choose_us' },
      { label: 'Research Articles and Reports', path: '/research_and_reports' },
      { label: 'Industry Insights', path: '/industry_insights' }
    ]
  },
  {
    title: 'Projects',
    links: [
      { label: 'All Projects', path: '/projects' },
      { label: 'Completed', path: '/projects#completed' },
      { label: 'Ongoing', path: '/projects#ongoing' },
      { label: 'Upcoming', path: '/projects#upcoming' }
    ]
  }
];

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#00002B',
        color: '#fff',
        mt: 'auto',
        width: '100%',
      }}
    >
      <Container 
        maxWidth={false} 
        sx={{ 
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 2, sm: 4 },
          py: { xs: 6, md: 8 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid 
          container 
          spacing={{ xs: 3, md: 6 }}
          sx={{
            mb: 4,
            width: '100%',
            justifyContent: 'center',
          }}
        >
          {footerSections.map((section) => (
            <Grid 
              item 
              xs={12}  // Full width on mobile
              sm={6}   // Two columns on tablet
              md={3}   // Four columns on desktop
              key={section.title}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.1rem' },
                  fontWeight: 600,
                  mb: { xs: 2, md: 3 },
                  color: '#F5B041',
                }}
              >
                {section.title}
              </Typography>
              <Stack 
                spacing={2}
                sx={{
                  alignItems: { xs: 'center', md: 'flex-start' },
                  width: '100%',
                }}
              >
                {section.links.map((link) => (
                  <MuiLink
                    key={link.path}
                    component={Link}
                    to={link.path}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: { xs: '1rem', md: '0.9rem' },
                      fontWeight: 400,
                      transition: 'all 0.2s ease',
                      textAlign: { xs: 'center', md: 'left' },
                      '&:hover': {
                        color: '#fff',
                      },
                      width: 'fit-content',
                    }}
                  >
                    {link.label}
                  </MuiLink>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
        
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            pt: 3,
            mt: 2,
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.875rem',
            }}
          >
            © 2025 MythoQuantum. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
