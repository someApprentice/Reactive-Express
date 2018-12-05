import React from 'react';
import { Link } from 'react-router-dom';

export default class Somewhere extends React.Component {
  render() {
    return (
      <div>
        <h2>Somewhere</h2>

        <p>Reaction can be channeled to somewhere</p>

        <Link to="/">Back</Link>
      </div>
    );
  }
}