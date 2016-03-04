/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Inception', 'The Prestige'];

ReactDOM.render(
  <Voting pair={pair} hasVoted="Inception" />,
  document.getElementById('app')
);
