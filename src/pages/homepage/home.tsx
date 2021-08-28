import React from 'react';

import { Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container>
      <br />
      <Typography variant="h3">Grid puzzles website</Typography>
      <p>Hopefully the home of some interesting puzzles.</p>
      <ul>
        {/* <li>
          <Link to="/days">View all days of puzzles</Link>
        </li> */}
        <li>
          <Link to="/stages/375262364">Core mechanic intro</Link>
        </li>
        <li>
          <Link to="/devlogs">View all devlogs</Link>
        </li>
      </ul>
    </Container>
  );
};

export default HomePage;
