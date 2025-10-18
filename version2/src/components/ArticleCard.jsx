import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Chip, CardActionArea } from '@mui/material';

export default function ArticleCard({ article }) {
  return (
    <Card elevation={0} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={article.image}
          alt={article.title}
        />
        <CardContent>
          <Box sx={{ mb: 2 }}>
            <Chip
              label={article.category}
              size="small"
              color={article.category === 'Research' ? 'primary' : 'secondary'}
            />
            <Typography variant="caption" sx={{ ml: 1, color: 'text.secondary' }}>
              {article.date}
            </Typography>
          </Box>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}