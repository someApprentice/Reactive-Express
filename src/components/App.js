import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Main from './Main';
import Somewhere from './Somewhere'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Reactive Express</h1>
          
        <Switch>
          <Route exact path="/" component={Main} />} />
          <Route exact path="/somewhere" component={Somewhere} />
        </Switch>
      </div>
    );
  }
}