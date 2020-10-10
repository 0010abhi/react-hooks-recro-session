import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import APP_ROUTES, { DEFAULT_ROUTE } from './routes.constants';

function AppRouter() {
  const [isAuthenticated] = useState(false);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to={isAuthenticated ? "/dashboard" : DEFAULT_ROUTE} />
        </Route>
        {
          APP_ROUTES.map((route, index) => (
            <Route key={index} path={route.path} component={route.component} />
          ))
        }
      </Switch>
    </Router>
  );
}

export default AppRouter;
