import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Loadable from 'react-loadable';
import { ConnectedRouter } from 'react-router-redux';

import loading from './components/loader';
import { history } from './store';

const LoadableHome = Loadable({
  loader: () => import('./components/home'),
  loading,
});

const LoadableActions = Loadable({
  loader: () => import('./components/actions'),
  loading,
});

export default () => (
  <ConnectedRouter history={history}>
    <Router key={Math.random()}>
      <div>
        <Route exact path="/" component={LoadableHome} />
        <Route path="/actions" component={LoadableActions} />
      </div>
    </Router>
  </ConnectedRouter>
);
