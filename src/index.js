import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
// registerServiceWorker();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <App />, document.getElementById('root')
// );