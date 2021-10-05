import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SandwichContext, SandwichProvider } from './providers/sandwichProvider';

const initialize = {Name: "U Poníka", Sandwich: [[0,0,1], [1,0]]}

ReactDOM.render(
  <React.StrictMode>
    <SandwichProvider value={initialize}>
      <App />
    </SandwichProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
