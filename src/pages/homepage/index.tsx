import React, { Fragment } from 'react';

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
        <Fragment key={day.link}>
          <Link to={day.link}>
            <Card>
              <CardContent>
                <Typography variant="h5">{day.title}</Typography>
                {day.description && (<p>{day.description}</p>)}
              </CardContent>
            </Card>
          </Link>
          <br />
        </Fragment>
      ))}
    </Container>
  )
};

export default HomePage;
