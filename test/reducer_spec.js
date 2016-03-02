/*jshint esversion: 6 */
import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
  it('handles SET_ENTRIES', () => {
    const initialState = Map();
    const action = {type: 'SET_ENTRIES', entries: ['Inception']};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      entries: ['Inception']
    }));
  });

  it('handles NEXT', () => {
    const initialState = fromJS({
      entries: ['Inception', 'Interstellar']
    });
    const action = {type: 'NEXT'};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Inception', 'Interstellar']
      },
      entries: []
    }));
  });

  it('handles VOTE', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Inception', 'Interstellar']
      },
      entries: []
    });
    const action = {type: 'VOTE', entry: 'Inception'};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Inception', 'Interstellar'],
        tally: {'Inception': 1}
      },
      entries: []
    }));
  });

  it('has an initial state', () => {
    const action = {type: 'SET_ENTRIES', entries: ['Inception']};
    const nextState = reducer(undefined, action);
    expect(nextState).to.equal(fromJS({
      entries: ['Inception']
    }));
  });

  it('can be used with reduce', () => {
    const actions = [
      {type: 'SET_ENTRIES', entries: ['Inception', 'Interstellar']},
      {type: 'NEXT'},
      {type: 'VOTE', entry: 'Inception'},
      {type: 'VOTE', entry: 'Interstellar'},
      {type: 'VOTE', entry: 'Inception'},
      {type: 'NEXT'}
    ];
    const finalState = actions.reduce(reducer, Map());

    expect(finalState).to.equal(fromJS({
      winner: 'Inception'
    }));
  });
});
