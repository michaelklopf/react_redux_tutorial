/*jshint esversion: 6 */
import React from 'react';
import {List, Map} from 'immutable';

const pair = List.of('Inception', 'Interstellar');
const tally = Map({'Inception': 5, 'Interstellar': 4});

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {
      pair: pair,
      tally: tally
    });
  }
});
