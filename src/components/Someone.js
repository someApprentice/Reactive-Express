import React from 'react';

import { Link } from 'react-router-dom';

export default class Someone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: "The Universe is isomorphic"};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({value: e.target.phrase.value})
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div>
        <h2>Someone</h2>


        Someone said that: {this.state.value}

        <form method="post" onSubmit={this.handleSubmit} action="/">
          <input name="phrase" type="text" value={this.state.value} onChange={this.handleChange} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}