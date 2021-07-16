import React from 'react';

import { Card, CardContent, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { dayData } from '../days';

const HomePage = () => {
  return (
    <Container>
      <br />
      <Typography variant="h3">Grid puzzles website</Typography>
      <p>Hopefully the home of some interesting puzzles.</p>
      {dayData.map(day => (
        <>
          <Link key={day.link} to={day.link}>
            <Card>
              <CardContent>
                <Typography variant="h5">{day.title}</Typography>
                {day.description && (<p>{day.description}</p>)}
              </CardContent>
            </Card>
          </Link>
          <br />
        </>
      ))}
    </Container>
  )
};

export default HomePage;
