import React from 'react';
import { Box, Typography, Paper, Avatar, Container } from '@mui/material';

const testimonial = {
  name: 'Manish Mishra',
  image: '/manish_mishra.jpg', // You'll need to add this image to your assets folder
  quote: 'I believe NIRDS Explored is on the track of creating a revolutionary change through its data science lab where their rigorous research and development will remark tangible solutions for industry problems.'
};

export default function Testimonials() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            bgcolor: 'background.paper',
            borderRadius: 4,
            position: 'relative',
            textAlign: 'center',
          }}
        >
          <Avatar
            src={testimonial.image}
            alt={testimonial.name}
            sx={{
              width: 100,
              height: 100,
              mx: 'auto',
              mb: 3,
              border: 3,
              borderColor: 'primary.main',
            }}
          />
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              fontStyle: 'italic',
              mb: 3,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            "{testimonial.quote}"
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 600 }}
          >
            {testimonial.name}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}