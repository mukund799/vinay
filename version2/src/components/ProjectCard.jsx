import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';

const statusColors = {
  completed: 'success',
  ongoing: 'warning',
  upcoming: 'info',
};

export default function ProjectCard({ project }) {
  return (
    <Card
      elevation={0}
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
        height="200"
        image={project.image}
        alt={project.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ mb: 2 }}>
          <Chip
            label={project.status}
            color={statusColors[project.status]}
            size="small"
            sx={{ mr: 1 }}
          />
          <Chip
            label={project.category}
            variant="outlined"
            size="small"
          />
        </Box>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {project.description}
        </Typography>
        <Typography variant="subtitle2" color="primary">
          {project.client}
        </Typography>
      </CardContent>
    </Card>
  );
}