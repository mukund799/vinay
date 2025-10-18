import React from 'react';
import { Box, Container, Typography, Grid, Tabs, Tab } from '@mui/material';
import ArticleCard from '../components/ArticleCard';
import exploreData from '../data/exploreData';

export default function Explore() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" align="center" sx={{ mb: 6, fontWeight: 700 }}>
          Research & Insights
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Research Articles" />
            <Tab label="Industry Insights" />
          </Tabs>
        </Box>

        <Grid container spacing={4}>
          {value === 0 && exploreData.researchArticles.map((article) => (
            <Grid item xs={12} sm={6} key={article.id}>
              <ArticleCard article={article} />
            </Grid>
          ))}
          {value === 1 && exploreData.industryInsights.map((article) => (
            <Grid item xs={12} sm={6} key={article.id}>
              <ArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}