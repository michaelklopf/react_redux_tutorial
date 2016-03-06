Full Stack Redux Tutorial
===

Taken from:  
http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html  

Nice to know
===
https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6  
http://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/

Mechanisms
===
A client sends an action to the server.  
The server hands the action to the Redux Store.  
The Store calls the reducer and the reducer executes the logic related to the action.  
The Store updates its state based on the return value of the reducer.  
The Store executes the listener function subscribed by the server.   
The server emits a 'state' event.  
All connected clients - including the one that initiated the original action - receive the new state.  

Test & Development
===
## Front-End  
Add global dependency `npm install -g webpack webpack-dev-server`.  
Start development server with `webpack-dev-server`.  

## Front-End and Back-End
Start tests with `npm run test`.  
