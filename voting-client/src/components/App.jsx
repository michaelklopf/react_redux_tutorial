/*jshint esversion: 6 */
import React from 'react';
import {List} from 'immutable';

const pair = List.of('Inception', 'Interstellar');

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {pair: pair});
  }
});
