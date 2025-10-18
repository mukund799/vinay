import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Tabs,
  Tab,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projectsData';

const categories = ['All', 'Finance', 'Healthcare', 'Manufacturing', 'Logistics'];

export default function Projects() {
  const [statusTab, setStatusTab] = useState(0);
  const [category, setCategory] = useState('All');

  const handleStatusChange = (event, newValue) => {
    setStatusTab(newValue);
  };

  const handleCategoryChange = (event, newCategory) => {
    if (newCategory !== null) {
      setCategory(newCategory);
    }
  };

  const getProjectsByStatus = () => {
    let projects = [];
    switch (statusTab) {
      case 0: // All
        projects = [...projectsData.completed, ...projectsData.ongoing, ...projectsData.upcoming];
        break;
      case 1: // Completed
        projects = projectsData.completed;
        break;
      case 2: // Ongoing
        projects = projectsData.ongoing;
        break;
      case 3: // Upcoming
        projects = projectsData.upcoming;
        break;
      default:
        projects = [];
    }
    return category === 'All'
      ? projects
      : projects.filter(project => project.category === category);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" align="center" sx={{ mb: 6, fontWeight: 700 }}>
          Our Projects
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Tabs value={statusTab} onChange={handleStatusChange} centered>
            <Tab label="All Projects" />
            <Tab label="Completed" />
            <Tab label="Ongoing" />
            <Tab label="Upcoming" />
          </Tabs>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <ToggleButtonGroup
            value={category}
            exclusive
            onChange={handleCategoryChange}
            aria-label="category filter"
          >
            {categories.map((cat) => (
              <ToggleButton key={cat} value={cat}>
                {cat}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Grid container spacing={4}>
          {getProjectsByStatus().map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}