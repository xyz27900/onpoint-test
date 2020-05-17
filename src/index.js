import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './app.css';

const domElement = document.getElementById('app');
domElement ? ReactDOM.render(<App />, domElement) : false;