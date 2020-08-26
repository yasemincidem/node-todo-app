import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Todos from './Todos';

const App = function () {
  return (
    <Router>
        <Switch>
          <Route path="/">
            <Todos />
          </Route>
        </Switch>
    </Router>
  );
};
const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
