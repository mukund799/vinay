import React from 'react';
import { Box, Container, Typography, Link as MuiLink, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const footerLinks = {
  'About': [
    { label: 'About Us', path: '/about' },
    { label: 'Our Team', path: '/about#team' },
    { label: 'Contact Us', path: '/contact' }
  ],
  'Services': [
    { label: 'Innovative R&D', path: '/services/0' },
    { label: 'Data Analytics & AI', path: '/services/1' },
    { label: 'Data Modeling', path: '/services/2' },
    { label: 'Development', path: '/services/3' }
  ],
  'Explore': [
    { label: 'Why Choose Us?', path: '/why_choose_us' },
    { label: 'Research Articles', path: '/research_and_reports' },
    { label: 'Industry Insights', path: '/industry_insights' }
  ],
  'Projects': [
    { label: 'All Projects', path: '/projects' },
    { label: 'Completed', path: '/projects#completed' },
    { label: 'Ongoing', path: '/projects#ongoing' },
    { label: 'Upcoming', path: '/projects#upcoming' }
  ]
};

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#16216e',
        color: '#fff',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid item xs={12} sm={6} md={3} key={category}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {category}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {links.map((link) => (
                  <MuiLink
                    key={link.path}
                    component={Link}
                    to={link.path}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: 'white',
                      }
                    }}
                  >
                    {link.label}
                  </MuiLink>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography 
          align="center" 
          variant="body2" 
          sx={{ 
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'rgba(255, 255, 255, 0.8)'
          }}
        >
          © 2025 MythoQuantum. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
