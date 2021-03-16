import React from 'react';
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom';

import NavBar2 from '../../Components/NavBar2';
import Topic from './Topic';

export default function About() {
    let { path } = useRouteMatch();

    return (
        <div>
            About Page
            <NavBar2 />

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
        </div>
    )
}
