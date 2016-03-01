import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setEntries} from '../src/core';

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
});
