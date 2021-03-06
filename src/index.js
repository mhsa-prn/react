import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Card from './components/Card/Card'
import reportWebVitals from './reportWebVitals';
import Event from "./Event";
import Card2 from "./components/Card/Card2";

ReactDOM.render(<App/>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
