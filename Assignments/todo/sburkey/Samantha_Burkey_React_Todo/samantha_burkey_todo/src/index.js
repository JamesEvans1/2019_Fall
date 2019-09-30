import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './App';
import * as serviceWorker from './serviceWorker';

var destination = document.querySelector(".container");
  
ReactDOM.render(
    <div>
        <Todo />
    </div>,
    
    destination
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
