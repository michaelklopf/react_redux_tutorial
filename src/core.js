/*jshint esversion: 6 */

import {List, Map} from 'immutable';

export function setEntries(state, entries) {
  return state.set('entries', List(entries));
}

export function next(state) {
  const entries = state.get('entries');
  return state.merge({
    vote: Map({pair: entries.take(2)}),
    entries: entries.skip(2)
  });
}

export function vote(state, entry) {
  return state.updateIn(
    ['vote', 'tally', entry],
    0,
    tally => tally + 1
  );
  // updateIn says, change vote, tally, The Dark Knight to tally + 1,
  // or set it to 0 if it does not exist
}
