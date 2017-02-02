import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import store from './store';

import App from './components/App';
import Home from './components/Home';
import People from './components/People';
import Film from './components/Film';
import Starships from './components/Starships';
import Vehicle from './components/Vehicle';
import Species from './components/Species';
import Planet from './components/Planet';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="people" component={People} />
        <Route path="film" component={Film} />
        <Route path="starships" component={Starships} />
        <Route path="vehicle" component={Vehicle} />
        <Route path="species" component={Species} />
        <Route path="planet" component={Planet} />
      </Route>
    </Router>
  </Provider>
,document.getElementById('root'));
