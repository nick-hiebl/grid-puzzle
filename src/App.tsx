import React, { useEffect } from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import HomePage from './pages/homepage';
import { dayData } from './pages/days';

const ScrollToTop = withRouter(({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return null;
});

const NavItem = (props: { children: React.ReactChild, to: string }) => {
  return (
    <Link to={props.to} style={{ textDecoration: 'none', color: 'white', marginLeft: '32px' }}>
      <Typography variant="button">
        {props.children}
      </Typography>
    </Link>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h5">
            Grid Puzzle
          </Typography>
          <NavItem to="/">Home</NavItem>
          <NavItem to={dayData[0].link}>Day 1</NavItem>
          <NavItem to={dayData[dayData.length - 1].link}>Today</NavItem>
        </Toolbar>
      </AppBar>
      <Switch>
        {dayData.map(({ component: Component, link, title }, index) => (
          <Route key={index} path={link}>
            <Component links={(
              <div style={{ paddingTop: '8px', marginBottom: '32px' }}>
                {index > 0 && (
                  <div style={{ float: 'left' }}>
                    <Link to={dayData[index - 1].link}>
                    ← {dayData[index - 1].title}
                    </Link>
                  </div>
                )}
                {index < (dayData.length - 1) && (
                  <div style={{ float: 'right' }}>
                    <Link to={dayData[index + 1].link}>
                      {dayData[index + 1].title} →
                    </Link>
                  </div>
                )}
              </div>
            )} />
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
