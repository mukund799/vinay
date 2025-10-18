import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Stack,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function TeamMemberCard({ member }) {
  return (
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
      <CardMedia
        component="img"
        image={member.image}
        alt={member.name}
        sx={{
          height: 280,
          objectFit: 'cover',
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 600 }}>
          {member.name}
        </Typography>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          {member.role}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {member.description}
        </Typography>
        <Stack direction="row" spacing={1}>
          {member.linkedin && (
            <IconButton
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              color="primary"
            >
              <LinkedInIcon />
            </IconButton>
          )}
          {member.email && (
            <IconButton
              href={`mailto:${member.email}`}
              size="small"
              color="primary"
            >
              <EmailIcon />
            </IconButton>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}