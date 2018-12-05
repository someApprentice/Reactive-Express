import React from 'react';
import { StaticRouter } from 'react-router-dom';

import App from './App';

export default class Html extends React.Component {
  render() {
    return (
      //<!DOCTYPE html>
      <html>
      <head>
          <title>Reactive Express</title>
      </head>
      <body>
        <div id="root">
          <StaticRouter context={this.props.context} location={this.props.location}>
            <App />
          </StaticRouter>
        </div>
        <script src="main.js" type="text/javascript"></script>
      </body>
      </html>
    );
  }
}