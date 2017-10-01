import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import HomePage from './pages/HomePage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App><HomePage /></App>, document.getElementById('root'));
registerServiceWorker();
