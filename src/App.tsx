import React, { useEffect } from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import { AllDays, AllDevlogs, HomePage } from './pages/homepage';
import { dayData } from './pages/days';
import { Loglist } from './pages/devlog';
import { StageList } from './pages/stages';
import { Title } from './components/common';

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

const shownDays = dayData.filter(day => !day.hidden);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppBar position="sticky" color="default">
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h5" style={{ color: 'white' }}>
              Grid Puzzle
            </Typography>
          </Link>
          <NavItem to="/">Home</NavItem>
          {/* <NavItem to="/devlogs">Devlogs</NavItem> */}
          <NavItem to="/stages/375262364">Intro</NavItem>
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
                {index < (shownDays.length - 1) && (
                  <div style={{ float: 'right' }}>
                    <Link to={dayData[index + 1].link}>
                      {dayData[index + 1].title} →
                    </Link>
                  </div>
                )}
              </div>
            )} />
            <Title title={title} />
          </Route>
        ))}
        {Loglist.map(({ component: Component, link, title }, index) => (
          <Route key={index} path={link}>
            <Component links={(
              <div style={{ paddingTop: '8px', marginBottom: '32px' }}>
                {index > 0 && (
                  <div style={{ float: 'left' }}>
                    <Link to={Loglist[index - 1].link}>
                    ← {Loglist[index - 1].title}
                    </Link>
                  </div>
                )}
                {index < (Loglist.length - 1) && (
                  <div style={{ float: 'right' }}>
                    <Link to={Loglist[index + 1].link}>
                      {Loglist[index + 1].title} →
                    </Link>
                  </div>
                )}
              </div>
            )} />
            <Title title={title} />
          </Route>
        ))}
        {StageList.map(({ component: Component, link, title }, index) => (
          <Route key={index} path={link}>
            <Component links={<></>} />
            <Title title={title} />
          </Route>
        ))}
        <Route path="/days">
          <AllDays />
          <Title title="Puzzles - All days" />
        </Route>
        <Route path="/devlogs">
          <AllDevlogs />
          <Title title="Puzzles - All devlogs" />
        </Route>
        <Route path="/">
          <HomePage />
          <Title title="Puzzles" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
