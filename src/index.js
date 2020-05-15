import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './app.css';

const appContainer = document.getElementById('app-container');
appContainer ? ReactDOM.render(<App />, appContainer) : false;