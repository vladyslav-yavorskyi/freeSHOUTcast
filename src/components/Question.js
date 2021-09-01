import { Box, Container, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { questions } from '../questions';
import Answers from './Answers';

function Question() {
  const [id, setAnswer] = useState(1);

  const allAccordion = useRef(null);

  const openAnswer = () => {
    const accordion = allAccordion.current.querySelectorAll(`[data-id]`);
    accordion.forEach((el) => {
      el.style.display = 'none';
      if (+el.dataset.id === id) {
        el.style.display = 'block';
      }
    });
  };

  useEffect(() => {
    openAnswer();
  });

  return (
    <Box component="section">
      <Container maxWidth="lg">
        <Box className="question">
          <Typography component="h1">Frequently Asked Questions:</Typography>

          <Box className="question__table">
            <Box className="question__nav">
              <Typography
                component="h3"
                onClick={() => {
                  setAnswer(1);
                }}
              >
                FreeSHOUTcast
              </Typography>
              <Typography
                component="h3"
                onClick={() => {
                  setAnswer(2);
                }}
              >
                AutoDJ
              </Typography>
              <Typography component="h3">Live Stream</Typography>
              <Typography component="h3">Limits</Typography>
            </Box>
            <Box ref={allAccordion} className="question__answers">
              <Answers id={1} questions={questions.freeSHOUTcast}></Answers>
              <Answers id={2} questions={questions.AutoDJ}></Answers>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Question;
