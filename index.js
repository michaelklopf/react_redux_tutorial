/*jshint esversion: 6 */
import makeStore from './src/store';
import startServer from './src/server';

export const store = makeStore();
startServer();
