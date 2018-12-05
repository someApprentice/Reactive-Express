import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Someone from './Someone'
import Something from './Something'

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Someone />
        <Something />

        <Link to="/somewhere">Go to Somewhere</Link>
      </div>
    );
  }
}