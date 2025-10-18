import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import TeamMemberCard from './TeamMemberCard';

const teamMembers = [
  {
    name: 'Manish Mishra',
    role: 'Founder & CEO',
    description: 'Leading innovation in data science and analytics with over a decade of experience in transforming businesses through technology.',
    image: '/manish_mishra.jpg',
    linkedin: 'https://www.linkedin.com/in/manish-mishra/',
    email: 'manish@NIRDS.com'
  },
  // Add more team members as needed
];

export default function TeamSection() {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 6 }}
        >
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TeamMemberCard member={member} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}