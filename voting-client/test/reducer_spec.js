/*jshint esversion: 6 */
import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        vote: Map({
          pair: List.of('Inception', 'Batman Begins'),
          tally: Map({'Inception': 1})
        })
      })
    };
    const nextState = reducer(initialState, action);
    const statevar = fromJS({
      vote: {
        pair: ['Inception', 'Batman Begins'],
        tally: {'Inception': 1}
      }
    });
    //console.log(nextState);
    //console.log(statevar);
    expect(nextState).to.equal(statevar);
  });

  it('handles SET_STATE with plain JS payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: ['Inception', 'Interstellar'],
          tally: {'Inception': 1}
        }
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Inception', 'Interstellar'],
        tally: {'Inception': 1}
      }
    }));
  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: ['Inception', 'The Prestige'],
          tally: {'Inception': 1}
        }
      }
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Inception', 'The Prestige'],
        tally: {'Inception': 1}
      }
    }));
  });
});
