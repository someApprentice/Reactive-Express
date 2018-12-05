import React from 'react';

import { interval } from 'rxjs';

import { Link } from 'react-router-dom';

const MOCK = [
  "All actions have a reaction",
  "All actions have a reaction",
  "All actions have a reaction"
];

export default class Something extends React.Component {
  constructor(props) {
    super(props);

    this.phrases$;

    this.state = {phrases: []};
  }

  componentWillMount() {
    this.setState({phrases: this.state.phrases.concat(MOCK)});
  }

  componentDidMount() {
    let phrases = interval(3000);
    
    this.phrases$ = phrases.subscribe(() => this.setState({phrases: this.state.phrases.concat("All actions have a reaction")}));
  }

  componentWillUnmount() {
    this.phrases$.unsubscribe();
  }

  render() {
    let lists = this.state.phrases.map((p, i) => <li key={i}>{p}</li>);

    return (
      <div>
        <h2>Something</h2>

        <ul>
          {lists}
        </ul>
      </div>
    );
  }
}