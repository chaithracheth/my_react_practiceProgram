import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App1 from './App1';
 import Employee from './Employee';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App1 />, document.getElementById('root'));
ReactDOM.render(<Employee />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
