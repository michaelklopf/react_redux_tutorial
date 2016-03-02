/*jshint esversion: 6 */

import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setEntries, next, vote} from '../src/core';

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

    it('puts winner of current vote back to entries', () => {
      const state = Map({
        vote: Map({
          pair: List.of('The Dark Knight', 'Inception'),
          tally: Map({
            'The Dark Knight': 4,
            'Inception': 2
          })
        }),
        entries: List.of('Interstellar', 'Insomnia', 'Memento')
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Interstellar', 'Insomnia')
        }),
        entries: List.of('Memento', 'The Dark Knight')
      }));
    });

    it('puts both from tied vote back to entries', () => {
      const state = Map({
        vote: Map({
          pair: List.of('The Dark Knight', 'Inception'),
          tally: Map({
            'The Dark Knight': 3,
            'Inception': 3
          })
        }),
        entries: List.of('Interstellar', 'Insomnia', 'Memento')
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Interstellar', 'Insomnia')
        }),
        entries: List.of('Memento', 'The Dark Knight', 'Inception')
      }));
    });

    it('marks winner when just one entry left', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Inception', 'Interstellar'),
          tally: Map({
            'Inception': 4,
            'Interstellar': 2
          })
        }),
        entries: List()
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        winner: 'Inception'
      }));
    });
  }); // end next

  describe('vote', () => {
    it('creates a tally for the voted entry', () => {
      const state = Map({
        vote: Map({
          pair: List.of('The Dark Knight', 'Inception')
        }),
        entries: List()
      });
      const nextState = vote(state, 'Inception');
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('The Dark Knight', 'Inception'),
          tally: Map({
            'Inception': 1
          })
        }),
        entries: List()
      }));
    });

    it('adds to existing tally for the voted entry', () => {
      const state = Map({
        vote: Map({
          pair: List.of('The Dark Knight', 'Inception'),
          tally: Map({
            'The Dark Knight': 3,
            'Inception': 2
          })
        }),
        entries: List()
      });
      const nextState = vote(state, 'The Dark Knight');
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('The Dark Knight', 'Inception'),
          tally: Map({
            'The Dark Knight': 4,
            'Inception': 2
          })
        }),
        entries: List()
      }));
    }); // end it
  }); // end vote describe
});
