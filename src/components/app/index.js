
import React, { Fragment } from 'react';
import Menu from '../menu'
import Configurator from '../configurator'
import Testimonial from '../testimonial'
import AppState from '../../context/app/state';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Fragment>
        <AppState>
          <Menu />
          <br />
          <br />
          <br />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <Redirect to="/page-1" />
                )
              }}
            />
            <Route path="/page-1">
              <Testimonial></Testimonial>
            </Route>
            <Route path="/page-2">
              <Configurator></Configurator>
            </Route>
          </Switch>
        </AppState>
      </Fragment>
    </Router>
  );
}

export default App;
