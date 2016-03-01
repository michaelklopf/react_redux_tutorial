import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setEntries, next} from '../src/core';

describe('application logic', () => {
  describe('setEntries', () => {
      it('adds the entries to the state', () => {
        const state = Map();
        const entries = List.of('The Dark Knight', 'Inception');
        const nextState = setEntries(state, entries);
        expect(nextState).to.equal(Map({
          entries: List.of('The Dark Knight', 'Inception')
        }));
      });

      it('converts to immutable', () => {
        const state = Map();
        const entries = ['The Dark Knight', 'Inception'];
        const nextState = setEntries(state, entries);
        expect(nextState).to.equal(Map({
          entries: List.of('The Dark Knight', 'Inception')
        }));
      });
  });

  describe('next', () => {
    it('takes the next two entries under vote', () => {
      const state = Map({
        entries: List.of('The Dark Knight', 'Inception', 'Memento')
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('The Dark Knight', 'Inception')
        }),
        entries: List.of('Memento')
      }));
    });
  });
});
