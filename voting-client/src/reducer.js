/*jshint esversion: 6 */
import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

export default function(action, state = Map()) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
  }
  return state;
}