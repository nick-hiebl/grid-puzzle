import React, { Fragment } from 'react';

import { Card, CardContent, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { Loglist } from '../devlog';

const HomePage = () => {
  return (
    <Container>
      <br />
      <Typography variant="h3">Grid puzzles website: Dev logs</Typography>
      <p>Hopefully the home of some interesting puzzles.</p>
      {Loglist.filter(log => !log.hidden).map(log => (
        <Fragment key={log.link}>
          <Link to={log.link}>
            <Card>
              <CardContent>
                <Typography variant="h5">{log.title}</Typography>
                {log.description && (<p>{log.description}</p>)}
              </CardContent>
            </Card>
          </Link>
          <br />
        </Fragment>
      ))}
    </Container>
  );
};

export default HomePage;
