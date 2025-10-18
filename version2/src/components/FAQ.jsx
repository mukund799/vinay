import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'What is NIRDS Explorers?',
    answer: 'NIRDS Explorers is an innovative organization committed to delivering data-driven solutions through advanced R&D, data modeling, and analytics. We help businesses harness the full potential of data to optimize performance and achieve sustainable growth.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We work with a wide range of industries, including finance, healthcare, manufacturing, supply chain, retail, and more.',
  },
  {
    question: 'What sets NIRDS Explorers apart?',
    answer: 'Our ability to combine cutting-edge R&D with advanced data analytics and AI allows us to provide innovative, sustainable, and actionable solutions tailored to meet the specific needs of each client.',
  },
  {
    question: 'Can you customize your services to our needs?',
    answer: 'Absolutely! We specialize in tailoring our solutions to meet the specific challenges and objectives of your business.',
  },
  {
    question: 'What types of R&D projects do you handle?',
    answer: 'We specialize in innovative research to solve complex industry problems, focusing on sustainability, efficiency, and resilience.',
  },
  {
    question: 'Can you help us implement AI in our business processes?',
    answer: 'Yes! We provide end-to-end AI solutions, from strategy development to implementation and maintenance, tailored to your business needs.',
  },
];

export default function FAQ() {
  return (
    <Box sx={{ py: 8, bgcolor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Frequently Asked Questions
        </Typography>
        <Box sx={{ maxWidth: 'md', mx: 'auto' }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              elevation={0}
              sx={{
                mb: 2,
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    fontWeight: 600,
                  },
                }}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}