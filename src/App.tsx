import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import HomePage from './pages/homepage';
import { dayData } from './pages/days';

const NavItem = (props: { children: React.ReactChild, to: string }) => {
  return (
    <Link to={props.to} style={{ textDecoration: 'none', color: 'white', marginLeft: '20px' }}>
      <Typography variant="button">
        {props.children}
      </Typography>
    </Link>
  );
}

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            Grid Puzzle
          </Typography>
          <NavItem to="/">Home</NavItem>
          <NavItem to={dayData[dayData.length - 1].link}>Today</NavItem>
        </Toolbar>
      </AppBar>
      <Switch>
        {dayData.map((data, index) => (
          <Route key={index} path={data.link}>
            {data.component}
          </Route>
        ))}
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
