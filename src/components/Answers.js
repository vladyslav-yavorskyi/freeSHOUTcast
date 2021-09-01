import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@material-ui/core';
import React from 'react';

function Answers({ questions, id }) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box data-id={id} style={{ width: '100%', marginLeft: '8%' }}>
      {questions.map((el) => {
        return (
          <Accordion
            square
            expanded={expanded === `panel${el.id}`}
            onChange={handleChange(`panel${el.id}`)}
            key={el.id}
          >
            <AccordionSummary
              aria-controls={`panel${el.id}d-content`}
              id={`panel${el.id}d-header`}
            >
              <Typography style={{ fontWeight: 'bold' }}>{el.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{el.text}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}

export default Answers;
