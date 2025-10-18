import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Stack,
  IconButton,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const socialLinks = [
  { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/company/mythoquantum-explorers/', name: 'LinkedIn' },
  { icon: <TwitterIcon />, url: 'https://twitter.com/mythoquantum', name: 'Twitter' },
  { icon: <InstagramIcon />, url: 'https://www.instagram.com/mythoquantum_explorers', name: 'Instagram' },
];

const contactInfo = [
  {
    icon: <EmailIcon />,
    title: 'Email',
    content: 'contact@mythoquantum.com',
    link: 'mailto:contact@mythoquantum.com',
  },
  {
    icon: <PhoneIcon />,
    title: 'Phone',
    content: '+91 XXXXX XXXXX',
    link: 'tel:+91XXXXXXXXXX',
  },
  {
    icon: <LocationOnIcon />,
    title: 'Location',
    content: 'Delhi, India',
    link: null,
  },
];

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <Typography variant="h3" component="h1" align="center" sx={{ mb: 6, fontWeight: 700 }}>
          Get in Touch
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, height: '100%' }}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    required
                    fullWidth
                    label="Name"
                    variant="outlined"
                  />
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Phone"
                    variant="outlined"
                  />
                  <TextField
                    required
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ mt: 2 }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              {contactInfo.map((info, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}
                >
                  <Box sx={{ color: 'primary.main' }}>{info.icon}</Box>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {info.title}
                    </Typography>
                    {info.link ? (
                      <Typography
                        component="a"
                        href={info.link}
                        sx={{
                          color: 'text.secondary',
                          textDecoration: 'none',
                          '&:hover': { color: 'primary.main' },
                        }}
                      >
                        {info.content}
                      </Typography>
                    ) : (
                      <Typography color="text.secondary">
                        {info.content}
                      </Typography>
                    )}
                  </Box>
                </Paper>
              ))}

              <Paper elevation={0} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Follow Us
                </Typography>
                <Stack direction="row" spacing={1}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}